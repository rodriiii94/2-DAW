<?php
class Piezas_modelo {
    private $db;
    private $piezas;

    public function __construct() {
        require_once("Model/Conectar.php");
        $this->db = Conectar::conexion();
        $this->piezas = [];
    }

    public function get_piezas() {
        $consultaListado = "SELECT nombre FROM Pieza";

        $consulta = $this->db->query($consultaListado);

        while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)) {
            $this->piezas[] = $filas;
        }
        return $this->piezas;
    }

}