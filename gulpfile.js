const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.images = comprimeImagens;

/*  tinha colocado
    exports.default = comprimeImagens;
    mas o terminal apontou que não tinha colocado, então troquei por 'images',
    e coloquei no script do gulpfile.js: "build": "gulp images" e deu certo. 

*/