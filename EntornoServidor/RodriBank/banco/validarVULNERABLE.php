<?php
$server = "localhost";
$user = "areaClientes";
$pass = "areaClientes1234";
$db = "BANCO";

$conexion = new mysqli($server, $user, $pass, $db);
$nombre = $_POST['nombre'];
$contr = $_POST['contr'];

if ($conexion->connect_error) {
    die("<p>Error en la conexión a la base de datos: " . htmlspecialchars($conexion->connect_error) . "</p>");
}

/*$consulta = $conexion->prepare("SELECT nombre, contr FROM Usuario WHERE nombre = ? AND contr = ?");*/
$consulta = "SELECT nombre, contr FROM Usuario WHERE nombre = '$nombre' AND contr = '$contr'";

if (isset($_POST['nombre']) && isset($_POST['contr'])) {

    if ($consulta) {
        $resultado = $conexion->query($consulta);
        if ($resultado->num_rows === 1) {
            $fila = $resultado->fetch_assoc();
            header("Location: ../banco/user.php");
            session_start();
            $_SESSION['usuario'] = $fila['nombre'];
            $_SESSION['logged'] = true;
        } else {
            header("Location: ../banco/error.php");
        }
        $resultado->free();
    } else {
        echo "<p>Error al iniciar sesión</p>";
    }
}
$conexion->close();

// This part is redundant and can be removed as the query is already executed above
