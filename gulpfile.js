const fs = require('fs');
const tasks = fs.readdirSync('./config/');

tasks.forEach(task => {
  if (task.slice(-3) !== '.js') {
    return;
  }
  require('./config/' + task);
});


// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const sourcemaps = require('gulp-sourcemaps');
// const babel = require('gulp-babel');
// const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');
// const eslint = require('gulp-eslint');

// const child = require('child_process');
// const gutil = require('gulp-util');

// sass.compiler = require('node-sass');

// gulp.task('sass', function () {
//   return gulp.src('./src/scss/venus.scss')
//     .pipe(sass({includePaths: ['./node_modules']}).on('error', sass.logError))

//     .pipe(sourcemaps.init())

//     .pipe(gulp.dest('dist/css'));
// });

// gulp.task('js', () =>
// 	gulp.src([
// 		'./src/js/*.js'
// 		])
// 	.pipe(eslint({
// 		rules: {
// 			'no-alert': 0,
// 			'no-bitwise': 0,
// 			'camelcase': 1,
// 			'curly': 1,
// 			'eqeqeq': 0,
// 			'no-eq-null': 0,
// 			'guard-for-in': 1,
// 			'no-empty': 1,
// 			'no-use-before-define': 0,
// 			'no-obj-calls': 2,
// 			'no-unused-vars': 0,
// 			'new-cap': 1,
// 			'no-shadow': 0,
// 			'strict': 2,
// 			'no-invalid-regexp': 2,
// 			'comma-dangle': 2,
// 			'no-undef': 1,
// 			'no-new': 1,
// 			'no-extra-semi': 1,
// 			'no-debugger': 2,
// 			'no-caller': 1,
// 			'semi': 1,
// 			'quotes': 0,
// 			'no-unreachable': 2
// 		},
// 		envs: [
// 		'browser'
// 		]
// 	}))
// 	.pipe(eslint.formatEach('compact', process.stderr))
	
// 	.pipe(sourcemaps.init())
// 	.pipe(babel({
// 		presets: ['@babel/env']
// 	}))
// 	.pipe(uglify())
// 	.pipe(concat('venus.js'))
// 	.pipe(sourcemaps.write('.'))
// 	.pipe(gulp.dest('dist/js'))
// );

// gulp.task('watch', () => {
//   	gulp.watch('scss/venus.scss', ['sass']);
//   	gulp.watch('js/*.js', function(event) {
//     	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//         // gulp.run('js');
//     });
// });

// gulp.task('jekyll', () => {
//   const jekyll = child.spawn('jekyll', ['serve',
//     '--watch',
//     '--incremental',
//     '--drafts'
//   ]);

//   const jekyllLogger = (buffer) => {
//     buffer.toString()
//       .split(/\n/)
//       .forEach((message) => gutil.log('Jekyll: ' + message));
//   };

//   jekyll.stdout.on('data', jekyllLogger);
//   jekyll.stderr.on('data', jekyllLogger);
// });

// gulp.task('default', [ 'js', 'sass' ]);