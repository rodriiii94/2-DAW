<?php
require_once 'model/Mueble.php';
class MuebleController {
    public function __construct() {
        if (isset($_GET['accion']) && method_exists($this, $_GET['accion'])) {
            $this->{$_GET['accion']}();
        }
    }
    public function listarMuebles() {
        $mueble = new Mueble();
        $muebles = $mueble->getMuebles();
        // Cargo la vista para que pueda usar la variable $muebles
        require_once 'view/listado.php';
    }
}