const mix = require('laravel-mix');

const frontend = "frontend";

mix.browserSync();


mix.react(`${frontend}/js/app.js`, 'public/js')
   .sass(`${frontend}/sass/app.scss`, 'public/css');
