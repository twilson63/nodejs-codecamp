var filter = require('./6a.js');
var args = process.argv.splice(2);

filter(args[0], args[1], function(err, list) {
  if (err) { return console.error(err); }
  list.forEach(function(v) { console.log(v); });
});

