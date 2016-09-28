var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

// Compress task
gulp.task('compress', function () {
    return gulp.src('./js.storage.js')
        .pipe(uglify({
            preserveComments: function (win, doc) {
                return /Licensed under/.test(doc.value);
            }
        }))
        .pipe(rename('js.storage.min.js'))
        .pipe(gulp.dest('./'));
});