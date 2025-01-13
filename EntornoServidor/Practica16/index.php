<?php
session_start();

$controlador = "Index"; // Controlador predeterminado
$accion = "index";      // Método predeterminado

// Comprobar si se especifica un controlador en la URL
if (!empty($_GET['controlador'])) {
    $controlador = $_GET['controlador'];
}

// Construir la ruta al archivo del controlador
$rutaControlador = "Controller/" . $controlador . "Controller.php";

// Verificar si el archivo del controlador existe
if (file_exists($rutaControlador)) {
    require_once $rutaControlador;

    // Nombre de la clase del controlador
    $nombreClaseControlador = $controlador . "Controller";

    // Verificar si la clase existe
    if (class_exists($nombreClaseControlador)) {
        $controladorObj = new $nombreClaseControlador();

        // Comprobar si se especifica una acción/método en la URL
        if (!empty($_GET['accion'])) {
            $accion = $_GET['accion'];

            // Verificar si el método existe en el controlador
            if (method_exists($controladorObj, $accion)) {
                $controladorObj->$accion();
            } else {
                die("El método '$accion' no existe en el controlador '$nombreClaseControlador' - 404 not found");
            }
        } else {
            // Ejecutar el método predeterminado
            if (method_exists($controladorObj, $accion)) {
                $controladorObj->$accion();
            } else {
                die("El método predeterminado '$accion' no existe en el controlador '$nombreClaseControlador' - 404 not found");
            }
        }
    } else {
        die("La clase del controlador '$nombreClaseControlador' no existe - 404 not found");
    }
} else {
    die("El controlador '$controlador' no existe - 404 not found");
}