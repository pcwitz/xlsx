# xlsx

Upgrade ClaimWeb Excel downloads from XLS to XLSX and enable functionality in Internet Explorer.

## Features

- client-side parsing of html
- easily added to any page needing an html table downloaded as xlsx
- xlsx file named after containing page by default 

## Development

- node
- gulp
- `github clone https://github.com/eligrey/Blob.js`
- node modules
    *  `npm install --save-dev xlsx-browserify-shim file-saver`
- for development using browserify
    *  cd to claimweb and cli: `gulp watch --module xlsx`
    *  writes to `./modules/<module>/src` folder
- for production build
    *  cli: `gulp --module xlsx`
    *  build css and js into `./js` folder

## Installation

- add data attribute to table element: `data-xlsx="table"`
- add icon: `<span class="icon-file-excel" title="download table to Excel"></span>`
- add script: `<script src="js/xlsx.js"></script>`
- optional
    *  add `data-xlsx="sheet-name"` to DOM element with text containing desired sheet name
    *  xlsx file named after containing page by default