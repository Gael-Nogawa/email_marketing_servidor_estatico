const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./build/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.images = comprimeImagens;