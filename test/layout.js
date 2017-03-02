var compass = require('../'),
  compare = require('./lib/compare'),
  compareLine = require('./lib/compareLine');

describe('layout', function() {
  describe('layout', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/layout.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/layout.css');
          done();
        }
      });
    });
  });

  describe('stretching', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/stretching.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/stretching.css');
          done();
        }
      });
    });
  });
});
