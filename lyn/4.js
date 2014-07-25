var args = process.argv.splice(2);
var fs = require('fs');

fs.readFile(args[0], 'utf-8', function(err, data) {
  if (err) { return console.error(err); }
  var lines = data.split('\n').length -1;
  console.log(lines);
});

