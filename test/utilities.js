var compass = require('../'),
  compare = require('./lib/compare'),
  compareLine = require('./lib/compareLine');

describe('utilities', function() {

  describe('utilities', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/utilities.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/utilities.css');
          done();
        }
      });
    });
  });


  describe('legacy_clearfix', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/legacy_clearfix.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/legacy_clearfix.css');
          done();
        }
      });
    });
  });

  describe('print', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/print.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/print.css');
          done();
        }
      });
    });
  });
});
