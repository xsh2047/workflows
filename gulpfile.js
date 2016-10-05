var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    coffee = require('gulp-coffee'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat');

var env, coffeeScripts, javaScripts,
    sassSources, htmlSources, outputDir, sassStyle;

env = process.env.NODE_ENV || 'development';

if(env === 'development'){
    outputDir = 'builds/development/';
    sassStyle = 'expanded';
}else {
    outputDir = 'builds/production/';
    sassStyle = 'compressed';
}

coffeeScripts = ['components/coffee/desc.coffee'];
javaScripts = [
    'components/scripts/desc.js',
    'components/scripts/main.js'
];
sassSources = ['components/sass/style.scss'];
htmlSources = [outputDir + '*.html'];

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
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(gulp.dest(outputDir + 'js'))
        .pipe(connect.reload())
});

gulp.task('compass', function(){
    gulp.src(sassSources)
        .pipe(compass({
            sass: 'components/sass',
            image: outputDir + 'images',
            style: sassStyle
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest(outputDir + 'css'))
        .pipe(connect.reload())
});

gulp.task('watch', function(){
    gulp.watch(coffeeScripts, ['coffee']);
    gulp.watch(javaScripts, ['js']);
    gulp.watch('components/sass/*.scss', ['compass']);
    gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function(){
    connect.server({
        root: 'builds/development',
        livereload: true
    });
});

gulp.task('html', function(){
    gulp.src(htmlSources)
        .pipe(connect.reload())
});

gulp.task('default', ['html', 'coffee', 'js', 'compass', 'connect', 'watch']);
