const { src, dest, watch, parallel } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

// Imagenes
// nueva funcion
const webp = require('gulp-webp')
function css( done ) {
    src('src/scss/**/*.scss')// Identificar el archivo de SASS
        .pipe( plumber())
        .pipe( sass()) // Compilarlo
        .pipe( dest('build/css'))// Almacenarlo en el disco

    done();// Callback que avisa a gulp cuando llegamos al final
}
// nueva tarea wue cambia las fotos a formato webp
function versionWebp( done ) {
    
    const opciones = {
        quality: 50// calidad de las imagenes
    };
    src('src/img/**/+.{png,jpg}')// busca en la carpeta los formatos que le entregamos
        .pipe( webp( opciones ) )// hace la convercion
        .pipe( dest( 'build/img' ))// guarda las imagenes en carpeta build
    done();
}

function dev( done ) {
    watch('src/scss/**/*.scss', css)

    done();
}
exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel ( versionWebp, dev );