let mix = require("laravel-mix");
require("laravel-mix-purgecss");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

//  mix.options({
//      purifyCss: true
//  });

mix.sass("scss/style.scss", "css/app.css")
    // .purgeCss()
    .browserSync({
        proxy: "localhost:8000",
        open: false,
        files: ["css/**/*.css", "*.html"]
    })
    .options({
        processCssUrls: false,
        // purifyCss: true
    })
    .styles([
            "css/bootstrap.min.css",
            "css/owl.carousel.min.css",
            "css/magnific-popup.css",
            "css/font-awesome.min.css",
            "css/themify-icons.css",
            "css/nice-select.css",
            "css/flaticon.css",
            "css/gijgo.css",
            "css/animate.min.css",
            "css/slick.css",
            "css/slicknav.css",
            "css/style.css"
        ],
        "css/vendor.css"
    )
    .scripts(
        [
            "js/vendor/modernizr-3.5.0.min.js",
            "js/vendor/jquery-1.12.4.min.js",
            "js/popper.min.js",
            "js/bootstrap.min.js",
            "js/owl.carousel.min.js",
            "js/isotope.pkgd.min.js",
            "js/ajax-form.js",
            "js/waypoints.min.js",
            "js/jquery.counterup.min.js",
            "js/imagesloaded.pkgd.min.js",
            "js/scrollIt.js",
            "js/jquery.scrollUp.min.js",
            "js/wow.min.js",
            "js/nice-select.min.js",
            "js/jquery.slicknav.min.js",
            "js/jquery.magnific-popup.min.js",
            "js/plugins.js",
            "js/gijgo.min.js"
        ],
        "js/vendor.js"
    );
