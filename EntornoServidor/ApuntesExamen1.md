# Apuntes examen 1 evaluación

## Conexion a base de datos

```php
<?php
    session_start();
    $server = "localhost";
    $user = "areaOficinas";
    $pass = "areaOficinas1234";
    $db = "BANCO";

    $conexion = new mysqli($server, $user, $pass, $db);

    if ($conexion->connect_error) {
        die("<p>Error en la conexión a la base de datos: " . htmlspecialchars($conexion->connect_error) . "</p>");
    }

    $consultaNombre = $conexion->prepare("SELECT nomCiudad FROM Oficinas");

```

## Menu desplegable

```php
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
```

## Validadión de usuario

```php
<?php
$server = "localhost";
$user = "areaClientes";
$pass = "areaClientes1234";
$db = "BANCO";

$conexion = new mysqli($server, $user, $pass, $db);

if ($conexion->connect_error) {
    die("<p>Error en la conexión a la base de datos: " . htmlspecialchars($conexion->connect_error) . "</p>");
}

$consulta = $conexion->prepare("SELECT nombre, contr FROM Usuario WHERE nombre = ? AND contr = ?");

if (isset($_POST['nombre']) && isset($_POST['contr'])) {
    $usuario = $_POST['nombre'];
    $contrasena = $_POST['contr'];

    $consulta->bind_param("ss", $usuario, $contrasena);
    if ($consulta->execute()) {
        $resultado = $consulta->get_result();
        if ($resultado->num_rows === 1) {
            $fila = $resultado->fetch_assoc();
            header("Location: ../banco/user.php");
            session_start();
            $_SESSION['usuario'] = $fila['nombre'];
            $_SESSION['logged'] = true;
        } else {
            header("Location: ../banco/error.php");
            exit();
        }
        $resultado->free();
    } else {
        echo "<p>Error al iniciar sesión</p>";
    }
    $consulta->close();
}
$conexion->close();
```

