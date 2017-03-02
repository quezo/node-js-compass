'use strict';

var glob = require('glob'),
  spritesmith = require('spritesmith'),
  crypto = require('crypto'),
  path = require('path'),
  fs = require('fs');

/**
 * sprite
 * @param {Object} opts
 * @param {Function} cb
 */
function sprite(opts, cb) {
  var images = opts.images,
    imagePath = opts.imagePath,
    dist = opts.dist;

  glob(path.join(imagePath, images), function(err, files) {
    if (err) {
      console.log(err);
    }

    spritesmith({
      src: files,
      algorithm: 'binary-tree',
      engine: 'pixelsmith'
    }, function(err, result) {
      var md5 = crypto.createHash('md5'),
        name = [];

      if (err) {
        console.log(err);
      }

      md5.update(result.image, 'binary');
      images.split('/').forEach(function(path) {
        if (!(~path.indexOf('*'))) {
          name.push(path);
        }
      });
      name.push(md5.digest('hex').slice(0, 11));
      fs.writeFile(path.join(dist, name.join('-') + '.png'), result.image, 'binary', function(err) {
        if (err) {
          console.log(err);
        }

        cb(name, result.coordinates);
      });
    });
  });
}

module.exports = sprite;
