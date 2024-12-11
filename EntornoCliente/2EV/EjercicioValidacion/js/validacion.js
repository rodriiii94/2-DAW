function validar() {
    var email = document.getElementById("email");

    var password = document.getElementById("password").value;

    if (password == null || password.length < 5 || password.length > 10 ||
         !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{5,10}$/.test(password)) {
        alert("La contraseña es incorrecta");
        return false;
    }

    var apellidos = document.getElementById("apellido").value;

    if (apellidos == null || apellidos.length == 0 || !/^[A-Za-z0-9]\s+$/.test(apellidos)) {
        alert("El campo apellidos es incorrecto");
        return false;
    }

    var fecha_nac = document.getElementById("fecha").value;

    var fecha = new Date(fecha_nac);
    var hoy = new Date();

    if (fecha_nac == null || fecha_nac.length == 0 || fecha > hoy) {
        alert("La fecha de nacimiento es incorrecta");
        return false;
    }
}