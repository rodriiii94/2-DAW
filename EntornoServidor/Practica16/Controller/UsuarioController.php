<?php
require_once 'Model/Usuario.php';
class UsuarioController {

    function login() {
        $usuario = new Usuarios_modelo();
        if ($usuario->verify($_POST['user'], $_POST['pass']) === true) {
            header("Location: View/user_page.php");
        } else {
            header("Location: View/login.php");
        }
    }

    function cerrarSesion() {
        session_start();
        session_unset();
        session_destroy();
        header("Location: index.php");
        exit();
    }

    // ...existing code...
}