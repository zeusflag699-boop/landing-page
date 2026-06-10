// Modo oscuro
const botonModo = document.querySelector("#modoOscuro");

if (botonModo) {
    botonModo.addEventListener("click", () => {
        document.body.classList.toggle("modo-oscuro");
    });
}
