<?php

class PiezaController {
    public function listado() {
        require_once '../Model/Pieza.php';
        $pieza = new Pieza();
        require_once '../View/form_existencias.php';
        return $pieza->getPiezas();
    }
}