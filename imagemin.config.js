const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

module.exports = {
  plugins: [
    imageminMozjpeg({ quality: 80 }),
    imageminPngquant({ quality: [0.65, 0.9] }),
    imageminGifsicle({ optimizationLevel: 3 }),
    imageminSvgo({
      plugins: [
        { removeViewBox: false },
        { cleanupIDs: false },
      ],
    }),
  ],
};
