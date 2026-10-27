const postales = [
    { url: "img/img1.jpeg", alt: "Montañas bajo la Vía Láctea" },
    { url: "img/img2.jpeg", alt: "Lago rodeado de bosque" },
    { url: "img/img4.jpeg", alt: "Glaciar al atardecer" }
];

const track = document.querySelector(".carrousel-track");
const btnPrev = document.querySelector(".carrusel-btn.prev");
const btnNext = document.querySelector(".carrusel-btn.next");

let index = 0;

postales.forEach(({ url, alt }) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = alt;
    track.appendChild(img);
});

function mostrar(i) {
    index = (i + postales.length) % postales.length;
    track.style.transform = `translateX(-${index * 100}%)`;
}

btnPrev.addEventListener("click", () => mostrar(index - 1));
btnNext.addEventListener("click", () => mostrar(index + 1));