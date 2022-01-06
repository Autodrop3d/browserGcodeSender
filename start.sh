#!/bin/bash
set -e
cd "$( dirname "${BASH_SOURCE[0]}" )"

pushd .
cd ./nom-reprap-response-wasm
wasm-pack build --target web --out-name web --out-dir ./pkg
rm ./pkg/.gitignore
popd

cd ./example
echo `pwd`
rm -rf .parcel-cache/ && yarn parcel index.html -p 10234
