<?php

require_once 'model/Pieza.php';
class PiezaController {
    public function __construct() {
        if (isset($_GET['accion']) && method_exists($this, $_GET['accion'])) {
            $this->{$_GET['accion']}();
        }
    }
    public function listado() {
        $pieza = new Pieza();
        $piezas = $pieza->getPiezas();
        // Cargo la vista para que pueda usar la variable $piezas
        require_once 'view/form_existencias.php';
    }
}