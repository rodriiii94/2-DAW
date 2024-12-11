<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta de Capitales</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background: #fff;
            padding: 20px 40px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        h1 {
            color: #333;
            margin-bottom: 20px;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        select,
        button {
            padding: 10px;
            margin: 10px 0;
            border-radius: 4px;
            border: 1px solid #ccc;
            font-size: 16px;
        }

        button {
            background-color: #3498db;
            color: #fff;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #2980b9;
        }

        #button-container {
            display: flex;
            justify-content: center;
        }

        #continente {
            margin-left: 10px;
        }

    </style>
</head>

<body>
    <div class="container">
        <h1>Consulta de Capitales</h1>
        <form action="capital.php" method="POST">
            <label for="pais">Selecciona un país:</label>
            <select id="pais" name="pais" >
                <?php
                    $conexion = new mysqli('sql305.infinityfree.com', 'if0_37511789', '34003400Ja', 'if0_37511789_DAW');
                    if ($conexion->connect_errno) {
                        printf("<p>Error en la conexión a la base de datos: %s</p>", $conexion->connect_error);
                        exit();
                    }
                    $consulta = $conexion->prepare("SELECT Nombre FROM Paises");
                    if ($consulta) {
                        if ($consulta->execute()) {
                            $resultado = $consulta->get_result();
                            if ($resultado->num_rows > 0) {
                                while ($fila = $resultado->fetch_assoc()) {
                                    echo "<option value='" .htmlspecialchars($fila['Nombre']) . "'";
                                    if (isset($_POST['pais']) && $_POST['pais'] == $fila['Nombre']) echo " selected";
                                    echo ">" .htmlspecialchars($fila['Nombre']) . "</option>";
                                }
                            }
                            $resultado->free();
                        }
                        $consulta->close();
                    } else {
                        printf("<p>Error en la preparación de la consulta: %s</p>", $conexion->error);
                    }
                    $conexion->close();
                ?>
            </select>
            <div id="button-container">
                <button type="submit" id="capital" name="capital">Obtener Capital</button>
                <button type="submit" id="continente" name="continente">Obtener Continente</button>
            </div>        
        </form>

        <?php

        if (isset($_POST['capital'])) {

            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $pais = $_POST['pais'];

                // echo "<p>País seleccionado: " . htmlspecialchars($pais) . "</p>";

                // Crear una nueva conexión
                $conexion = new mysqli('sql305.infinityfree.com', 'if0_37511789', '34003400Ja', 'if0_37511789_DAW');

                // Verificación de la conexión
                if ($conexion->connect_errno) {
                    printf("<p>Error en la conexión a la base de datos: %s</p>", $conexion->connect_error);
                    exit();
                }

                // Preparar la consulta para evitar inyecciones SQL
                $consulta = $conexion->prepare("SELECT Capital FROM Paises WHERE Nombre = ?");

                if ($consulta) {
                    // Asignamos el parámetro del país
                    $consulta->bind_param("s", $pais);

                    // Ejecutar la consulta
                    if ($consulta->execute()) {
            
                        // Obtener el resultado
                        $resultado = $consulta->get_result();

                        if ($resultado->num_rows > 0) {
                            // Mostrar el resultado
                            while ($fila = $resultado->fetch_assoc()) {
                                echo "<p>La capital de " . htmlspecialchars($pais) . " es " . htmlspecialchars($fila['Capital']) . "</p>";
                            }
                        } else {
                            echo "<p>No se encontró la capital de " . htmlspecialchars($pais) . "</p>";
                        }

                        // Liberar el conjunto de resultados y cerrar la conexión
                        $resultado->free();
                    }

                    $consulta->close();
                }

                $conexion->close();
            }

        } else if (isset($_POST['continente'])) {

            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $pais = $_POST['pais'];

                // echo "<p>País seleccionado: " . htmlspecialchars($pais) . "</p>";

                $conexion = new mysqli('sql305.infinityfree.com', 'if0_37511789', '34003400Ja', 'if0_37511789_DAW');
            
                if ($conexion->connect_errno) {
                    printf("<p>Error en la conexión a la base de datos: %s</p>", $conexion->connect_error);
                    exit();
                }

                $consulta = $conexion->prepare("SELECT Continente FROM Paises WHERE Nombre = ?");

                if ($consulta) {
                    
                    $consulta->bind_param("s", $pais);

                    if ($consulta->execute()) {

                        $resultado = $consulta->get_result();

                        if ($resultado->num_rows > 0) {
                            while ($fila = $resultado->fetch_assoc()) {
                                echo "<p>El continente de " . htmlspecialchars($pais) . " es " . htmlspecialchars($fila['Continente']) . "</p>";
                            }
                        } else {
                            echo "<p>No se encontró el continente de " . htmlspecialchars($pais) . "</p>";
                        }

                        $resultado->free();
                    }

                    $consulta->close();
                }

                $conexion->close();
            }
        }
        ?>


    </div>
</body>
</html>