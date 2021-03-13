# Select2 Bootstrap 5 Theme

[![GitHub](https://img.shields.io/github/v/release/apalfrey/select2-bootstrap-5-theme?style=flat-square)](https://github.com/apalfrey/select2-bootstrap-5-theme)
[![npm](https://img.shields.io/npm/v/select2-bootstrap-5-theme?style=flat-square)](https://www.npmjs.com/package/select2-bootstrap-5-theme)
[![Packagist Version](https://img.shields.io/packagist/v/apalfrey/select2-bootstrap-5-theme?style=flat-square)](https://packagist.org/packages/apalfrey/select2-bootstrap-5-theme)
[![License](https://img.shields.io/github/license/apalfrey/select2-bootstrap-5-theme?style=flat-square)](LICENSE)
[![Dependencies](https://img.shields.io/david/apalfrey/select2-bootstrap-5-theme?style=flat-square)](https://david-dm.org/apalfrey/select2-bootstrap-5-theme)

[Select2](https://github.com/select2/select2) v4 theme for Bootstrap 5, inspired by [select2-bootstrap4-theme](https://github.com/ttskch/select2-bootstrap4-theme)
**Currently only works for Select2 v4.1.0**

## Examples
https://apalfrey.github.io/select2-bootstrap-5-theme/

## Installation

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.0.2/dist/select2-bootstrap-5-theme.min.css" />
<!-- Or for RTL support -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.0.2/dist/select2-bootstrap-5-theme.rtl.min.css" />
```

### Package Managers

```bash
# npm
$ npm install select2-bootstrap-5-theme

# yarn
$ yarn add select2-bootstrap-5-theme

# composer
$ composer require apalfrey/select2-bootstrap-5-theme
```

#### HTML
```html
<link rel="stylesheet" href="/path/to/select2.css">
<link rel="stylesheet" href="/path/to/select2-bootstrap-5-theme.min.css">
<!-- Or for RTL support -->
<link rel="stylesheet" href="/path/to/select2-bootstrap-5-theme.rtl.min.css">
```

#### SCSS
```scss
@import "node_modules/select2/src/scss/core";
@import "node_modules/select2-bootstrap-5-theme/src/include-all";
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

## Building
This repo uses Gulp to compile the assets, see below for the included Gulp tasks and what they do;

| Task                   | Description                                                                                                            |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `gulp`                 | Cleans the `dist` directory, lints the scss, compiles the dev and min versions, starts browsersync and starts watching |
| `gulp clean`           | Cleans the `dist` directory, removing the directory and it's contents                                                  |
| `gulp lint`            | Lints the scss files using [Stylelint](https://stylelint.io/), see [.stylelintrc](.stylelintrc) and [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap) for linting rules                                                                                                |
| `gulp compile`         | Lints the scss, compiles the RTL and LTR dev and min versions                                                          |
| `gulp compile:dev`     | Compiles the LTR dev version, saving in `dist` and `examples`                                                          |
| `gulp compile:min`     | Compiles the LTR min version, saving in `dist`                                                                         |
| `gulp compile:rtl:dev` | Compiles the RTL dev version, saving in `dist` and `examples`                                                          |
| `gulp compile:rtl:min` | Compiles the RTL min version, saving in `dist`                                                                         |
| `gulp browsersync`     | Sets up a browsersync server serving the `examples` directory for development                                          |
| `gulp watch`           | Watches all files in `src`, compiling the scss when changes are detected                                               |

## Contributing
If you have ideas for improvements or changes, feel free to submit an [issue](https://github.com/apalfrey/select2-bootstrap-5-theme/issues/new), or if you have changes you'd like in the project, feel free to [submit a pull request](https://github.com/apalfrey/select2-bootstrap-5-theme/compare). Make sure you run `gulp compile` before submitting a pull request to ensure the styles are compiled.

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
