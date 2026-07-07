function crearCarrusel(idContenedor, imagenes, fondo) {
    var card = document.getElementById(idContenedor);
    if (!card) {
        console.error("El contenedor seleccionado no existe");
        return;
    }
    card.style.backgroundImage = "url('" + fondo + "')";
    var indiceActual = 0;
    var contenedor = document.createElement("div");
    contenedor.className = "carrusel-contenedor";
    var track = document.createElement("div");
    track.className = "carrusel-track";
    for (var i = 0; i < imagenes.length; i++) {
        var img = document.createElement("img");
        img.src = imagenes[i];
        track.appendChild(img);
    }
    contenedor.appendChild(track);
    var btnAnterior = document.createElement("button");
    btnAnterior.className = "carrusel-flecha carrusel-anterior";
    btnAnterior.innerHTML = "&#10094;";
    contenedor.appendChild(btnAnterior);
    var btnSiguiente = document.createElement("button");
    btnSiguiente.className = "carrusel-flecha carrusel-siguiente";
    btnSiguiente.innerHTML = "&#10095;";
    contenedor.appendChild(btnSiguiente);
    function actualizarCarrusel() {
        var porcentaje = indiceActual * 100;
        track.style.transform = "translateX(-" + porcentaje + "%)";
    }
    btnSiguiente.addEventListener("click", function () {
        indiceActual = indiceActual + 1;
        if (indiceActual >= imagenes.length) {
            indiceActual = 0;
        }
        actualizarCarrusel();
    });
    btnAnterior.addEventListener("click", function () {
        indiceActual = indiceActual - 1;
        if (indiceActual < 0) {
            indiceActual = imagenes.length - 1;
        }
        actualizarCarrusel();
    });
    card.appendChild(contenedor);
}

function crearCarruselTexto(idContenedor, items, fondo) {
    var card = document.getElementById(idContenedor);
    if (!card) {
        console.error("El contenedor seleccionado no existe");
        return;
    }
    if (fondo) {
        card.style.backgroundImage = "url('" + fondo + "')";
    }
    var indiceActual = 0;
    var contenedor = document.createElement("div");
    contenedor.className = "carrusel-contenedor";
    var track = document.createElement("div");
    track.className = "carrusel-track carrusel-track-texto";

    for (var i = 0; i < items.length; i++) {
        var slide = document.createElement("div");
        slide.className = "carrusel-slide-texto";

        var item = items[i];
        if (typeof item === "string") {
            var titulo = document.createElement("h3");
            titulo.textContent = item;
            slide.appendChild(titulo);
        } else {
            var titulo2 = document.createElement("h3");
            titulo2.textContent = item.titulo;
            slide.appendChild(titulo2);
            if (item.detalle) {
                var detalle = document.createElement("p");
                detalle.textContent = item.detalle;
                slide.appendChild(detalle);
            }
        }
        track.appendChild(slide);
    }

    contenedor.appendChild(track);

    var btnAnterior = document.createElement("button");
    btnAnterior.className = "carrusel-flecha carrusel-anterior";
    btnAnterior.innerHTML = "&#10094;";
    contenedor.appendChild(btnAnterior);

    var btnSiguiente = document.createElement("button");
    btnSiguiente.className = "carrusel-flecha carrusel-siguiente";
    btnSiguiente.innerHTML = "&#10095;";
    contenedor.appendChild(btnSiguiente);

    function actualizarCarrusel() {
        var porcentaje = indiceActual * 100;
        track.style.transform = "translateX(-" + porcentaje + "%)";
    }

    btnSiguiente.addEventListener("click", function () {
        indiceActual = indiceActual + 1;
        if (indiceActual >= items.length) {
            indiceActual = 0;
        }
        actualizarCarrusel();
    });

    btnAnterior.addEventListener("click", function () {
        indiceActual = indiceActual - 1;
        if (indiceActual < 0) {
            indiceActual = items.length - 1;
        }
        actualizarCarrusel();
    });

    card.appendChild(contenedor);
}