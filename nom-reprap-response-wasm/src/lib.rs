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
    matched: Option<String>,
    response: Option<nom_reprap_response::Response>,
}

#[wasm_bindgen(js_name = "parseResponse")]
pub fn parse_response(
    input: String
) -> JsValue {
    console_error_panic_hook::set_once();

    let res = nom_reprap_response::parse_response(
        &input[..],
    );

    let output = if let Ok((remainder, (matched, response))) = res {
        ParserOutput {
            remainder: remainder.to_string(),
            matched: Some(matched),
            response: Some(response),
        }
    } else {
        ParserOutput {
            remainder: input,
            matched: None,
            response: None,
        }
    };

    JsValue::from_serde(&output).expect("Creating JS value from parser output")
}
