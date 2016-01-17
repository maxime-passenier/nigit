#! /usr/bin/env node
var utils = require('./utils.js');
var usrArgs = process.argv.slice(2);
var confile = require('./confile.js');

testConf = confile.new('testConf');
testConf.set('testvalue', 'zeker');


utils.qexec( 'pwd').then( function(stdout){
   console.log(stdout);
} );
