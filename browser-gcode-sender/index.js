import initWASM, { parseResponse } from '@d1plo1d/nom-reprap-response-wasm';

const checksum = (line) => {
  let sum = 0
  for (const char of line) {
    sum ^= char.charCodeAt(0)
  }
  sum &= 0xff
  return sum
}

const connectSerial = async ({
  baudRate,
  reuseSerialPort = false,
}) => {
    // Get previously connected ports so we don't need to re-prompt the user
    const ports = await navigator.serial.getPorts()
    // const ports = [];

    let port;
    if (ports.length > 0 && reuseSerialPort) {
      console.log('Reconnecting to previously selected serial port');
      port = ports[0];
    } else {
      // Prompt user to select any serial port.
      port = await navigator.serial.requestPort({
        // filters: [{
        //   // Hardcoded to the Ender 3's product ID for testing. Comment out this line to show all
        //   // ports.
        //   usbVendorId: '0x0403',
        // }],
      });
      console.log('Connecting to new serial port');
    }

    await port.open({ baudRate });

    const textEncoder = new TextEncoderStream();
    textEncoder.readable.pipeTo(port.writable);
    const writer = textEncoder.writable.getWriter();

    const textDecoder = new TextDecoderStream();
    port.readable.pipeTo(textDecoder.writable);
    const reader = textDecoder.readable.getReader();

    return { reader, writer };
}

export const print = async ({
  baudRate,
  gcodes,
  onReceive = (_value) => {},
  onSend = (_value) => {},
  reuseSerialPort = false,
}) => {
  let readBuffer = "";
  let pauseResumePromise = null;
  let pauseResumeResolveFn = null;
  let currentLine = 0;

  await initWASM();
  const { reader, writer } = await connectSerial({
    baudRate,
    reuseSerialPort,
  });

  const gcodeLines = gcodes
    .split('\n')
    .map(line => line.trim())
    // Remove comments and empty lines
    .filter(line => !line.startsWith(';') && !line.startsWith('(') && line.length !== 0);


  // Reads until a full message is received from the printer
  const waitForResponse = async (filter) => {
    while (true) {
      // Read responses from the buffer first in case there are responses already ready to parse
      let endOfBuffer = false;
      while (!endOfBuffer) {
        // console.log('parse', readBuffer);

        let {
          remainder,
          response,
        } = parseResponse(readBuffer);

        readBuffer = remainder

        if (response != null) {
          // console.log(response)

          if (response.type === 'error') {
            throw new Error(`Firmware Error: ${response.content}`)
          }

          if (filter?.types?.includes(response.type)) {
            return response
          }
        }

        if (response == null) {
          endOfBuffer = true
        }
      }

      // Then await more data from the serial port

      // console.log('attempting read...')
      let newChars = ''
      do {
        const { value, done } = await reader.read();

        if (done) {
            // Allow the serial port to be closed later.
            //reader.releaseLock();
            throw new Error('Serial port closed');
        }

        // readBuffer = readBuffer.concat(value)
        readBuffer = `${readBuffer}${value}`
        newChars = `${newChars}${value}`
      } while (!readBuffer.endsWith('\n'))
      onReceive(newChars);
    };
  };

  let nextLineNumber = 1;
  let isStopped = false

  const normalizeGCode = ( gcode, { sendLineNumber }) => {
    let line = gcode;
    // Remove comments so they don't clober checksums
    line = line.replace(/;.+/, '');

    if (sendLineNumber === true) {
      let lineNumber = nextLineNumber;
      nextLineNumber += 1;

      line = `N${lineNumber} ${line}`
    }

    return `${line}*${checksum(line)}\n`
  }

  const sendGCode = async (gcode, { sendLineNumber = true } = {}) => {
    const line = normalizeGCode(gcode, { sendLineNumber });
    onSend({
      lineNumber: nextLineNumber -1,
      totalLines: gcodeLines.length,
      line,
    })

    // console.log('GCode sent', line)
    await writer.write(line);

    const response = await waitForResponse({ types: ['ok'] })
    // console.log('GCode response received', response);

    return response;
  }

  const completionPromise = (async () => {
    // Printer startup
    const response = await waitForResponse({ types: ['greeting', 'ok'] });
    console.log('Recevied greeting', response);

    // Reset the line number
    await sendGCode('M110 N0', { sendLineNumber: false });

    // Run the print
    for (gcode of gcodeLines) {
      if (isStopped) {
        return;
      }

      if (pauseResumePromise != null) {
        await pauseResumePromise
      }

      currentLine += 1;
      await sendGCode(gcode);
    };
  })();

  return {
    _inner: { reader, writer },
    totalLines: gcodeLines.length,
    getCurrentLine: () => currentLine,
    completionPromise,
    stop: () => {
      isStopped = true
    },
    pause: () => {
      pauseResumePromise = new Promise((resolve) => {
        pauseResumeResolveFn = resolve;
      });
    },
    resume: () => {
      pauseResumePromise = null;
      pauseResumeResolveFn();
    },
  }
}
