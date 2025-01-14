<?php
session_start();

$controlador = "Index";
$metodo = "index"; // Método por defecto

if (!empty($_GET['controlador'])) {
    $controlador = $_GET['controlador'];
}

if (!empty($_GET['metodo'])) {
    $metodo = $_GET['metodo'];
}

$rutaControlador = "Controller/" . $controlador . "Controller.php";

if (file_exists($rutaControlador)) {
    require_once $rutaControlador;
    
    $nombreControlador = $controlador . "Controller";
    $controladorObj = new $nombreControlador();
    
    if (method_exists($controladorObj, $metodo)) {
        $controladorObj->$metodo();
    } else {
        die("El método no existe - 404 not found");
    }
} else {
    die("El controlador no existe - 404 not found");
}