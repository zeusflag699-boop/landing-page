// Modo oscuro
const botonModo = document.querySelector("#modoOscuro");

if (botonModo) {
    botonModo.addEventListener("click", () => {
        document.body.classList.toggle("modo-oscuro");
    });
}

// Botón descargar
const botonDescargar = document.querySelector("#descargarBtn");
const mensaje = document.querySelector("#mensaje");

if (botonDescargar) {
    botonDescargar.addEventListener("click", () => {
        mensaje.textContent =
            "¡Gracias por tu interés en WolvesX!";
    });
}
