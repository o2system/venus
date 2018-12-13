let mix = require('webpack-mix').mix
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
mix.setPublicPath('src')
	.js('src/_js/venus.js', 'assets/js/')
	.sass('src/_scss/venus.scss', 'assets/css/')

	// .copy('./demo/css/venus.css', './dist/venus.css')
	// .copy('./demo/js/venus.js', './dist/venus.js')

	.webpackConfig({
		devtool: 'source-map',
    externals: {
      'jquery': 'JQuery'
    }
	})
	.sourceMaps()
<<<<<<< HEAD
.options({
  processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
=======
	.options({
  processCssUrls: false, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
>>>>>>> turahe
  // purifyCss: false, // Remove unused CSS selectors.
  // uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
  // postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
});

	// .options({
 //    postCss: [
 //      require('postcss-unprefix'),
 //      require('autoprefixer')({
 //        browsers: '>0.1%'
 //      }),
 //      require('cssnano')({
 //          preset: ['default', {
 //              discardComments: {
 //                  removeAll: true,
 //              },
 //          }]
 //      }),
 //    ]
 //  });
	
// if (!mix.inProduction()){
// 	mix.browserSync({
// 		/*browser: 'Google Chrome',*/
// 		proxy: false,
// 		server: {
// 			baseDir: './demo',
// 		},
// 		files: ['./demo/**/*.html', './demo/**/*.js', './demo/**/*.css']
// 	})
// }
