var gulp = require('gulp');
var browserify = require('browserify');
var sass = require('gulp-sass');
var source = require("vinyl-source-stream");
var spawn = require('child_process').spawn;
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var babelify = require('babelify');

gulp.task('build', function () {
  return browserify({
    entries: './assets/js/src/main.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
  return gulp.src('./dist/main.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  return gulp.src('./assets/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/styles/main.scss', ['sass']);
});

gulp.task('server', function() {
  spawn('node', ['index.js'], { stdio: 'inherit' });
});

gulp.task('default', function(cb) {
  runSequence('build', 'server', 'sass', cb);
});
