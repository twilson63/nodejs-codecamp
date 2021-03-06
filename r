#!/usr/bin/env node

var fs = require('fs');
var slideFile = __dirname + '/.slide';
var msee = require('msee');
var exec = require('child_process').exec;

exec('clear', function(err, stdout) {
  if (err) { return console.error(err); }
  console.log(stdout);
  
  if (!fs.existsSync(slideFile)) {
    fs.writeFileSync(slideFile, '1');
  }

  var slide = fs.readFileSync(slideFile, 'utf-8');
  fs.writeFileSync(slideFile, '1');
  var out = msee.parseFile(__dirname + '/slides/' + slide + '.md');
});



