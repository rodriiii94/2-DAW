<?php
    $server = "sql7.freemysqlhosting.net";
    $user = "sql7739885";
    $pass = "ivnv662Jsy";
    $db = "sql7739885";

    $conexion = new mysqli($server, $user, $pass, $db);

    if ($conexion->connect_error) {
        die("<p>Error en la conexión a la base de datos: " . htmlspecialchars($conexion->connect_error) . "</p>");
    }

    $consulta = $conexion->prepare("SELECT nombre, contr FROM Usuario WHERE nombre = ? AND contr = ?");
    session_start();
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Servicios - Mi Banco</title>
    <link rel="stylesheet" href="servicios.css">
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
                    <li class="current"><a href="sesion.php">Inicio Sesión</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="container">
        <h1>Inicio de sesión</h1>

        <div class="desarrollo">
            <?php
            if (isset($_POST['usuario']) && isset($_POST['contr'])) {
                $usuario = $_POST['usuario'];
                $contrasena = $_POST['contr'];

                $consulta->bind_param("ss", $usuario, $contrasena);
                if ($consulta->execute()) {
                    $resultado = $consulta->get_result();
                    if ($resultado->num_rows === 1) {
                        $fila = $resultado->fetch_assoc();
                        echo "<p>Bienvenido, " . $usuario . "</p>";
                    } else {
                        echo '<p>Usuario o contraseña incorrectos</p>';
                        session_unset();
                        session_destroy();
                    }
$resultado->free();
                } else {
                    echo "<p>Error al iniciar sesión</p>";
                }
                $consulta->close();
            }
            $conexion->close();
            ?>
            
        </div>

    </main>

    <footer>
        <p>&copy; 2024 RodriBank. Todos los derechos reservados.</p>
    </footer>
</body>

</html>

