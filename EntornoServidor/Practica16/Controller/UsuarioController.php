<?php
require_once 'Model/login.phtml';
$usuario = new Usuarios_modelo();
$usuario->verify($_POST['user'], $_POST['pass']);

function cerrarSesion() {
    session_start();
    session_unset(); // Limpia todas las variables de sesión
    session_destroy(); // Destruye todas las sesiones
    header("Location: View/login.phtml");
}

require_once 'View/user_page.php';