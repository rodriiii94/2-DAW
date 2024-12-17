<?php
class Muebles_modelo {
    private $db;
    private $muebles;


    public function __construct() {
        require_once("Model/Conectar.php");
        $this->db = Conectar::conexion();
        $this->muebles = [];
    }

    public function get_muebles() {
        $consultaListado = "SELECT nombre, precio FROM Mueble";

        $consulta = $this->db->query($consultaListado);

        try {
            while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)) {
                $this->muebles[] = $filas;
            }
        } finally {
            $consulta->closeCursor();
        }
        return $this->muebles;
    }

}
