<?php
    session_start();

    if (!isset($_SESSION['logged']) || $_SESSION['logged'] !== true) {
        header("Location: ../banco/sesion.php");
        exit();
    }
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Servicios - Mi Banco</title>
    <link rel="stylesheet" href="servicios.css">
    <style>
        input[type="submit"] {
            display: inline-block;
            background: #005f73;
            color: #ffffff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background: #0a9396;
        }
        .boton {
            margin-top: 20px;
            justify-content: left;
        }
    </style>
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
                            echo '<li><a href="cuentas.php">Cuentas</a></li>';
                            echo '<li class="current"><a href="cerrar_session.php">Cerrar Sesión</a></li>';
                        } else {
                            echo'<li><a href="sesion.php">Iniciar Sesión</a></li>';
                        }
                    ?>
                </ul>
            </nav>
        </div>
    </header>

    <main class="container">
        <h1>Inicio de sesión</h1>

        <div class="desarrollo">
            <?php
            session_start();
            if (isset($_SESSION['usuario'])) {
                echo "<p>Bienvenido, " . htmlspecialchars($_SESSION['usuario']) . "</p>";
                echo '<div class="boton">
                            <form action="cerrar_session.php" method="post">
                                <input type="submit" value="Cerrar sesión">
                            </form>
                        </div>';
            } else {
                echo "<p>No has iniciado sesión.</p>";
            }
            ?>

    </main>

    <footer>
        <p>&copy; 2024 RodriBank. Todos los derechos reservados.</p>
    </footer>
</body>

</html>
