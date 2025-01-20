<?php
session_start();

// declarar la variable del controlador por defecto
$controlador = "Principal";
// deckarar ka variale del método por defecto
$accion = "principal"; 

// si se recibe un controlador por GET, se asigna a la variable
if (!empty($_GET['controlador'])) {
    $controlador = $_GET['controlador'];
}

// si se recibe un método($accion) por GET, se asigna a la variable
if (!empty($_GET['accion'])) {
    $accion = $_GET['accion'];
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
    if (method_exists($controladorObj, $accion)) {
        $controladorObj->$accion();

    } else {
        die("El método no existe - 404 not found");
    }
} else {
    die("El controlador no existe - 404 not found");
}