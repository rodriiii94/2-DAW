<?php
require_once 'Model/Muebles_modelo.php';
$mueble = new Mueble();
$datosCodMueble = $mueble->getCodMueble();
$datosNombreMueble = $mueble->getNombre();
$datosPrecioMueble = $mueble->getPrecio();

require_once 'View/listado.phtml';