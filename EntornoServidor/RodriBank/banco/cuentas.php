<?php
session_start();

if (!isset($_SESSION['logged']) || $_SESSION['logged'] !== true) {
    header('Location: ../banco/sesion.php');
    exit;
}

$server = "localhost";
$user = "rodri";
$pass = "3400";
$db = "BANCO";

$conexion = new mysqli($server, $user, $pass, $db);

if ($conexion->connect_error) {
    die("<p>Error en la conexión a la base de datos: " . htmlspecialchars($conexion->connect_error) . "</p>");
}

$consulta = $conexion->prepare("SELECT id, saldo FROM Cuentas WHERE nombre = ?");

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Servicios - Mi Banco</title>
    <link rel="stylesheet" href="cuentas.css">
</head>

<body>
    <header>
        <div class="container">
            <div id="branding">
                <a href="indexBanco.php">
                    <h1><span class="highlight">Rodri</span><span id="Bank">Bank</span></h1>
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="indexBanco.php">Inicio</a></li>
                    <li><a href="servicios.php">Servicios</a></li>
                    <li><a href="oficinas.php">Oficinas</a></li>
                    <li><a href="contacto.php">Contacto</a></li>
                    <?php
                    if (isset($_SESSION['logged']) && $_SESSION['logged'] === true) {
                        echo '<li class="current"><a href="cuentas.php">Cuentas</a></li>';
                        echo '<li><a href="cerrar_session.php">Cerrar Sesión</a></li>';
                    } else {
                        echo '<li><a href="sesion.php">Iniciar Sesión</a></li>';
                    }
                    ?>
                </ul>
            </nav>
        </div>
    </header>

    <main class="container">
        <?php
        if (isset($_SESSION['usuario'])) {
            $usuario = $_SESSION['usuario'];

            $consulta->bind_param("s", $usuario);
            if ($consulta->execute()) {
                $resultado = $consulta->get_result();
                if ($resultado->num_rows > 0) {
                    echo "<h1>Cuentas de " . htmlspecialchars($usuario) . "</h1>";
                    echo "<table>";
                    echo "<tr><th>Número de Cuenta</th><th>Saldo</th></tr>";
                    while ($fila = $resultado->fetch_assoc()) {
                        echo "<tr><td>" . htmlspecialchars($fila['id']) . "</td><td>" . htmlspecialchars($fila['saldo']) . "€</td></tr>";
                    }
                    echo "</table>";
                } else {
                    echo "<p>No se encontraron cuentas para " . htmlspecialchars($usuario) . "</p>";
                }
                $resultado->free();
            } else {
                echo "<p>Error al recuperar las cuentas</p>";
            }
            $consulta->close();
        } else {
            echo "<p>Error al recuperar las cuentas</p>";
        }
        ?>
    </main>

    <footer>
        <p>&copy; 2024 RodriBank. Todos los derechos reservados.</p>
    </footer>
</body>

</html>