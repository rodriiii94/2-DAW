<?php
require_once 'Modelo/Muebles_modelo.php';
$mueble = new Muebles_modelo();
$datos = $mueble->get_muebles();

require_once 'Vista/Muebles_vista.phtml';