<?php
    $server = "sql7.freemysqlhosting.net";
    $user = "sql7739885";
    $pass = "ivnv662Jsy";
    $db = "sql7739885";

    $conexion = new mysqli($server, $user, $pass, $db);

    if ($conexion->connect_error) {
        die("<p>Error en la conexión a la base de datos: " . htmlspecialchars($conexion->connect_error) . "</p>");
    }

    $consultaNombre = $conexion->prepare("SELECT nomCiudad FROM Oficinas");
    $consultaMapa = $conexion->prepare("SELECT mapa FROM Oficinas WHERE nomCiudad = ?");
    $consultaHorario = $conexion->prepare("SELECT horarioApertura, horarioCierre FROM Horario WHERE nomCiudad = ?");
    $consultaDirPostal = $conexion->prepare("SELECT dirPostal FROM Oficinas WHERE nomCiudad = ?");
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
                    <li><a href="sesion.php">Inicio Sesión</a></li>
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
                    if ($consultaNombre->execute()) {
                        $resultado = $consultaNombre->get_result();
                        while ($fila = $resultado->fetch_assoc()) {
                            echo '<option value="' . htmlspecialchars($fila['nomCiudad']) . '">' .
                                htmlspecialchars($fila['nomCiudad']) . '</option>';
                        }
                        $resultado->free();
                    } else {
                        echo '<option value="" disabled>Error al cargar ciudades</option>';
                    }
                    $consultaNombre->close();
                ?>
            </select>
            <input type="submit" value="Ver oficina">
        </form>

        <?php
            if (isset($_POST['ciudad'])) {
                $ciudad = $_POST['ciudad'];
                echo "<div id=\"oficina-info\">";
                
                if ($consultaDirPostal) {
                    $consultaDirPostal->bind_param("s", $ciudad);
                    if ($consultaDirPostal->execute()) {
                        $resultado = $consultaDirPostal->get_result();
                        if ($resultado->num_rows > 0) {
                            while ($fila = $resultado->fetch_assoc()) {
                                echo "<h2>Oficina en: " . htmlspecialchars($ciudad) . "</h2>";
                                echo "<p><strong>Dirección postal:</strong> " . htmlspecialchars($fila['dirPostal']) . "</p>";
                            }
                        } else {
                            echo "<p>No se encontró la dirección postal de " . htmlspecialchars($ciudad) . "</p>";
                        }
                        $resultado->free();
                    } else {
                        echo "<p>Error al ejecutar la consulta de dirección postal.</p>";
                    }
                    $consultaDirPostal->close();
                }

                if ($consultaHorario) {
                    $consultaHorario->bind_param("s", $ciudad);
                    if ($consultaHorario->execute()) {
                        $resultado = $consultaHorario->get_result();
                        if ($resultado->num_rows > 0) {
                            while ($fila = $resultado->fetch_assoc()) {
                                echo "<p><strong>Horario de apertura:</strong> " . htmlspecialchars($fila['horarioApertura']) . "</p>";
                                echo "<p><strong>Horario de cierre:</strong> " . htmlspecialchars($fila['horarioCierre']) . "</p></div>";
                            }
                        } else {
                            echo "<p>No se encontró el horario de " . htmlspecialchars($ciudad) . "</p></div>";
                        }
                        $resultado->free();
                    } else {
                        echo "<p>Error al ejecutar la consulta de horario.</p></div>";
                    }
                    $consultaHorario->close();
                }
            }
            ?>

        <div id="mapa">
            <?php
                if (isset($_POST['ciudad'])) {
                    $ciudad = $_POST['ciudad'];
                    if ($consultaMapa) {
                        $consultaMapa->bind_param("s", $ciudad);
                        if ($consultaMapa->execute()) {
                            $resultado = $consultaMapa->get_result();
                            if ($resultado->num_rows > 0) {
                                while ($fila = $resultado->fetch_assoc()) {
                                    echo $fila['mapa'];
                                }
                            } else {
                                echo "<p>No se encontró el mapa de " . htmlspecialchars($ciudad) . "</p>";
                            }
                            $resultado->free();
                        } else {
                            echo "<p>Error al ejecutar la consulta de mapa.</p>";
                        }
                        $consultaMapa->close();
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
