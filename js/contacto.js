const formulario = document.getElementById("formulario");

function crearSpanError(input, idSpan){
    const existeSpan = document.getElementById(idSpan);

    // Si existe un span con ese id lo borra
    if(existeSpan){
        existeSpan.remove();
    }

    if(idSpan === "exitoMensaje"){
        const span = document.createElement("span");
        span.id = idSpan;
        span.classList.add("exito");
        input.after(span);
    } else {
        const span = document.createElement("span");
        span.id = idSpan;
        span.classList.add("error");
        input.after(span);
    }

}

function removerSpan(idSpan){
    const existeSpan = document.getElementById(idSpan);

    if(existeSpan){
        existeSpan.remove();
    }
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtengo los input
    const nombre = document.getElementById("nombre");
    const mail = document.getElementById("mail");
    const tel = document.getElementById("tel");
    const mensaje = document.getElementById("mensaje");

    // Obtengo el li para poder ponerlo despues de ella
    const btn = document.getElementById("liBtn");


    // Obtengo todos los span de error
    const spanNombre = document.getElementById("errorNombre");
    const spanTelefono = document.getElementById("errorTelefono");
    const spanMail = document.getElementById("errorMail");
    const spanMensaje = document.getElementById("errorMensaje");

    // Obtengo el span exito
    

// CHEQUEO NOMBRE COMPLETO

    let errorNombre = "";

    let nombreSinEspacios = nombre.value.replace(/\s/g, "");

    // Primero chequeo que el nombre no este vacio y al menos tenga 6 caracteres
    if(nombreSinEspacios === ""){
        errorNombre += "* Este campo es obligatorio";
    } else {
        if(nombreSinEspacios.length < 6) {
            errorNombre += "* Mínimo se necesitan 6 caracteres mínimo <br>";
        }
        // Chequeo que solo sean caracteres 
        if(!(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/.test(nombreSinEspacios))){
            errorNombre += "* No se permiten caracteres especiales ni números <br>";
        }
    }
    
    if(errorNombre.length > 0){
        crearSpanError(nombre,"errorNombre");

        const spanNombre = document.getElementById("errorNombre");
        spanNombre.innerHTML = errorNombre;
    } else {
        if(errorNombre.length === 0){
            removerSpan("errorNombre");
        }
    }
// =====================================================

// CHEQUEO NUMERO DE TELEFONO
    let errorTelefono = "";

    if(tel.value === ""){
        errorTelefono += "* Este campo es obligatorio";
    } else {
        if( !/^[0-9]{10}$/.test(tel.value)){
            errorTelefono += "* El teléfono solo pueden ser números <br> * Tiene que ingresar 10 números";
        }
    }

    if(errorTelefono.length > 0){
        crearSpanError(tel,"errorTelefono");

        const spanTelefono = document.getElementById("errorTelefono");
        spanTelefono.innerHTML = errorTelefono;
    } else {
        if(errorTelefono.length === 0){
            removerSpan("errorTelefono");
        }
    }
    
// =====================================================

// CHEQUEO MAIL
    let check = /^[^\s@]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    let errorMail = "";
    
    if(mail.value === ""){
        errorMail += "* Este campo es obligatorio";
    } else {
        if(!check.test(mail.value)){
            errorMail += "* Debe ingresar un mail válido";
        }
    }
    
    
    if(errorMail.length > 0){
        crearSpanError(mail,"errorMail");

        const spanMail = document.getElementById("errorMail");
        spanMail.innerHTML = errorMail;
    } else {
        if(errorMail.length === 0){
            removerSpan("errorMail");
        }
    }

// =====================================================

// CHEQUEO MENSAJE

    let mensajeSinEspacios = mensaje.value.replace(/\s/g, "");
    let errorMensaje = "";

    if(mensajeSinEspacios === ""){
        errorMensaje += "* Este campo es obligatorio"
    } else {
        if(mensajeSinEspacios.length < 20){
            errorMensaje += "* La consulta deberia tener al menos 20 carácteres."
        }
    }

    if(errorMensaje.length > 0){
        crearSpanError(mensaje,"errorMensaje");

        const spanMensaje = document.getElementById("errorMensaje");
        spanMensaje.innerHTML = errorMensaje;
    } else {
        if(errorMensaje.length === 0){
            removerSpan("errorMensaje");
        }
    }

// MENSAJE DE EXITO
    if (errorNombre.length == 0 && errorMail.length == 0 && errorTelefono.length == 0 && errorMensaje.length == 0){

        // Reseteamos los campos porque fue exitoso
        formulario.reset()

        crearSpanError(btn,"exitoMensaje");

        const spanExito = document.getElementById("exitoMensaje");

        spanExito.textContent = "Consula enviada de manera exitosa!"; 
    } else {
        const spanExito = document.getElementById("exitoMensaje");

        if(spanExito != null){
            removerSpan("exitoMensaje");
        }
    }
})

