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

function mostrarRespuestas(){
    const respuestas = [
        "'De Noviembre a Abril la temperatura es templada, ideal para trekking, campamento y excursiones al aire libre. De Junio a Septiembre es la temporada alta de nieve.'",
        "'Sí. Parques Nacionales exige un registro de trekking gratuito y obligatorio en línea antes de ingresar a los senderos.'",
        "'Es necesario contar con licencia de conducir vigente, documento de identidad (DNI o pasaporte) y tarjeta de crédito a nombre del conductor.'",
        "'Durante la temporada invernal (Junio-Septiembre), llevar cadenas es obligatorio en las rutas de montaña y en la ruta de los Siete Lagos.'",
        "'Para temporada alta se recomienda reservar con 1 a 2 meses de anticipación, especialmente navegaciones y caminatas sobre el Glaciar Perito Moreno.'",
        "'En la sección 'Mi viaje' podés seleccionar alojamiento, actividades y movilidad. El sistema calcula el costo total según los días y la cantidad de personas.'"
    ];

    const cards = document.getElementsByClassName("cards-preguntas");

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
            const estabaAbierta = cards[i].querySelector(".respuesta");

            // Borro la respuesta que esté abierta en cualquier card
            const abiertas = document.querySelectorAll(".respuesta");
            for (const r of abiertas) {
                r.remove();
            }

            // Si esta card estaba cerrada, la abro
            if (!estabaAbierta) {
                const respuesta = document.createElement("p");
                respuesta.classList.add("respuesta");
                respuesta.textContent = respuestas[i];
                cards[i].appendChild(respuesta);
            }
        });
    }
}

mostrarRespuestas();