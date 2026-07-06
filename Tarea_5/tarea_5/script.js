const formulario = document.getElementById("registroForm");

formulario.addEventListener("submit", function(e){

    e.preventDefault();
    document.querySelectorAll(".error").forEach(error => {
        error.innerText = "";
    });
    let esValido = true;
    const nombre = document.getElementById("nombre").value.trim();
    const regexNombre = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/;
    if(!regexNombre.test(nombre)){
        document.getElementById("errorNombre").innerText =
        "El nombre solo debe contener letras.";
        esValido = false;
    }
    const email = document.getElementById("email").value.trim();
    const regexEmail =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regexEmail.test(email)){
        document.getElementById("errorEmail").innerText =
        "Ingrese un correo válido.";
        esValido = false;
    }
    const password =
    document.getElementById("password").value;
    const regexPass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(!regexPass.test(password)){
        document.getElementById("errorPass").innerText =
        "Debe tener 8 caracteres, una mayúscula y un número.";
        esValido = false;
    }
    if(esValido){
        const usuario = {
            nombre: nombre,
            email: email,
            password: password
        };
        localStorage.setItem(
            "usuario",
            JSON.stringify(usuario)
        );
        alert("¡Formulario guardado correctamente!");
        formulario.reset();
    }

});
