<?php
class UnidadController {
    public function stock() {
        require_once 'model/Unidad.php';
        $unidad = new Unidad();
        $unidades = $unidad->get_unidades($_POST['pieza']);
        // Cargo la vista para que pueda usar la variable $unidades
        require_once 'view/existencias.php';
    }
}