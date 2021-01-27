// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/app.js', 'js').sass('src/style.scss', 'css').options({
      processCssUrls: false
   }).setPublicPath('dist');