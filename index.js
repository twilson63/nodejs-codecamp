var request = require('request');

request('http://google.com')
.pipe()
.pipe()
.pipe(process.stdout);

