<?php
require_once 'model/Mueble.php';
class MuebleController {
    public function listarMuebles() {
        $mueble = new Mueble();
        $muebles = $mueble->getMuebles();
        // Cargo la vista para que pueda usar la variable $muebles
        require_once 'view/listado.php';
    }
}