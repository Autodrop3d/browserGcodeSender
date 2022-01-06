import initWASM, { parseResponse } from '@d1plo1d/nom-reprap-response-wasm';

const run = async () => {
  await initWASM();

  let start = performance.now()
  const output = parseResponse('OK T:10\n');
  console.log(output);

  // renderString(null, null, gcodeText);
  console.log(`Done JS Execution in ${performance.now() - start}ms`)
}

run()
