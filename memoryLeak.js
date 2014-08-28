require('heapdump');

function testClass() {
}
var sugar = []

setInterval(function() {
  for (var i=0; i <10000; i++) {  
    sugar.push(new testClass);
  }
  console.error('tests: %d', sugar.length);
}, 1000);

