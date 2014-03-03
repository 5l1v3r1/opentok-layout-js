var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('default', function(){
    gulp.src('src/opentok-layout.js')
        .pipe(jshint())
        .pipe(uglify())
        .pipe(rename('opentok-layout.min.js'))
        .pipe(gulp.dest('./build'));
});