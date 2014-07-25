var domify = require('domify');
var http = require('http');

var foo = require('./foo.html');
console.log(foo);

document.body.appendChild(
  domify('<h1>Hello World</h1>')
);

http.get('/api/foo', function(response) {
  response.on('data', function(data) {
    console.log(data);
  });
});

