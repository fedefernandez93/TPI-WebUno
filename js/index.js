const postales = [
    { url: "img/imagenes-carrousel/img1.jpeg", alt: "Bosque con rio y montañas" },
    { url: "img/imagenes-carrousel/img2.jpeg", alt: "Rio rodeado de bosque" },
    { url: "img/imagenes-carrousel/img4.jpeg", alt: "Montaña y bosque bajo la vía lactea" }
];

const imagen = document.getElementById("imagen-carrousel")
const btnPrev = document.querySelector(".carrousel-btn.prev");
const btnNext = document.querySelector(".carrousel-btn.next");

let index = 0;

function mostrar() {
    imagen.src = postales[index].url
    imagen.alt = postales[index].alt
}

btnPrev.addEventListener("click", () => {
    if (index === 0) {
        index = postales.length -1;
    } else {
        index --;
    }
    mostrar();
});

btnNext.addEventListener("click", () => {
    if (index === postales.length -1) {
        index = 0;
    } else {
        index ++;
    }
    mostrar()
});

mostrar();