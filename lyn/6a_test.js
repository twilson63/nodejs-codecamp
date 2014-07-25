var test = require('tap').test;
var rewire = require('rewire');
var filter = rewire('./6a.js');

filter.__set__('fs', {
  readdir: function(dir, cb) {
    cb(null, ['foo.js', 'bar.js', 'foo.bar']);
  }
});

test('Some Description', function(t) {
  filter(process.cwd(), 'js', function(err, list) {
    t.equals(list.length, 2, 'there should be two files');
    t.end();
  });
});


