const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

exports.images = comprimeImagens;