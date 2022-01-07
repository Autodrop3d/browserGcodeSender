# Browser GCode Sender

Run 3D prints directly from the Web Browser using the Web Serial API.

## Dev Environment

In order to set up a dev environment you'll need:

1. NodeJS
2. https://rustup.rs/
3. `npm i -g yarn`

## Builds

Builds the HTML and JS for uploading to a http server.

`./build.sh`

The static files are outputted to: `./example/dist/`

## Dev Server

To watch both the Javascript and Rust and live reload on changes run:

`cargo watch -C ./nom-reprap-response-wasm -s ../start.sh`

## Related work: SerialTerminal.com

See also https://serialterminal.com for the web serial reference implementation this was based off.
