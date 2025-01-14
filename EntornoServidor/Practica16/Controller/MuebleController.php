<?php
class MuebleController {
    public function listarMuebles() {
        require_once '../Model/Mueble.php';
        $mueble = new Mueble();
        return $mueble->getMuebles();
    }
}