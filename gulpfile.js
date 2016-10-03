var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat');

var coffeeScripts = ['components/coffee/desc.coffee'];
var javaScripts = [
    'components/scripts/desc.js',
    'components/scripts/main.js'
];

gulp.task('coffee', function(){
    //gutil.log('Hello World');
    gulp.src(coffeeScripts)
        .pipe(coffee({bare : true})
            .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function(){
    gulp.src(javaScripts)
        .pipe(concat('script.js'))
        .pipe(gulp.dest('builds/development/js'))
});
