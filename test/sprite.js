var compass = require('../'),
  compare = require('./lib/compare'),
  compareLine = require('./lib/compareLine'),
  path = require('path');

describe('sprite', function() {
  it('should xxx', function(done) {
    compass.render('./test/sprite/sprites.scss', {
      imagePath: path.join(__dirname),
      spriteDist: __dirname,
      onResult: function(result) {
        compareLine(result.css.toString(), './test/sprite/sprites.css');
        done();
      }
    })
  });
});
