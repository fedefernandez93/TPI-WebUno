const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtengo los input
    const nombre = document.getElementById("nombre");
    const mail = document.getElementById("mail");
    const tel = document.getElementById("tel");
    const mensaje = document.getElementById("mensaje");

    // Obtengo todos los span de error
    const spanNombre = document.getElementById("errorNombre");
    const spanTelefono = document.getElementById("errorTelefono");
    const spanMail = document.getElementById("errorMail");
    const spanMensaje = document.getElementById("errorMensaje");

    // Obtengo el span de exito
    const spanExito = document.getElementById("mensajeExito");

    spanExito.innerHTML = "";

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

    spanNombre.innerHTML = errorNombre;
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

    spanTelefono.innerHTML = errorTelefono;
// =====================================================

// CHEQUEO MAIL
    let check = /^[^\s@]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    let errorMail = "";
    
    if(mail.value === ""){
        errorMail += "* Este campo es obligatorio";
    } else {
        if(!check.test(mail.value)){
            errorMail = "* Debe ingresar un mail válido";
        }
    }
    
    spanMail.innerHTML = errorMail;

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

    spanMensaje.innerHTML = errorMensaje;

// MENSAJE DE EXITO
    if (errorNombre.length == 0 && errorMail.length == 0 && errorTelefono.length == 0 && errorMensaje.length == 0){

        // Reseteamos los campos porque fue exitoso
        formulario.reset()

        spanExito.innerHTML = "Consulta enviada exitosamente!"
    }
})