<?php
class MuebleController {
    public function listarNombres() {
        require_once '../Model/Mueble.php';
        $mueble = new Mueble();
        require_once '../View/listado.php';
        return $mueble->get_nombre();
    }

    public function listarPrecios() {
        require_once '../Model/Mueble.php';
        $mueble = new Mueble();
        require_once '../View/listado.php';
        return $mueble->getPrecio();
    }

    public function listarMuebles() {
        require_once '../Model/Mueble.php';
        $mueble = new Mueble();
        return $mueble->getMuebles();
    }
}