function bienvenida() {
    alert("¡Bienvenido a AleStyle! 👗");
}
function mostrarPrendas() {
    let lista = document.querySelector("ul");

    if (lista.style.display === "none") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
}
function cambiarFondo() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "pink"
        ? "lightblue"
        : "pink";
}
function cambiarTitulo() {
    document.querySelector("h1").textContent =
        "¡Bienvenidos a AleStyle!";
}
function contarPrendas() {
    let prendas = document.querySelectorAll("ul li").length;

    alert("Tenemos " + prendas + " tipos de prendas disponibles.");
}