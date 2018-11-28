const gulp = require('gulp');
const browserSync = require('browser-sync');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const AUTOPREFIXER_BROWSERS = [
  '> 1%', 
  'last 3 versions', 
  'Firefox ESR', 
  'Opera 12.1', 
  'Explorer 8'
];

gulp.task('sass', () => {
   gulp.src('./src/_assets/scss/venus.scss')
    .pipe($.plumber.stop())
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: ['./node_modules'],
      precision: 10,
      onError: browserSync.notify
    }))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe($.sourcemaps.write())
    .pipe($.rename({extname: '.css'}))
    .pipe(gulp.dest('./dist/css'))
    
    .pipe(reload({stream: true}))
    .pipe($.cleanCss({keepBreaks: false, keepSpecialComments:true}))
    .pipe($.rename({extname: '.min.css'}))
    .pipe(gulp.dest('./dist/css'));
});