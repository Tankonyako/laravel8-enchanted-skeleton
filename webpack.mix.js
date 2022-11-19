const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .sass('resources/scss/styles.scss', 'public/css')
    .js('resources/js/app.js', 'public/js')
    .options({
        processCssUrls: true,
        postCss: [
            require('css-mqpacker'),
        ],
    })
    .browserSync({
        host: "0.0.0.0",
        proxy: 'localhost:8000',
        https: {
            key: "./dev_cert.key",
            cert: "./dev_cert.pem"
        },
        port: 443,
        ghostMode: false,
        files: [
            'resources/views/**/*.php',
            'public/js/**/*.js',
            'public/css/**/*.css'
        ],
    });
