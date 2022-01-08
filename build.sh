#!/bin/bash
set -e
cd "$( dirname "${BASH_SOURCE[0]}" )"

pushd .
cd ./nom-reprap-response-wasm
wasm-pack build --target web --out-name web --out-dir ./pkg
rm ./pkg/.gitignore
popd

pushd .
cd ./browser-gcode-sender
yarn
rm -rf ./.parcel-cache/ && yarn parcel build index.js
popd

cd ./example
echo `pwd`
yarn
rm -rf ./.parcel-cache/ && rm -rf ./dist/ && yarn parcel build --public-url "./" index.html
