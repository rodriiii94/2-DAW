<?php
    session_start();
    $server = "localhost";
    $user = "areaOficinas";
    $pass = "areaOficinas1234";
    $db = "BANCO";

    $conexion = new mysqli($server, $user, $pass, $db);

    if ($conexion->connect_error) {
        die("<p>Error en la conexión a la base de datos: " . $conexion->connect_error . "</p>");
    }

    $nomCiudad = $_POST["ciudad"]; // Eliminamos htmlspecialchars para que la entrada quede sin sanitizar.

    // Consultas sin preparación, concatenando directamente la entrada del usuario (lo que introduce vulnerabilidad).
    $consultaNombre = "SELECT nomCiudad FROM Oficinas";
    $consultaMapa = "SELECT mapa FROM Oficinas WHERE nomCiudad = '$nomCiudad'";
    $consultaHorario = "SELECT horarioApertura, horarioCierre FROM Horario WHERE nomCiudad = '$nomCiudad'";
    $consultaDirPostal = "SELECT dirPostal FROM Oficinas WHERE nomCiudad = '$nomCiudad'";
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oficinas - Mi Banco</title>
    <link rel="stylesheet" href="oficinas.css">
</head>

<body>
    <header>
    <div class="container">
            <div id="branding">
                <a href="indexBanco.php"><h1><span class="highlight">Rodri</span><span id="Bank">Bank</span></h1></a>
            </div>
            <nav>
                <ul>
                    <li><a href="indexBanco.php">Inicio</a></li>
                    <li><a href="servicios.php">Servicios</a></li>
                    <li class="current"><a href="oficinas.php">Oficinas</a></li>
                    <li><a href="contacto.php">Contacto</a></li>
                    <?php
                        if (isset($_SESSION['logged']) && $_SESSION['logged'] === true) {
                            echo '<li><a href="cuentas.php">Cuentas</a></li>';
                            echo '<li><a href="cerrar_session.php">Cerrar Sesión</a></li>';
                        } else {
                            echo'<li><a href="sesion.php">Iniciar Sesión</a></li>';
                        }
                    ?>
                </ul>
            </nav>
        </div>
    </header>

    <main class="container">
        <h1>Nuestras Oficinas</h1>
        <form method="POST" action="oficinas.php">
            <select name="ciudad" id="ciudad">
                <option value="" disabled selected>Seleccione una ciudad</option>
                <?php
                    // Ejecutamos la consulta sin preparar
                    $resultado = $conexion->query($consultaNombre);
                    if ($resultado) {
                        while ($fila = $resultado->fetch_assoc()) {
                            echo '<option value="' . $fila['nomCiudad'] . '">' . $fila['nomCiudad'] . '</option>';
                        }
                        $resultado->free();
                    } else {
                        echo '<option value="" disabled>Error al cargar ciudades</option>';
                    }
                ?>
            </select>
            <input type="submit" value="Ver oficina">
        </form>

        <?php
            if (isset($_POST['ciudad'])) {
                echo "<div id=\"oficina-info\">";

                // Consulta de dirección postal
                $resultadoDirPostal = $conexion->query($consultaDirPostal);
                if ($resultadoDirPostal) {
                    if ($resultadoDirPostal->num_rows > 0) {
                        while ($fila = $resultadoDirPostal->fetch_assoc()) {
                            echo "<h2>Oficina en: $nomCiudad</h2>";
                            echo "<p><strong>Dirección postal:</strong> " . $fila['dirPostal'] . "</p>";
                        }
                    } else {
                        echo "<p>No se encontró la dirección postal de $nomCiudad</p>";
                    }
                    $resultadoDirPostal->free();
                } else {
                    echo "<p>Error al ejecutar la consulta de dirección postal.</p>";
                }

                // Consulta de horario
                $resultadoHorario = $conexion->query($consultaHorario);
                if ($resultadoHorario) {
                    if ($resultadoHorario->num_rows > 0) {
                        while ($fila = $resultadoHorario->fetch_assoc()) {
                            echo "<p><strong>Horario de apertura:</strong> " . $fila['horarioApertura'] . "</p>";
                            echo "<p><strong>Horario de cierre:</strong> " . $fila['horarioCierre'] . "</p></div>";
                        }
                    } else {
                        echo "<p>No se encontró el horario de $nomCiudad</p></div>";
                    }
                    $resultadoHorario->free();
                } else {
                    echo "<p>Error al ejecutar la consulta de horario.</p></div>";
                }
            }
            ?>

        <div id="mapa">
            <?php
                if (isset($_POST['ciudad'])) {
                    $resultadoMapa = $conexion->query($consultaMapa);
                    if ($resultadoMapa) {
                        if ($resultadoMapa->num_rows > 0) {
                            while ($fila = $resultadoMapa->fetch_assoc()) {
                                echo $fila['mapa'];
                            }
                        } else {
                            echo "<p>No se encontró el mapa de $nomCiudad</p>";
                        }
                        $resultadoMapa->free();
                    } else {
                        echo "<p>Error al ejecutar la consulta de mapa.</p>";
                    }
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

