'use strict';

const gulp = require('gulp');
const del = require('del');
const format = require('gulp-clang-format');

const srcsToFmt = ['path/**/*.ts'];

gulp.task('check-format', function() {
  return gulp.src(srcsToFmt)
     .pipe(format.checkFormat());
});

gulp.task('format', function() {
  return gulp.src(srcsToFmt, { base: '.' })
      .pipe(format.format())
      .pipe(gulp.dest('.'));
});

gulp.task('clean', function () {
   
   return del([
     'src/**/*.ngfactory.ts',
     'src/**/*.js',
     'src/**/*.d.ts',
     'src/**/*.js.map',
     'src/**/*.metadata.json',
     'src/**/*.ngsummary.json',
     'test/**/*.js',
     'test/**/*.map',
     'test/**/*.d.ts'
   ]); 
});

