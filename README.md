# Select2 Bootstrap 5 Theme

[![npm](https://img.shields.io/npm/v/select2-bootstrap-5-theme?style=for-the-badge)](https://www.npmjs.com/package/select2-bootstrap-5-theme)
[![License](https://img.shields.io/github/license/apalfrey/select2-bootstrap-5-theme?style=for-the-badge)](LICENSE)
[![Dependencies](https://img.shields.io/david/apalfrey/select2-bootstrap-5-theme?style=for-the-badge)](https://david-dm.org/apalfrey/select2-bootstrap-5-theme)

[Select2](https://github.com/select2/select2) v4 theme for Bootstrap 5, inspired by [select2-bootstrap4-theme](https://github.com/ttskch/select2-bootstrap4-theme)

## Examples
https://apalfrey.github.io/select2-bootstrap-5-theme/

## Installation

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.0.0/dist/select2-bootstrap-5.min.css" />
```

### Package Managers

```bash
# npm
$ npm install select2-bootstrap-5-theme

# yarn
$ yarn add select2-bootstrap-5-theme
```

#### HTML
```html
<link rel="stylesheet" href="/path/to/select2.css">
<link rel="stylesheet" href="/path/to/select2-bootstrap-5.min.css">
```

#### SCSS
```scss
@import "node_modules/select2/src/scss/core";
@import "node_modules/select2-bootstrap-5-theme/src/select2-bootstrap-5-theme";
```

## Usage

```js
// Basic
$("select").select2({
    theme: "bootstrap-5",
});

// Small
$("select").select2({
    theme: "bootstrap-5",
    selectionCssClass: "select2--small",
    dropdownCssClass: "select2--small",
});

// Large
$("select").select2({
    theme: "bootstrap-5",
    selectionCssClass: "select2--large",
    dropdownCssClass: "select2--large",
});
```

<!-- TODO Contributions/building -->

## License

```
MIT License

Copyright (c) 2020 Andrew Palfrey <apalfrey@apalfrey.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
