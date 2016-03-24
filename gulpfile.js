'use strict';

var gulp = require('gulp');
var del = require('del');
var connect = require('gulp-connect');

gulp.task('clean', function () {
  return del(['dist']);
});

gulp.task('js', ['clean'], function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('css', ['clean'],  function () {
  return gulp.src('./src/css/**/*.css')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('html', ['clean'], function () {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['js', 'css', 'html'], function() {

});

gulp.task('server', function() {
  connect.server({
    root: 'dist',
    port: 8088,
    livereload: true
  });
});

gulp.task('default', ['build']);
