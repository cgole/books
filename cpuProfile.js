/**
 * Example for using LWIP to blur an image.
 */

var path = require('path'),
    lwip = require('lwip');


setInterval(function() {
  lwip.open('paris.jpg', function(err, image) {
    if (err) return console.log(err);
    image.batch()
        .blur(5)
        .crop(200, 200)
        .writeFile('paris_processed.jpg', function(err) {
            if (err) return console.log(err);
            console.log('done');
        });
  });
}, 0);
