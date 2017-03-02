var compass = require('../'),
  compare = require('./lib/compare'),
  compareLine = require('./lib/compareLine');

describe('reset', function() {
  it('should xxx', function(done) {
    compass.render('./test/scss/reset.scss', {
      onResult: function(result) {
        compareLine(result.css.toString(), './test/css/reset.css');
        done();
      }
    })
  });
});
