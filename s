#!/usr/bin/env node

var fs = require('fs');
var slideFile = './.slide';
var msee = require('msee');
var exec = require('child_process').exec;

exec('clear', function(err, stdout) {
  if (err) { return console.error(err); }
  console.log(stdout);
  

  var slide = process.argv[2];
  var out = msee.parseFile(__dirname + '/slides/' + slide + '.md');
  console.log(out);
});



