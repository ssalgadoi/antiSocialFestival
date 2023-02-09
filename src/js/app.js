// Creamos galeria con javaScript
// cuando tenemos muchas imagenes podemos crear una galeria de esta forma
document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp() {
    crearGaleria();
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/thumbs/${i}.avif" type="image/avif">
            <source srcset="build/img/thumbs/${i}.webp" type="image/webp">
            <img loading="lazy"  src="build/img/thumbs/${i}.jpg" alt="imagen galeria"></img>`;
        
        galeria.appendChild(imagen);
    }
}