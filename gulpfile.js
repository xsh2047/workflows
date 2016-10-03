var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat');

var coffeeScripts = ['components/coffee/desc.coffee'];
var javaScripts = [
    'components/scripts/desc.js',
    'components/scripts/main.js'
];
var sassSources = ['components/sass/style.scss'];

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
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function(){
    gulp.src(sassSources)
        .pipe(compass({
            sass: 'components/sass',
            image: 'builds/development/images',
            style: 'expanded'
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest('builds/development/css'))
});

gulp.task('default', ['coffee', 'js', 'compass']);
