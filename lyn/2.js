var args = process.argv.splice(2);
var result = args.reduce(function(m,v) {
  return m + parseInt(v, 10);
}, 0);
console.log(result);

