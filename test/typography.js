var compass = require('../'),
  compare = require('./lib/compare'),
  compareLine = require('./lib/compareLine'),
  path = require('path');

describe('typography', function() {
  describe('vertical_rhythm', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/vertical_rhythm.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/vertical_rhythm.css');
          done();
        }
      });
    });
  });

  describe('force-wrap', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/force-wrap.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/force-wrap.css');
          done();
        }
      });
    });
  });

  // TODO fix broken test
  // describe('lists', function () {
  //   it('should xxx', function (done) {
  //     compass.render('./test/scss/lists.scss', {
  //       imagePath: path.join(__dirname, './images'),
  //       onResult: function(result) {
  //         compare(result.css.toString(), './test/css/lists.css');
  //         done();
  //       }
  //     });
  //   });
  // });

  describe('replacement', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/replacement.scss', {
        imagePath: path.join(__dirname, './images'),
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/replacement.css');
          done();
        }
      });
    });
  });
});
