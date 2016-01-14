#! /usr/bin/env node
var utils = require('./utils.js');
var usrArgs = process.argv.slice(2);

utils.qexec( 'pwd').then( function(stdout){
  console.log(stdout);
} );
