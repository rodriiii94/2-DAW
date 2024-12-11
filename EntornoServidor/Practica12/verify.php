<?php
$server = "localhost";
$user = "root";
$pass = "root";
$db = "MUEBLES";

$conexion = new mysqli($server, $user, $pass, $db);

if ($conexion->connect_error) {
    die("<p>Error en la conexión a la base de datos: " . htmlspecialchars($conexion->connect_error) . "</p>");
}

$consulta = $conexion->prepare("SELECT `user`, `pass` FROM `Usuario` WHERE user = ? AND pass = ?");

if (isset($_POST['user']) && isset($_POST['pass'])) {
    $usuario = $_POST['user'];
    $contrasena = $_POST['pass'];

    $consulta->bind_param("ss", $usuario, $contrasena);
    if ($consulta->execute()) {
        $resultado = $consulta->get_result();
        if ($resultado->num_rows === 1) {
            $fila = $resultado->fetch_assoc();
            session_start();
            $_SESSION['usuario'] = $fila['nombre'];
            $_SESSION['logged'] = true;
            header("Location: user_page.php");
        } else {
            header("Location: login.php");
        }
        $resultado->free();
    } else {
        echo htmlspecialchars("<p>Error al iniciar sesión</p>");
    }
    $consulta->close();
}
$conexion->close();