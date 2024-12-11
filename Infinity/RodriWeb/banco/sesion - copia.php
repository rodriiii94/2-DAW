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
                    <li class="current"><a href="sesion.php">Inicio Sesión</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="container">
        <h1>Inicio de sesión</h1>
        <form method="post" action="verificacion.php">
            <div class="form-group">
                <label for="usuario">Usuario:</label>
                <input type="text" id="usuario" name="usuario" required>
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