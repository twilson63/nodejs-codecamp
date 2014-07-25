var args = process.argv.splice(2);
var fs = require('fs');
var path = require('path');

var dir = args[0];
var ext = args[1];

fs.readdir(dir, function(err, list) {
  var list = list.filter(function(v) {
    return path.extname(v) === '.' + ext;
  });
  list.forEach(function(v) { console.log(v); });
});

