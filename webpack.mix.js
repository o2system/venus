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
		devtool: 'source-map'
	})
	.sourceMaps()
	
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
