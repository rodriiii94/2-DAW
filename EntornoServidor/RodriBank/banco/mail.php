<?php
    session_start();
    $para = $_POST['email'];
    $asunto = "Hemos recibido tu mensaje con asunto: " . $_POST['asunto'];
    $mensaje = "Detalles del formulario de contacto:\n\n" . "Nombre: " . $_POST['nombre'] . "\nEmail: " . $_POST['email'] . "\nTeléfono: " . $_POST['telefono'] . "\nMensaje: " . $_POST['mensaje'];
    $cabeceras = "From: no-reply@rodriBank.com" . "\r\n" .     
    "Reply-To: no-reply@rodriBank.com" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

    mail($para, $asunto, $mensaje, $cabeceras);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto - Mi Banco</title>
    <link rel="stylesheet" href="mail.css">
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
        <h1>Confirmación enviada </h1>

        <p id="texto">Gracias por contactarnos, <strong><?php echo $_POST['nombre']; ?></strong>. Hemos enviado un correo de confirmación</p>
    </main>

    <footer>
        <p>&copy; 2024 RodriBank. Todos los derechos reservados.</p>
    </footer>
</body>
</html>