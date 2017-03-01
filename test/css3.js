var compass = require('../'),
  compare = require('./lib/compare'),
  compareLine = require('./lib/compareLine');

describe('css3', function() {
  describe('background-clip', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/background-clip.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/background-clip.css');
          done();
        }
      })
    });
  });

  describe('border-radius', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/border-radius.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/border-radius.css');
          done();
        }
      });
    });
  });

  describe('box-shadow', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/box-shadow.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/box-shadow.css');
          done();
        }
      });
    });
  });

  describe('box-sizeing', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/box-sizeing.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/box-sizeing.css');
          done();
        }
      });
    });
  });

  describe('box', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/box.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/box.css');
          done();
        }
      });
    });
  });

  describe('columns', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/columns.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/columns.css');
          done();
        }
      });
    });
  });

  // grayscale didn't implement
  describe('filters', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/filters.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/filters.css');
          done();
        }
      });
    });
  });

  describe('fonts', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/fonts.scss', {
        css: '/tmp/',
        font: '/tmp/fonts/',
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/fonts.css');
          done();
        }
      });
    });
  });

  // TODO gradients
  // describe('gradients', function () {
  //   it('should xxx', function (done) {
  //     compass.render('./test/scss/gradients.scss', {
  //       onResult: function (result) {
  //         // compare(result.css.toString(), './test/css/gradients.css');
  //         // compareLine(result.css.toString(), './test/css/gradients.css');
  //         done();
  //       }
  //     });
  //   });
  // });

  // TODO grid-background

  describe('hyphenation', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/hyphenation.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/hyphenation.css');
          done();
        }
      });
    });
  });

  describe('images', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/images.scss', {
        httpImagesPath: '/images/',
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/images.css');
          done();
        }
      });
    });
  });

  describe('opacity', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/opacity.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/opacity.css');
          done();
        }
      });
    });
  });

  // TODO pie(CSS3)

  describe('regions', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/regions.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/regions.css');
          done();
        }
      });
    });
  });

  describe('text-shadow', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/text-shadow.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/text-shadow.css');
          done();
        }
      });
    });
  });

  // TODO fix this test
  // describe('text-shadow-2', function () {
  //   it('should xxx', function (done) {
  //     compass.render('./test/scss/text-shadow-2.scss', {
  //       onResult: function (result) {
  //         compareLine(result.css.toString(), './test/css/text-shadow-2.css');
  //         done();
  //       }
  //     });
  //   });
  // });

  describe('transform', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/transform.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/transform.css');
          done();
        }
      });
    });
  });

  describe('transition', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/transition.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/transition.css');
          done();
        }
      });
    });
  });

  describe('user-interface', function() {
    it('should xxx', function(done) {
      compass.render('./test/scss/user-interface.scss', {
        onResult: function(result) {
          compareLine(result.css.toString(), './test/css/user-interface.css');
          done();
        }
      });
    });
  });
});
