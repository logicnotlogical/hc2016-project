var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
    return sass('static_files/css/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('static_files/css'));
});

gulp.task('watch', function() {
    gulp.watch('static_files/css/*.scss', ['sass']);
});

gulp.task('default', function() {

});
