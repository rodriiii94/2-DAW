<?php
class MuebleController {
    public function listarMuebles() {
        require_once 'model/Mueble.php';
        $mueble = new Mueble();
        $muebles = $mueble->getMuebles();
        // Cargo la vista para que pueda usar la variable $muebles
        require_once 'view/listado.php';
    }
}