const { src, dest, watch, parallel } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

// Imagenes
// nueva funcion

const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function css( done ) {
    src('src/scss/**/*.scss')// Identificar el archivo de SASS
        .pipe( plumber())
        .pipe( sass()) // Compilarlo
        .pipe( dest('build/css'))// Almacenarlo en el disco

    done();// Callback que avisa a gulp cuando llegamos al final
}
// tarea nueva
function imagenes( done ) {
    const opciones = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{png,jpg}')
        .pipe( cache( imagemin( opciones )))
        .pipe( dest('build/img'))
    done();
}
// nueva tarea wue cambia las fotos a formato webp
function versionWebp( done ) {
    const opciones = {
        quality: 50// calidad de las imagenes
    };
    src('src/img/**/*.{png,jpg}')// busca en la carpeta los formatos que le entregamos
        .pipe( webp( opciones ) )// hace la convercion
        .pipe( dest( 'build/img' ));// guarda las imagenes en carpeta build
    done();
}
function versionAvif( done ) {
    const opciones = {
        quality: 50// calidad de las imagenes
    };
    src('src/img/**/*.{png,jpg}')// busca en la carpeta los formatos que le entregamos
        .pipe( avif( opciones ) )// hace la convercion
        .pipe( dest( 'build/img' ));// guarda las imagenes en carpeta build
    done();
}

function dev( done ) {
    watch('src/scss/**/*.scss', css);
    done();
}
exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel ( imagenes, versionWebp, versionAvif, dev );