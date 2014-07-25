var args = process.argv.splice(2);
var fs = require('fs');
var body = fs.readFileSync(args[0], 'utf-8');
var lines = body.split('\n').length - 1;
console.log(lines);

