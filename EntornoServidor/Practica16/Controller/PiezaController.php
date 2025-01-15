<?php

class PiezaController {
    public function listado() {
        require_once 'model/Pieza.php';
        $pieza = new Pieza();
        $piezas = $pieza->getPiezas();
        // Cargo la vista para que pueda usar la variable $piezas
        require_once 'view/form_existencias.php';
    }
}