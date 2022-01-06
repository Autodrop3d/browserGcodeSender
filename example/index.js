import { print } from '@d1plo1d/browser-gcode-sender'

const appendToTerminal = ({ div, value }) => {
  div.innerHTML += value;

  if (div.innerHTML.length > 3000) {
    div.innerHTML = div.innerHTML.slice(div.innerHTML.length - 3000);
  }

  //scroll down to bottom of div
  div.scrollTop = div.scrollHeight;
}

const run = async () => {
  let start = performance.now();

  const runButton = document.getElementById("runButton");
  const serialResultsDiv = document.getElementById("serialResults");
  const percentageCompleteDiv = document.getElementById("percentageComplete");
  const fileInput = document.getElementById("gcodeFile");

  const baudRate = document.querySelector('#baudRate').value;

  const file = fileInput.files[0];

  if (file == null) {
    alert("Please select a GCode file before starting the print")
    return
  }

  runButton.setAttribute('disabled', true);

  console.log('Starting print...')

  // const gcodes = `
  //   ; Home the printer
  //   G28
  //   G90
  //   G1 F3000
  //   ; Move X
  //   G1 X100 F3000
  //   ; Move Y
  //   G1 Y100 F3000
  //   ; Move X
  //   G1 X0 F3000
  //   ; Move Y
  //   G1 Y0 F3000
  // `
  //   .replace(/\n\s+/g, '\n');

  const gcodes = await fileInput.files[0].text();

  const {
    // totalLines,
    // getCurrentLine,
    completionPromise,
    // stop,
    // pause,
    // resume,
  } = await print({
    gcodes,
    baudRate,
    reuseSerialPort: true,
    onReceive: (value) => {
      appendToTerminal({
        div: serialResultsDiv,
        value: value.split('\n').filter(l => l.length > 0).map(line => `RX: ${line}\n`).join(''),
      });
    },
    onSend: ({ lineNumber, totalLines, line}) => {
      appendToTerminal({
        div: serialResultsDiv,
        value: `TX: ${line}`,
      });
      percentageCompleteDiv.innerText = `${(lineNumber / totalLines * 100).toFixed(1)}%`
    },
  });

  await completionPromise;

  runButton.setAttribute('disabled', false);

  console.log(`Done JS Execution in ${performance.now() - start}ms`);
}

window.run = () => run().catch(e => console.error(e));
