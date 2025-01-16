<?php
session_start();

// Verifica si se ha pasado un parámetro para determinar la acción
$accion = isset($_GET['accion']) ? $_GET['accion'] : '';

if ($accion === 'logged') {
    // Verificación para usuarios logueados
    if (!isset($_SESSION['logged']) || $_SESSION['logged'] !== true) {
        header("Location: ../index.php?controlador=Usuario&metodo=registro"); // Redirige a la página de registro
        exit();
    }
} elseif ($accion === 'nologged') {
    // Verificación para usuarios no logueados
    if (isset($_SESSION['logged']) && $_SESSION['logged'] === true) {
        header("Location: ../index.php?controlador=Usuario&metodo=user_page"); // Redirige a la página de usuario
        exit();
    }
} else {
    // Acción por defecto o manejo de error
    echo "Acción no especificada o no válida.";
    exit();
}
?>