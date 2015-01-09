/**
 * Created by xus on 14-12-30.
 */
var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');

var source = require('vinyl-source-stream');

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var less = require('gulp-less');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');

gulp.task('browserify', function () {

  var b = browserify();
  b.transform(reactify);
  b.add('./src/js/app.js');
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('less', function () {
  gulp.src('./src/css/*.less')
    .pipe(less())
    //.pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css/'));

});

gulp.task('watch', function () {
  gulp.watch(['./src/js/**'], ['browserify', 'live']);
  gulp.watch(['./src/css/*.less'], ['less', 'live']);
});

gulp.task('live', function () {
  connect.reload();
});

gulp.task('connect', function () {
  connect.server({
    root: './dist',
    liveReload: true
  });
});


gulp.task('transform', function () {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'));
  gulp.src('./src/lib/**')
    .pipe(gulp.dest('./dist/lib/'));

});




gulp.task('build', ['browserify', 'transform', 'less']);
gulp.task('default', ['build', 'connect', 'watch']);
