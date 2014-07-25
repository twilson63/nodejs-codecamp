var EventEmitter = require('events').EventEmitter;

var ee = new EventEmitter();

ee.on('Hello', function(v) {
  console.log('Hello ' + v);
});

ee.emit('Hello', 'Tom');


