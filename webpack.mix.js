let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.setPublicPath('public/');
mix.setResourceRoot('resources/');

mix.options({
	processCssUrls: false
});

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css', [
       tailwindcss('./tailwind.js')
   ])
   .purgeCss({
       folders: ['public'],
   });

mix.sourceMaps(true, 'cheap-source-map');

mix.version();

mix.browserSync({
	proxy: 'http://damien-couteillou.dev',
    files: ['public/**/*']
});
