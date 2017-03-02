node-js-compass
===============

Node.js version of Compass

> This is a [Compass](https://github.com/Compass/compass) preprocessor to
convert Compass `.scss` files to general sass files that
[node-sass](https://github.com/sass/node-sass) can compile. Because
**node-sass** doesn't support custom functions (custom imports) that come with
**Compass**, we use some Node.js magic to compensate.

Install
-------

> $ npm install node-js-compass

Usage
-----

```javascript
var compass = require('node-js-compass');

/**
 * render
 * @param {Stirng} file
 * @param {Object} options
 */
compass.render('./test.scss', {
  onResult: function(result) {
    // the result string
    console.log(result.css.toString());
  }
});
```

Options
-------

#### data

`data` is a String containing the scss to be rendered by compass.

#### includePaths

`includePaths` is an `Array` of path Strings to look for any @imported files.

#### httpImagesPath

`httpImagesPath` is a `String` that represents the public image path. When using the image-url() function in a stylesheet, this path will be prepended to the path you supply. eg. Given an httpImagesPath of /path/to/images, background-image: image-url('image.png') will compile to background-image: url("/path/to/images/image.png")

#### outputStyle

`outputStyle` is a `String` to determine how the final CSS should be rendered. Its value should be one of `'nested'` or `'compressed'`. [`'expanded'` and `'compact'` are not currently supported by libsass]

#### precision
`precision` is a `Number` that will be used to determine how many digits after the decimal will be allowed. For instance, if you had a decimal number of 1.23456789 and a precision of 5, the result will be 1.23457 in the final CSS.

#### css

`css` is a `String` that represents the public stylesheet path. When using the stylesheet-url() function in a stylesheet, this path will be prepended to the path you supply.

#### font

`font` is a `String` that represents the public font path. When using the font-files() or font-url() function in a stylesheet, this path will be prepended to the path you supply.

#### spriteDist

`spriteDist` is a `String` that represents the image sprites' path.

License
---------

The MIT License. See [LICENSE](LICENSE) for details.
Copyright (c) 2013 Daniel Yang <miniflycn@justany.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
