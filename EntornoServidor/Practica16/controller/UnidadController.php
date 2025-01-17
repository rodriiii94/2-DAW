<?php
require_once 'model/Unidad.php';
class UnidadController {
    public function __construct() {
        if (isset($_GET['accion']) && method_exists($this, $_GET['accion'])) {
            $this->{$_GET['accion']}();
        }
    }
    public function stock() {
        $unidad = new Unidad();
        $unidades = $unidad->get_unidades($_POST['pieza']);
        // Cargo la vista para que pueda usar la variable $unidades
        require_once 'view/existencias.php';
    }
}