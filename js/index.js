'use strict';

var Export2Excel = require('./Export2Excel');

// default (no option) file namer
var fileNamer = function() {
  var url = window.location.pathname;
  var last = url.substring(url.lastIndexOf('/')+1); // one to lastIndexOf because we do not want to return the '/'
  return last.replace(/\.[^/.]+$/, ''); // trim file extension
};

// optional sheet namer
var sheetNamer = function() {
  // var sheetName = document.querySelector('[data-xlsx="sheet-name"]').innerHTML || 'sheet1';
  var sheetName = 'sheet1';
  var e = document.querySelector('[data-xlsx="sheet-name"]');
  if (e !== null) sheetName = e.innerHTML;
  return sheetName;
};

var icon = document.querySelector('.icon-file-excel');
icon.addEventListener('click', function() {
  var fileName = fileNamer();
  var sheetName = sheetNamer();
  Export2Excel.exportTableToExcel(fileName, sheetName);
});