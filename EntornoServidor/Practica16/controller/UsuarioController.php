<?php
require_once 'model/Usuario.php';
class UsuarioController {
    public function __construct() {
        if (isset($_GET['accion']) && method_exists($this, $_GET['accion'])) {
            $this->{$_GET['accion']}();
        }
    }

    public function registro() {
        require_once 'view/login.php';
    }
    public function user_page() {
        require_once 'view/user_page.php';
    }

    public function login() {
        $usuario = new Usuario();
        // Si el usuario y la contraseña son correctos
        if ($usuario->verify($_POST['user'], $_POST['pass']) === true) {
            // Inicio la sesión y redirijo a la página de usuario
            $this->user_page();
        } else {
            // Si no son correctos, vuelvo a mostrar el formulario de login
            $this->registro();
        }
    }

    public function cerrarSesion() {
        $usuario = new Usuario();
        $usuario->cerrarSesion(); // Cierro y destruyo la sesión
        exit();
    }
}
