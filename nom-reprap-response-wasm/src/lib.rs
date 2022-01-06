use nom_gcode::{GCode, GCodeLine, Mnemonic};
use serde::{Deserialize, Serialize};

use wasm_bindgen::{prelude::*, JsCast};

extern crate console_error_panic_hook;
use std::{panic, io::Cursor};
use log::{ info, warn };

#[cfg(target_arch = "wasm32")]
extern crate wee_alloc;

// Use `wee_alloc` as the global allocator.
#[cfg(target_arch = "wasm32")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[derive(Serialize)]
struct ParserOutput {
    remainder: String,
    matched: String,
    response: nom_reprap_response::Response,
}

#[wasm_bindgen(js_name = "parseResponse")]
pub fn parse_response(
    response: String
) -> JsValue {
    let (remainder, (matched, response)) = nom_reprap_response::parse_response(
        &response[..],
    ).unwrap();

    let output = ParserOutput {
        remainder: remainder.to_string(),
        matched,
        response,
    };

    JsValue::from_serde(&output).unwrap()
}
