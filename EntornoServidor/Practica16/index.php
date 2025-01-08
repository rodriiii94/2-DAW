<?php
session_start();

$controlador = "Mueble";

if (!empty($_GET['controlador'])) {
    $controlador = $_GET['controlador'];
}

$rutaControlador = "Controller/" . $controlador . "Controller.php";

if (file_exists($rutaControlador)) {
    require_once $rutaControlador;
} else {
    die("El controlador no existe - 404 not found");
}

require_once $controlador;
