# Select2 Bootstrap 5 Theme

[![GitHub](https://img.shields.io/github/v/release/apalfrey/select2-bootstrap-5-theme?style=flat-square)](https://github.com/apalfrey/select2-bootstrap-5-theme)
[![GitHub Release Date](https://img.shields.io/github/release-date/apalfrey/select2-bootstrap-5-theme?style=flat-square)](https://github.com/apalfrey/select2-bootstrap-5-theme/releases)
[![npm](https://img.shields.io/npm/v/select2-bootstrap-5-theme?style=flat-square)](https://www.npmjs.com/package/select2-bootstrap-5-theme)
[![npm Total Downloads](https://img.shields.io/npm/dt/select2-bootstrap-5-theme?style=flat-square)](https://www.npmjs.com/package/select2-bootstrap-5-theme?activeTab=versions)
[![Packagist Version](https://img.shields.io/packagist/v/apalfrey/select2-bootstrap-5-theme?style=flat-square)](https://packagist.org/packages/apalfrey/select2-bootstrap-5-theme)
[![Packagist Total Downloads](https://img.shields.io/packagist/dt/apalfrey/select2-bootstrap-5-theme?style=flat-square)](https://packagist.org/packages/apalfrey/select2-bootstrap-5-theme/stats)
[![License](https://img.shields.io/github/license/apalfrey/select2-bootstrap-5-theme?style=flat-square)](LICENSE)

[Select2](https://github.com/select2/select2) v4 theme for Bootstrap 5, inspired by [select2-bootstrap4-theme](https://github.com/ttskch/select2-bootstrap4-theme)

**Works with Select2 v4.0 and v4.1**

## Docs
https://apalfrey.github.io/select2-bootstrap-5-theme/

## Installation

### CDN

#### Select2 v4.0
```html
<!-- Styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.3.0/dist/select2-bootstrap-5-theme.min.css" />
<!-- Or for RTL support -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.3.0/dist/select2-bootstrap-5-theme.rtl.min.css" />

<!-- Scripts -->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.0/dist/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.full.min.js"></script>
```

#### Select2 v4.1
```html
<!-- Styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.3.0/dist/select2-bootstrap-5-theme.min.css" />
<!-- Or for RTL support -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.3.0/dist/select2-bootstrap-5-theme.rtl.min.css" />

<!-- Scripts -->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.0/dist/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
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
// If you need to import Bootstrap as well:
@import "node_modules/select2-bootstrap-5-theme/src/select2-bootstrap-5-theme";
// Or if you have already imported Bootstrap:
@import "node_modules/select2-bootstrap-5-theme/src/include-all";
```

## Usage

```js
// Basic
$("select").select2({
    theme: "bootstrap-5",
});

// Small using Select2 properties
$("#form-select-sm").select2({
    theme: "bootstrap-5",
    containerCssClass: "select2--small", // For Select2 v4.0
    selectionCssClass: "select2--small", // For Select2 v4.1
    dropdownCssClass: "select2--small",
});

// Small using Bootstrap 5 classes
$("#form-select-sm").select2({
    theme: "bootstrap-5",
    dropdownParent: $("#form-select-sm").parent(), // Required for dropdown styling
});

// Large using Select2 properties
$("select").select2({
    theme: "bootstrap-5",
    containerCssClass: "select2--large", // For Select2 v4.0
    selectionCssClass: "select2--large", // For Select2 v4.1
    dropdownCssClass: "select2--large",
});

// Large using Bootstrap 5 classes
$("#form-select-lg").select2({
    theme: "bootstrap-5",
    dropdownParent: $("#form-select-lg").parent(), // Required for dropdown styling
});
```

## Build tools
This repo uses Gulp to compile the assets, see below for the included npm scripts and Gulp tasks and what they do;

| npm script          | Gulp task           | Description                                                                                                                      |
|---------------------|---------------------|----------------------------------------------------------------------------------------------------------------------------------|
| `start`             | `default`           | Cleans the `dist` directory, lints the SCSS, compiles the dev and min versions and starts watching the SCSS for changes          |
| `start:full`        | N/A                 | Cleans, lints, compiles and watches the SCSS (theme & docs) and serves the docs for development                                  |
| `clean`             | `clean`             | Cleans the `dist` directory, removing the directory and it's contents                                                            |
| `lint`              | `lint`              | Lints the SCSS files using [Stylelint](https://stylelint.io/), see [.stylelintrc](.stylelintrc) and [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap) for linting rules |
| `compile`           | `compile`           | Cleans the `dist` directory, lints the SCSS, compiles the LTR and RTL dev and min versions. Does the same for the docs           |
| `compile:main`      | `compile:main`      | Compiles all LTR versions                                                                                                        |
| `compile:rtl`       | `compile:rtl`       | Compiles all RTL versions                                                                                                        |
| `watch`             | `watch`             | Watches all files in `src`, compiling the SCSS when changes are detected                                                         |
| `docs`              | `docs`              | Cleans the `docs/assets/css` directory, lints the docs SCSS, compiles the docsSCSS and starts watching the docs SCSS for changes |
| `docs:clean`        | `docs:clean`        | Cleans the `docs/assets/css` directory, removing the directory and it's contents                                                 |
| `docs:lint`         | `docs:lint`         | Lints the docs SCSS files using [Stylelint](https://stylelint.io/), see [.stylelintrc](.stylelintrc) and [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap) for linting rules |
| `docs:compile`      | `docs:compile`      | Cleans the `docs/assets/css` directory, lints the docs SCSS and compiles the LTR and RTL versions                                |
| `docs:compile:main` | `docs:compile:main` | Compiles the LTR version of the docs SCSS                                                                                        |
| `docs:compile:rtl`  | `docs:compile:rtl`  | Compiles the RTL version of the docs SCSS                                                                                        |
| `docs:watch`        | `docs:watch`        | Watches all files in docs/_sass, compiling the SCSS when changes are detected                                                    |
| `docs:build`        | N/A                 | Builds the docs using Jekyll                                                                                                     |
| `docs:serve`        | N/A                 | Serves the docs using Jekyll for development                                                                                     |

## Contributing
If you have ideas for improvements or changes, feel free to submit an [issue](https://github.com/apalfrey/select2-bootstrap-5-theme/issues/new), or if you have changes you'd like in the project, feel free to [submit a pull request](https://github.com/apalfrey/select2-bootstrap-5-theme/compare). Make sure you run `gulp compile` or `npm run compile` before submitting a pull request to ensure the styles are compiled.

[Find out more about contributing here](https://apalfrey.github.io/select2-bootstrap-5-theme/about/contributing/)

## License

```
MIT License

Copyright (c) 2022 Andrew Palfrey <apalfrey@apalfrey.me>

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
