function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire3603;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire3603=o),o.register("bXuNP",(function(t,n){var r,o;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("bXuNP").register(JSON.parse('{"hclZX":"index.f60baff3.js","89ULf":"web_bg.143a1c7b.wasm"}'));var i,a={},l={};let s;i=l,Object.defineProperty(i,"__esModule",{value:!0,configurable:!0}),e(l,"parseResponse",(()=>R)),e(l,"default",(()=>N));let c=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let u=null;function f(){return null!==u&&u.buffer===s.memory.buffer||(u=new Uint8Array(s.memory.buffer)),u}function d(e,t){return c.decode(f().subarray(e,e+t))}const g=new Array(32).fill(void 0);g.push(void 0,null,!0,!1);let w=g.length;function b(e){w===g.length&&g.push(g.length+1);const t=w;return w=g[t],g[t]=e,t}function p(e){return g[e]}function m(e){const t=p(e);return function(e){e<36||(g[e]=w,w=e)}(e),t}let y=0,_=new TextEncoder("utf-8");const h="function"==typeof _.encodeInto?function(e,t){return _.encodeInto(e,t)}:function(e,t){const n=_.encode(e);return t.set(n),{read:e.length,written:n.length}};function v(e,t,n){if(void 0===n){const n=_.encode(e),r=t(n.length);return f().subarray(r,r+n.length).set(n),y=n.length,r}let r=e.length,o=t(r);const i=f();let a=0;for(;a<r;a++){const t=e.charCodeAt(a);if(t>127)break;i[o+a]=t}if(a!==r){0!==a&&(e=e.slice(a)),o=n(o,r,r=a+3*e.length);const t=f().subarray(o+a,o+r);a+=h(e,t).written}return y=a,o}function R(e){var t=v(e,s.__wbindgen_malloc,s.__wbindgen_realloc),n=y;return m(s.parseResponse(t,n))}let L=null;function S(){return null!==L&&L.buffer===s.memory.buffer||(L=new Int32Array(s.memory.buffer)),L}var x;o.register("kPq84",(function(t,n){var r;e(t.exports,"getBundleURL",(()=>r),(e=>r=e));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),x=o("kPq84").getBundleURL("hclZX")+o("bXuNP").resolve("89ULf");var E,P,T,A,N=async function e(t){void 0===t&&(t=new URL(x));const n={wbg:{}};n.wbg.__wbindgen_json_parse=function(e,t){return b(JSON.parse(d(e,t)))},n.wbg.__wbg_new_693216e109162396=function(){return b(new Error)},n.wbg.__wbg_stack_0ddaca5d1abfb52f=function(e,t){var n=v(p(t).stack,s.__wbindgen_malloc,s.__wbindgen_realloc),r=y;S()[e/4+1]=r,S()[e/4+0]=n},n.wbg.__wbg_error_09919627ac0992f5=function(e,t){try{console.error(d(e,t))}finally{s.__wbindgen_free(e,t)}},n.wbg.__wbindgen_object_drop_ref=function(e){m(e)},("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t));const{instance:r,module:o}=await async function(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await t,n);return s=r.exports,e.__wbindgen_wasm_module=o,s};E=a,P="print",T=()=>$,Object.defineProperty(E,P,{get:T,set:A,enumerable:!0,configurable:!0});const $=async({baudRate:e,gcodes:t,onReceive:n=(e=>{}),onSend:r=(e=>{}),reuseSerialPort:o=!1})=>{let i="",a=null,s=null,c=0;await function(e){return e&&e.__esModule?e.default:e}(l)();const{reader:u,writer:f}=await(async({baudRate:e,reuseSerialPort:t=!1})=>{const n=await navigator.serial.getPorts();let r;n.length>0&&t?(console.log("Reconnecting to previously selected serial port"),r=n[0]):(r=await navigator.serial.requestPort({}),console.log("Connecting to new serial port")),await r.open({baudRate:e});const o=new TextEncoderStream;o.readable.pipeTo(r.writable);const i=o.writable.getWriter(),a=new TextDecoderStream;return r.readable.pipeTo(a.writable),{reader:a.readable.getReader(),writer:i}})({baudRate:e,reuseSerialPort:o}),d=t.split("\n").map((e=>e.trim())).filter((e=>!e.startsWith(";")&&!e.startsWith("(")&&0!==e.length)),g=async e=>{for(;;){let t=!1;for(;!t;){let{remainder:n,response:r}=l.parseResponse(i);if(i=n,null!=r){if("error"===r.type)throw new Error(`Firmware Error: ${r.content}`);if(e?.types?.includes(r.type))return r}null==r&&(t=!0)}let r="";do{const{value:e,done:t}=await u.read();if(t)throw new Error("Serial port closed");i=`${i}${e}`,r=`${r}${e}`}while(!i.endsWith("\n"));n(r)}};let w=1,b=!1;const p=async(e,{sendLineNumber:t=!0}={})=>{const n=((e,{sendLineNumber:t})=>{let n=e;if(n=n.replace(/;.+/,""),!0===t){let e=w;w+=1,n=`N${e} ${n}`}return`${n}*${(e=>{let t=0;for(const n of e)t^=n.charCodeAt(0);return t&=255,t})(n)}\n`})(e,{sendLineNumber:t});r({lineNumber:w-1,totalLines:d.length,line:n}),await f.write(n);return await g({types:["ok"]})},m=(async()=>{const e=await g({types:["greeting","ok"]});for(gcode of(console.log("Recevied greeting",e),await p("M110 N0",{sendLineNumber:!1}),d)){if(b)return;null!=a&&await a,c+=1,await p(gcode)}})();return{_inner:{reader:u,writer:f},totalLines:d.length,getCurrentLine:()=>c,completionPromise:m,stop:()=>{b=!0},pause:()=>{a=new Promise((e=>{s=e}))},resume:()=>{a=null,s()}}},M=({div:e,value:t})=>{e.innerHTML+=t,e.innerHTML.length>3e3&&(e.innerHTML=e.innerHTML.slice(e.innerHTML.length-3e3)),e.scrollTop=e.scrollHeight};window.run=()=>(async()=>{let e=performance.now();const t=document.getElementById("runButton"),n=document.getElementById("serialResults"),r=document.getElementById("percentageComplete"),o=document.getElementById("gcodeFile"),i=document.querySelector("#baudRate").value;if(null==o.files[0])return void alert("Please select a GCode file before starting the print");t.setAttribute("disabled",!0),console.log("Starting print...");const l=await o.files[0].text(),{completionPromise:s}=await a.print({gcodes:l,baudRate:i,reuseSerialPort:!0,onReceive:e=>{M({div:n,value:e.split("\n").filter((e=>e.length>0)).map((e=>`RX: ${e}\n`)).join("")})},onSend:({lineNumber:e,totalLines:t,line:o})=>{M({div:n,value:`TX: ${o}`}),r.innerText=`${(e/t*100).toFixed(1)}%`}});await s,t.setAttribute("disabled",!1),console.log(`Done JS Execution in ${performance.now()-e}ms`)})().catch((e=>console.error(e)));
//# sourceMappingURL=index.f60baff3.js.map
