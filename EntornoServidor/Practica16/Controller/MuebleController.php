<?php
require_once 'Model/Muebles_modelo.php';

$mueble = new Mueble();

// function obtenerNombre($mueble) {
//     return $mueble->getNombre();
// }
// function obtenerPrecio($mueble) {
//     return $mueble->getPrecio();
// }

// $nombre = obtenerNombre($mueble);
// $precio = obtenerPrecio($mueble);

$productos = [];
$nombres = $mueble->getNombre();
$precios = $mueble->getPrecio();

foreach ($nombres as $index => $nombre) {
    $productos[] = [
        'nombre' => $nombre,
        'precio' => $precios[$index] ?? 0,
    ];
}

require_once 'View/listado.php';