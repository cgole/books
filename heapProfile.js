require('heapdump');

function testClass() {
}

var paris= []
setInterval(function() {
  for (var i=0; i < 100; i++) {  
    paris.push(new testClass);
  }
  console.error('tests: %d', paris.length);
  if (paris.length > 1000) {
   clearInterval();
  }
}, 1000);
