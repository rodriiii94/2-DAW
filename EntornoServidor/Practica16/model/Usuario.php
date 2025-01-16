<?php
class Usuario {
    private $db;
    private $ususario;
    private $password;

    public function __construct() {
        require_once("model/Conexion.php");
        $this->db = Conexion::conexion();
        $this->ususario = null;
        $this->password = null;
    }

    public function verify($user, $pass) {
        try {
            $consulta = $this->db->prepare("SELECT `user`, `pass` FROM `Usuario` WHERE user = :user AND pass = :pass");
            //! Forma 2 de parametrizar en PDO: execute(parametros)
            $consulta->execute([':user' => $user, ':pass' => $pass]); // Ejecutar la consulta con los parámetros
            $filas = $consulta->fetch(PDO::FETCH_ASSOC); 
            
            $consulta->closeCursor(); // Cerrar la consulta
    
            if ($filas !== false) { // Si la consulta no está vacía
                $usuario = $filas['user'];
                $password = $filas['pass'];
                session_start();
                $_SESSION['logged'] = true;
                $_SESSION['user'] = $usuario;
                $_SESSION['pass'] = $password;
                return true;
            } else {
                return false;
            }
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return false;
        } finally {
            $this->db = null; // Cerrar la conexión
        }
    }

    function cerrarSesion() {
        session_unset(); // Limpia todas las variables de sesión
        session_destroy(); // Destruye todas las sesiones
        header(header: "Location: ../index.php?controlador=Usuario&metodo=registro"); // Redirige al index
    }
}
