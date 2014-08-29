require('heapdump');

function testClass() {
}

var sugar = []
setInterval(function() {
  for (var i=0; i < 100; i++) {  
    sugar.push(new testClass);
  }
  console.error('tests: %d', sugar.length);
  if (sugar.length > 1000) {
   clearInterval();
  }
}, 1000);
