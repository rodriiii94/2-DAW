<?php
class Usuarios_modelo {
    private $db;
    private $ususario;
    private $password;

    public function __construct() {
        require_once("Model/Conectar.php");
        $this->db = Conectar::conexion();
        $this->ususario = null;
        $this->password = null;
    }

    public function verify($user, $pass) {
        $consulta = $this->db->prepare("SELECT `user`, `pass` FROM `Usuario` WHERE user = ? AND pass = ?");
        $consulta->execute([$user, $pass]);
        $filas = $consulta->fetch(PDO::FETCH_ASSOC);
        
        if ($filas !== false) {
            $usuario = $filas['user'];
            $password = $filas['pass'];
            session_start();
            $_SESSION['logged'] = true;
            $_SESSION['user'] = $usuario;
            $_SESSION['pass'] = $password;
            header("Location: user_page.php");
        } else {
            header("Location: login.php");
        }
    }
}
