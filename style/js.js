
    // Función para convertir campos de texto a mayúsculas al perder el foco
    function convertirAMayusculas(inputElement) {
        inputElement.value = inputElement.value.toUpperCase();
    }

    // Función para validar las contraseñas
    function validarContraseñas() {
        const password1 = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;
        const errorPassword2 = document.getElementById("error_password2");

        //*****Preguntar como hacer oa que te lo detecte segun lo escribes.....*****
        if (password1.length < 8 || password2.length < 8) {
            errorPassword2.innerHTML = "Las contraseñas deben tener al menos 8 caracteres.";
            errorPassword2.style.display = "block";
            return false;
        }else if(password1 !== password2){
            errorPassword2.innerHTML = "Las contraseñas deben coincidir.";
            errorPassword2.style.display = "block";
            return false;
        } else {
            errorPassword2.style.display = "none";
            return true;
        }
    }

    // Función para mostrar datos en la consola al enviar el formulario
    function submitForm() {
        if (validarContraseñas()) {
            const nombre = document.getElementById("nombre").value;
            const apellidos = document.getElementById("apellidos").value;
            const fechaNacimiento = document.getElementById("fecha_nacimiento").value;
            const dni = document.getElementById("dni").value;
            const email = document.getElementById("email").value;
            const genero = document.querySelector('input[name="genero"]:checked').value;
            const boletin = document.getElementById("boletin").checked;
            const ofertas = document.getElementById("ofertas").checked;
            const favorito = document.getElementById("favorito").value;
            const comentario = document.getElementById("comentario").value;

            console.log("Datos introducidos:");
            console.log("Nombre: " + nombre);
            console.log("Apellidos: " + apellidos);
            console.log("Fecha de Nacimiento: " + fechaNacimiento);
            console.log("DNI: " + dni);
            console.log("Email: " + email);
            console.log("Género: " + genero);
            console.log("Suscribirse al boletín: " + boletin);
            console.log("Informarse sobre ofertas: " + ofertas);
            console.log("Producto Favorito: " + favorito);
            console.log("Comentario: " + comentario);
        }
    }

    // Asociar funciones a eventos
    const textInputs = document.querySelectorAll('input[type="text"]');
    for (const input of textInputs) {
        input.addEventListener("blur", function () {
            convertirAMayusculas(this);
        });
    }

    document.getElementById("enviar").addEventListener("click", submitForm);

