<?php
session_start();

// declarar la variable de controlador y método por defecto
$controlador = "Index";
$metodo = "index"; 

// si se recibe un controlador por GET, se asigna a la variable
if (!empty($_GET['controlador'])) {
    $controlador = $_GET['controlador'];
} elseif (!empty($_POST['controlador'])) {
    $controlador = $_POST['controlador'];
}

// si se recibe un método por GET, se asigna a la variable
if (!empty($_GET['metodo'])) {
    $metodo = $_GET['metodo'];
} elseif (!empty($_POST['metodo'])) {
    $metodo = $_POST['metodo'];
}

// se crea la ruta del controlador
$rutaControlador = "controller/" . $controlador . "Controller.php";

// si el controlador existe, se incluye y se crea el objeto
if (file_exists($rutaControlador)) {
    require_once $rutaControlador;
    
    $nombreControlador = $controlador . "Controller";

    // se crea el objeto controlador para que pueda ejecutar el método
    $controladorObj = new $nombreControlador();
    
    // si el método existe, se ejecuta el método del controlador
    if (method_exists($controladorObj, $metodo)) {
        $controladorObj->$metodo();

    } else {
        die("El método no existe - 404 not found");
    }
} else {
    die("El controlador no existe - 404 not found");
}

