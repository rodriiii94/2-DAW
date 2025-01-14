<?php
require_once 'Model/Usuario.php';
class UsuarioController {

    function login() {
        $usuario = new Usuario();
        if ($usuario->verify($_POST['user'], $_POST['pass']) === true) {
            header("Location: View/user_page.php");
        } else {
            header("Location: View/login.php");
        }
    }

    function cerrarSesion() {
        $usuario = new Usuario();
        $usuario->cerrarSesion();
        exit();
    }
}