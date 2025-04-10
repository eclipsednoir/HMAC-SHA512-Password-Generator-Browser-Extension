# Browser Extension for the HMAC-SHA512 Password Generator

A browser extension version of the [original standalone tool](https://github.com/eclipsednoir/HMAC-SHA512-Password-Generator).  
Generates consistent, high-entropy passwords using HMAC-SHA512 — all offline, with no storage or syncing.

## Features

- Popup UI and password field icon injection
- Deterministic output using Password Base + Secret Key
- Optional output truncation with entropy-preserving slicing
- No cloud, no telemetry, no sync — everything runs locally

## Install

- Chrome Web Store: _maybe, but registering costs $5 and I'm broke_
- Firefox Web Store: _maybe in the future_

To install manually:
- Chrome:
  - Download the source code from [GitHub](https://github.com/eclipsednoir/HMAC-SHA512-Password-Generator-Browser-Extension/archive/refs/heads/main.zip)
  - Go to `chrome://extensions`
  - Enable "Developer Mode"
  - "Load unpacked"
  - Select the directory of the source code
- Firefox:
  - [Download the singed `xpi` file from the Release tab](https://github.com/eclipsednoir/HMAC-SHA512-Password-Generator-Browser-Extension/releases/download/v1.1.1/HMAC-SHA512-Password-Generator-Browser-Extension.xpi)
  - Go to `about:addons`
  - Click on the Gear symbol
  - "Install Add-on From File..."
  - Select the xpi file and install the Add-on

> Note: The `.xpi` file is signed and verified by Mozilla.

## Why a Browser Extension?

The standalone version works great as a `.html` file, but the extension:
- Works directly from the toolbar
- Adds a floating icon next to password fields
- Feels more integrated for regular browser use

## Original Tool

This extension is based on the original self-contained HTML version:  
[github.com/eclipsednoir/HMAC-SHA512-Password-Generator](https://github.com/eclipsednoir/HMAC-SHA512-Password-Generator)

## License

This project is licensed under the MIT License.  
It includes embedded code from the following libraries, also under MIT:

- [crypto-js](https://github.com/brix/crypto-js)  
  © 2009–2013 Jeff Mott, © 2013–2016 Evan Vosberg

See the `js/crypto-js/` directory for the LICENSE files.
