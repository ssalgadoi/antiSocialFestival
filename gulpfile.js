const { src, dest } = require("gulp-sass")(require('sass'));
const sass = require("sass");

function css( done ) {
    src('src/scss/app.scss')// Identificar el archivo de SASS
        .pipe(sass()) // Compilarlo
        .pipe( dest(bulid/css));// Almacenarlo en el disco

    done();// Callback que avisa a gulp cuando llegamos al final
}
exports.css = css;