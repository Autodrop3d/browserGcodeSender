// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5UGAA":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "31648ca538661719";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7BQdY":[function(require,module,exports) {
var _browserGcodeSender = require("@d1plo1d/browser-gcode-sender");
const appendToTerminal = ({ div , value  })=>{
    div.innerHTML += value;
    if (div.innerHTML.length > 3000) div.innerHTML = div.innerHTML.slice(div.innerHTML.length - 3000);
    //scroll down to bottom of div
    div.scrollTop = div.scrollHeight;
};
const run = async ()=>{
    let start = performance.now();
    const runButton = document.getElementById("runButton");
    const serialResultsDiv = document.getElementById("serialResults");
    const percentageCompleteDiv = document.getElementById("percentageComplete");
    const fileInput = document.getElementById("gcodeFile");
    const baudRate = document.querySelector('#baudRate').value;
    const file = fileInput.files[0];
    if (file == null) {
        alert("Please select a GCode file before starting the print");
        return;
    }
    runButton.setAttribute('disabled', true);
    console.log('Starting print...');
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
    const { // totalLines,
    // getCurrentLine,
    completionPromise ,  } = await _browserGcodeSender.print({
        gcodes,
        baudRate,
        reuseSerialPort: true,
        onReceive: (value)=>{
            appendToTerminal({
                div: serialResultsDiv,
                value: value.split('\n').filter((l)=>l.length > 0
                ).map((line)=>`RX: ${line}\n`
                ).join('')
            });
        },
        onSend: ({ lineNumber , totalLines , line  })=>{
            appendToTerminal({
                div: serialResultsDiv,
                value: `TX: ${line}`
            });
            percentageCompleteDiv.innerText = `${(lineNumber / totalLines * 100).toFixed(1)}%`;
        }
    });
    await completionPromise;
    runButton.setAttribute('disabled', false);
    console.log(`Done JS Execution in ${performance.now() - start}ms`);
};
window.run = ()=>run().catch((e)=>console.error(e)
    )
;

},{"@d1plo1d/browser-gcode-sender":"1rJ0m"}],"1rJ0m":[function(require,module,exports) {
var $klFNZ$d1plo1dnomreprapresponsewasm = require("@d1plo1d/nom-reprap-response-wasm");
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
$parcel$export(module.exports, "print", ()=>$4fa0c73a46e81912$export$c2d084dc44961371
);
const $4fa0c73a46e81912$var$checksum = (line)=>{
    let sum = 0;
    for (const char of line)sum ^= char.charCodeAt(0);
    sum &= 255;
    return sum;
};
const $4fa0c73a46e81912$var$connectSerial = async ({ baudRate: baudRate , reuseSerialPort: reuseSerialPort = false ,  })=>{
    // Get previously connected ports so we don't need to re-prompt the user
    const ports = await navigator.serial.getPorts();
    // const ports = [];
    let port;
    if (ports.length > 0 && reuseSerialPort) {
        console.log('Reconnecting to previously selected serial port');
        port = ports[0];
    } else {
        // Prompt user to select any serial port.
        port = await navigator.serial.requestPort({
        });
        console.log('Connecting to new serial port');
    }
    await port.open({
        baudRate: baudRate
    });
    const textEncoder = new TextEncoderStream();
    textEncoder.readable.pipeTo(port.writable);
    const writer = textEncoder.writable.getWriter();
    const textDecoder = new TextDecoderStream();
    port.readable.pipeTo(textDecoder.writable);
    const reader = textDecoder.readable.getReader();
    return {
        reader: reader,
        writer: writer
    };
};
const $4fa0c73a46e81912$export$c2d084dc44961371 = async ({ baudRate: baudRate , gcodes: gcodes , onReceive: onReceive = (_value)=>{
} , onSend: onSend = (_value)=>{
} , reuseSerialPort: reuseSerialPort = false ,  })=>{
    let readBuffer = "";
    let pauseResumePromise = null;
    let pauseResumeResolveFn = null;
    let currentLine = 0;
    await $parcel$interopDefault($klFNZ$d1plo1dnomreprapresponsewasm)();
    const { reader: reader , writer: writer  } = await $4fa0c73a46e81912$var$connectSerial({
        baudRate: baudRate,
        reuseSerialPort: reuseSerialPort
    });
    const gcodeLines = gcodes.split('\n').map((line)=>line.trim()
    ) // Remove comments and empty lines
    .filter((line)=>!line.startsWith(';') && !line.startsWith('(') && line.length !== 0
    );
    // Reads until a full message is received from the printer
    const waitForResponse = async (filter)=>{
        while(true){
            // Read responses from the buffer first in case there are responses already ready to parse
            let endOfBuffer = false;
            while(!endOfBuffer){
                // console.log('parse', readBuffer);
                let { remainder: remainder , response: response ,  } = $klFNZ$d1plo1dnomreprapresponsewasm.parseResponse(readBuffer);
                readBuffer = remainder;
                if (response != null) {
                    // console.log(response)
                    if (response.type === 'error') throw new Error(`Firmware Error: ${response.content}`);
                    if (filter?.types?.includes(response.type)) return response;
                }
                if (response == null) endOfBuffer = true;
            }
            // Then await more data from the serial port
            // console.log('attempting read...')
            let newChars = '';
            do {
                const { value: value , done: done  } = await reader.read();
                if (done) //reader.releaseLock();
                throw new Error('Serial port closed');
                // readBuffer = readBuffer.concat(value)
                readBuffer = `${readBuffer}${value}`;
                newChars = `${newChars}${value}`;
            }while (!readBuffer.endsWith('\n'))
            onReceive(newChars);
        }
    };
    let nextLineNumber = 1;
    let isStopped = false;
    const normalizeGCode = (gcode, { sendLineNumber: sendLineNumber  })=>{
        let line = gcode;
        // Remove comments so they don't clober checksums
        line = line.replace(/;.+/, '');
        if (sendLineNumber === true) {
            let lineNumber = nextLineNumber;
            nextLineNumber += 1;
            line = `N${lineNumber} ${line}`;
        }
        return `${line}*${$4fa0c73a46e81912$var$checksum(line)}\n`;
    };
    const sendGCode = async (gcode, { sendLineNumber: sendLineNumber = true  } = {
    })=>{
        const line = normalizeGCode(gcode, {
            sendLineNumber: sendLineNumber
        });
        onSend({
            lineNumber: nextLineNumber - 1,
            totalLines: gcodeLines.length,
            line: line
        });
        // console.log('GCode sent', line)
        await writer.write(line);
        const response = await waitForResponse({
            types: [
                'ok'
            ]
        });
        // console.log('GCode response received', response);
        return response;
    };
    const completionPromise = (async ()=>{
        // Printer startup
        const response = await waitForResponse({
            types: [
                'greeting',
                'ok'
            ]
        });
        console.log('Recevied greeting', response);
        // Reset the line number
        await sendGCode('M110 N0', {
            sendLineNumber: false
        });
        // Run the print
        for (gcode of gcodeLines){
            if (isStopped) return;
            if (pauseResumePromise != null) await pauseResumePromise;
            currentLine += 1;
            await sendGCode(gcode);
        }
    })();
    return {
        _inner: {
            reader: reader,
            writer: writer
        },
        totalLines: gcodeLines.length,
        getCurrentLine: ()=>currentLine
        ,
        completionPromise: completionPromise,
        stop: ()=>{
            isStopped = true;
        },
        pause: ()=>{
            pauseResumePromise = new Promise((resolve)=>{
                pauseResumeResolveFn = resolve;
            });
        },
        resume: ()=>{
            pauseResumePromise = null;
            pauseResumeResolveFn();
        }
    };
};

},{"@d1plo1d/nom-reprap-response-wasm":"d4h9N"}],"d4h9N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
* @param {string} input
* @returns {any}
*/ parcelHelpers.export(exports, "parseResponse", ()=>parseResponse
);
let wasm;
let cachedTextDecoder = new TextDecoder('utf-8', {
    ignoreBOM: true,
    fatal: true
});
cachedTextDecoder.decode();
let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    return cachegetUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
const heap = new Array(32).fill(undefined);
heap.push(undefined, null, true, false);
let heap_next = heap.length;
function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];
    heap[idx] = obj;
    return idx;
}
function getObject(idx) {
    return heap[idx];
}
function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}
function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}
let WASM_VECTOR_LEN = 0;
let cachedTextEncoder = new TextEncoder('utf-8');
const encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function(arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
} : function(arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
};
function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }
    let len = arg.length;
    let ptr = malloc(len);
    const mem = getUint8Memory0();
    let offset = 0;
    for(; offset < len; offset++){
        const code = arg.charCodeAt(offset);
        if (code > 127) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) arg = arg.slice(offset);
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);
        offset += ret.written;
    }
    WASM_VECTOR_LEN = offset;
    return ptr;
}
function parseResponse(input) {
    var ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ret = wasm.parseResponse(ptr0, len0);
    return takeObject(ret);
}
let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    return cachegetInt32Memory0;
}
async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') try {
            return await WebAssembly.instantiateStreaming(module, imports);
        } catch (e) {
            if (module.headers.get('Content-Type') != 'application/wasm') console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
            else throw e;
        }
        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);
        if (instance instanceof WebAssembly.Instance) return {
            instance,
            module
        };
        else return instance;
    }
}
async function init(input) {
    if (typeof input === 'undefined') input = new URL(require("9529cf024a5b1058"));
    const imports = {
    };
    imports.wbg = {
    };
    imports.wbg.__wbindgen_json_parse = function(arg0, arg1) {
        var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_693216e109162396 = function() {
        var ret = new Error();
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_stack_0ddaca5d1abfb52f = function(arg0, arg1) {
        var ret = getObject(arg1).stack;
        var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len0;
        getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    };
    imports.wbg.__wbg_error_09919627ac0992f5 = function(arg0, arg1) {
        try {
            console.error(getStringFromWasm0(arg0, arg1));
        } finally{
            wasm.__wbindgen_free(arg0, arg1);
        }
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    if (typeof input === 'string' || typeof Request === 'function' && input instanceof Request || typeof URL === 'function' && input instanceof URL) input = fetch(input);
    const { instance , module  } = await load(await input, imports);
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;
    return wasm;
}
exports.default = init;

},{"9529cf024a5b1058":"iUT4i","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iUT4i":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('4eUPg') + "web_bg.75efd054.wasm" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["5UGAA","7BQdY"], "7BQdY", "parcelRequire3603")

//# sourceMappingURL=index.38661719.js.map
