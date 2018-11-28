const gulp = require('gulp');
const browserSync = require('browser-sync');
const gulpLoadPlugins = require('gulp-load-plugins');
const webpack = require('webpack-stream');
const npmDist = require('gulp-npm-dist');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// gulp.task('scripts', () => {
//   gulp.src('./src/js/venus.js')
//     .pipe($.plumber.stop())
//     .pipe(webpack({
//       module: {
//         loaders: [{
//           test: /\.js$/,
//           loader: 'babel',
//           exclude: '/node_modules/',
//           query: { compact: false }
//         }]
//       }
//     }))
//     .pipe($.rename('venus.js'))
//     .pipe(gulp.dest('./dist/js'))
//     .pipe(reload({stream: true}))
//     .pipe($.uglify({onError: browserSync.notify}))
//     .pipe($.rename({extname: '.min.js'}))
//     .pipe(gulp.dest('./dist/js'));
// });

gulp.task('scripts', () =>
 gulp.src([
  './node_modules/bootstrap/dist/js/bootstrap.js',
  './src/_assets/js/*.js'
  ])
 .pipe($.eslint({
   rules: {
     'no-alert': 0,
     'no-bitwise': 0,
     'camelcase': 1,
     'curly': 1,
     'eqeqeq': 0,
     'no-eq-null': 0,
     'guard-for-in': 1,
     'no-empty': 1,
     'no-use-before-define': 0,
     'no-obj-calls': 2,
     'no-unused-vars': 0,
     'new-cap': 1,
     'no-shadow': 0,
     'strict': 2,
     'no-invalid-regexp': 2,
     'comma-dangle': 2,
     'no-undef': 1,
     'no-new': 1,
     'no-extra-semi': 1,
     'no-debugger': 2,
     'no-caller': 1,
     'semi': 1,
     'quotes': 0,
     'no-unreachable': 2
   },
   envs: [
   'browser'
   ]
 }))
 .pipe($.eslint.formatEach('compact', process.stderr))

 .pipe($.sourcemaps.init())
 .pipe($.babel({
   presets: ['@babel/env']
 }))
 .pipe($.uglify())
 .pipe($.concat('venus.js'))
 .pipe($.sourcemaps.write('.'))
 .pipe(gulp.dest('dist/js'))
 );