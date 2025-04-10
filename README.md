# Browser Extension for the HMAC-SHA512 Password Generator

A browser extension version of the [original standalone tool](https://github.com/eclipsednoir/HMAC-SHA512-Password-Generator).  
Generates consistent, high-entropy passwords using HMAC-SHA512 — all offline, with no storage or syncing.

## Features

- Popup UI and password field icon injection
- Deterministic output using Password Base + Secret Key
- Optional output truncation with entropy-preserving slicing
- No cloud, no telemetry, no sync — everything runs locally

## Install

- Chrome Web Store: _coming soon (maybe)_
- Firefox Web Store: _coming soon (maybe)_

To install manually:
- Chrome: `chrome://extensions` → "Load unpacked"
- Firefox: `about:debugging` → "Load Temporary Add-on"

## Why a Browser Extension?

The standalone version works great as a `.html` file, but the extension:
- Works directly from the toolbar
- Adds a floating icon next to password fields
- Feels more integrated for regular browser use

## Original Tool

This extension is based on the original self-contained HTML version:  
→ [github.com/eclipsednoir/HMAC-SHA512-Password-Generator](https://github.com/eclipsednoir/HMAC-SHA512-Password-Generator)

## License

This project is licensed under the MIT License.  
It includes embedded code from the following libraries, also under MIT:

- [crypto-js](https://github.com/brix/crypto-js)  
  © 2009–2013 Jeff Mott, © 2013–2016 Evan Vosberg

See the `js/crypto-js/` directory for the LICENSE files.
