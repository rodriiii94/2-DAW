<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto - Mi Banco</title>
    <link rel="stylesheet" href="contacto.css">
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
                    <li><a href="oficinas.php">Oficinas</a></li>
                    <li class="current"><a href="contacto.php">Contacto</a></li>
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
        <h1>Contacto</h1>
        <form method="POST" action="mail.php">
            <div class="form-group">
                <label for="nombre">Nombre completo:</label>
                <input type="text" id="nombre" name="nombre" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="telefono">Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" pattern="[0-9]+" required>
            </div>
            <div class="form-group">
                <label for="asunto">Asunto:</label>
                <input type="text" id="asunto" name="asunto" required>
            </div>
            <div class="form-group">
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" required></textarea>
            </div>
            <div class="form-group">
                <input type="submit" value="Enviar mensaje">
            </div>
        </form>
    </main>

    <footer>
        <p>&copy; 2024 RodriBank. Todos los derechos reservados.</p>
    </footer>
</body>
</html>