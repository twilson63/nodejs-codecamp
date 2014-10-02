var args = process.argv.splice(2);
var http = require('http');

http.createServer(function(req, res) {
  res.end('Hello IronYard Charleston!');
}).listen(3000);
