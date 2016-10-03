var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee');

var coffeeScripts = ['components/coffee/desc.coffee'];

gulp.task('coffee', function(){
    //gutil.log('Hello World');
    gulp.src(coffeeScripts)
        .pipe(coffee({bare : true})
            .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
});
