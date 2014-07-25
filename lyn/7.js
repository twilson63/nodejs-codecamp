var args = process.argv.splice(2);
var http = require('http');

http.get(args[0], function(response) {
  response.setEncoding('utf-8');
  var body = "";
  response.on('data', function(data) {
    console.log(data);
    //body += data;
  });
  /*
  response.on('end', function() {
    console.log(body);
  });
  */
});
