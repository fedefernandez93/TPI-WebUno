const formulario = document.getElementById("formulario");

function crearSpanError(input, idSpan){
    removerSpan(idSpan);
    const span = document.createElement("span");
    span.id = idSpan;
    span.classList.add("error");
    input.after(span);
}

function removerSpan(idSpan){
    const existeSpan = document.getElementById(idSpan);

    if(existeSpan){
        existeSpan.remove();
    }
}

function mostrarResumen(datos) {

    const resumen = document.createElement("div");
    resumen.classList.add("resumen-card");

    const titulo = document.createElement("h2");
    titulo.textContent = "¡Consulta enviada exitosamente!";
    titulo.classList.add("exito");
    resumen.appendChild(titulo);

    const lista = document.createElement("ul");
    resumen.appendChild(lista);

    for(const item of datos){
        const itemLi = document.createElement("li");
        itemLi.classList.add("lis");
        const titulo = document.createElement("h4");
        const valor = document.createElement("p");
        titulo.textContent = item.titulo;
        valor.textContent = item.valor;
        itemLi.appendChild(titulo);
        itemLi.appendChild(valor);
        lista.appendChild(itemLi);
    }

    const boton = document.createElement("button");
    boton.textContent = "Enviar otra consulta";
    boton.id = "activarFormulario";

    const itemBoton = document.createElement("li");
    itemBoton.appendChild(boton);

    // activo de nuevo el formulario y elimino el div del resumen
    boton.addEventListener("click", () => {
        formulario.style.display = "block";
        resumen.remove();
    });

    lista.appendChild(itemBoton);

    formulario.after(resumen);

    // oculto el formulario

    formulario.style.display = "none";
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtengo los input
    const nombre = document.getElementById("nombre");
    const mail = document.getElementById("mail");
    const tel = document.getElementById("tel");
    const mensaje = document.getElementById("mensaje");

    // Limpio los input por si traen espacios de más
    const nombreLimpio = nombre.value.trim().replace(/\s+/g, " ");
    const mailLimpio = mail.value.trim();
    const telLimpio = tel.value.trim().replace(/[\s-]/g, "");
    const mensajeLimpio = mensaje.value.trim().replace(/\s+/g, " ");

// CHEQUEO NOMBRE COMPLETO

    let errorNombre = "";

    let nombreSinEspacios = nombreLimpio.replace(/\s/g, "");

    // Primero chequeo que el nombre no este vacio y al menos tenga 6 caracteres
    if(nombreSinEspacios === ""){
        errorNombre += "* Este campo es obligatorio";
    } else {
        if(nombreSinEspacios.length < 6) {
            errorNombre += "* Mínimo se necesitan 6 carácteres <br>";
        }
        // Chequeo que solo sean caracteres 
        if(!(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/.test(nombreSinEspacios))){
            errorNombre += "* No se permiten carácteres especiales ni números <br>";
        }
    }
    
    if(errorNombre.length > 0){
        crearSpanError(nombre,"errorNombre");

        const spanNombre = document.getElementById("errorNombre");
        spanNombre.innerHTML = errorNombre;
    } else {
        removerSpan("errorNombre");
    }
// =====================================================

// CHEQUEO NUMERO DE TELEFONO
    let errorTelefono = "";

    if(telLimpio === ""){
        errorTelefono += "* Este campo es obligatorio";
    } else {
        if( !/^[0-9]{10}$/.test(telLimpio)){
            errorTelefono += "* El teléfono solo pueden ser números <br> * Tiene que ingresar 10 números";
        }
    }

    if(errorTelefono.length > 0){
        crearSpanError(tel,"errorTelefono");

        const spanTelefono = document.getElementById("errorTelefono");
        spanTelefono.innerHTML = errorTelefono;
    } else {
        removerSpan("errorTelefono");
    }
    
// =====================================================

// CHEQUEO MAIL
    let check = /^[^\s@]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    let errorMail = "";
    
    if(mailLimpio === ""){
        errorMail += "* Este campo es obligatorio";
    } else {
        if(!check.test(mailLimpio)){
            errorMail += "* Debe ingresar un mail válido";
        }
    }
    
    
    if(errorMail.length > 0){
        crearSpanError(mail,"errorMail");

        const spanMail = document.getElementById("errorMail");
        spanMail.innerHTML = errorMail;
    } else {
        removerSpan("errorMail");
    }

// =====================================================

// CHEQUEO MENSAJE

    let mensajeSinEspacios = mensajeLimpio.replace(/\s/g, "");
    let errorMensaje = "";

    if(mensajeSinEspacios === ""){
        errorMensaje += "* Este campo es obligatorio"
    } else {
        if(mensajeSinEspacios.length < 20){
            errorMensaje += "* La consulta debería tener al menos 20 carácteres."
        }
    }

    if(errorMensaje.length > 0){
        crearSpanError(mensaje,"errorMensaje");

        const spanMensaje = document.getElementById("errorMensaje");
        spanMensaje.innerHTML = errorMensaje;
    } else {
        removerSpan("errorMensaje");
    }

// MENSAJE DE EXITO
    if (errorNombre.length == 0 && errorMail.length == 0 && errorTelefono.length == 0 && errorMensaje.length == 0){
        
        const itemUno = {
            titulo: "Nombre: ",
            valor: nombreLimpio
        };

        const itemDos = {
            titulo: "Mail: ",
            valor: mailLimpio
        };

        const itemTres = {
            titulo: "Teléfono: ",
            valor: telLimpio
        };

        const itemCuatro = {
            titulo: "Mensaje: ",
            valor: mensajeLimpio
        };

        const datos = [itemUno,itemDos,itemTres,itemCuatro];
        // Reseteamos los campos porque fue exitoso
        formulario.reset()
    
        mostrarResumen(datos);

    }
})

