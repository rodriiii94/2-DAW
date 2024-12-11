<?php
session_start();

if (isset($_SESSION['logged']) && $_SESSION['logged'] === true) {
    header('Location: ../banco/user.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Servicios - Mi Banco</title>
    <link rel="stylesheet" href="sesion.css">
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
                            echo '<li><a href="cerrar_session.php">Cerrar Sesión</a></li>';
                        } else {
                            echo'<li class="current"><a href="sesion.php">Iniciar Sesión</a></li>';
                        }
                    ?>
                </ul>
            </nav>
        </div>
    </header>

    <main class="container">
        <h1>Inicio de sesión</h1>
        <form method="post" action="validar.php">
            <div class="form-group">
                <label for="nombre">Usuario:</label>
                <input type="text" id="nombre" name="nombre" required>
            </div>
            <div class="form-group">
                <label for="contr">Contraseña:</label>
                <input type="password" id="contr" name="contr" required>
            </div>
            <div class="form-group">
                <input type="submit" value="Acceder">
            </div>
        </form>
    </main>

    <footer>
        <p>&copy; 2024 RodriBank. Todos los derechos reservados.</p>
    </footer>
</body>

</html>
