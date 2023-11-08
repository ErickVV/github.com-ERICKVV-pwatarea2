function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Expresión regular para validar la contraseña
    // Debe contener al menos un carácter especial y tener entre 8 y 20 caracteres
    var regexPassword = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,20}$/;

    if (nombre === "" || email === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    if (!soloLetras.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios.");
        return false;
    }

    if (nombre.length > 50) {
        alert("El nombre no puede tener más de 50 caracteres.");
        return false;
    }

    if (email.length > 100) {
        alert("El correo electrónico no puede tener más de 100 caracteres.");
        return false;
    }

    if (!regexPassword.test(password)) {
        alert("La contraseña debe tener entre 8 y 20 caracteres y contener al menos un carácter especial.");
        return false;
    }

    // Si todo está correcto, permitir el envío
    return true;
}
