<?php
class Pieza {
    private $db;
    private $piezas = [];

    public function __construct() {
        require_once("model/Conexion.php");
        $this->db = Conexion::conexion();
        $this->piezas = [];
    }

    public function getPiezas(){
        try {
            $consulta = $this->db->prepare("SELECT nombre FROM Pieza");
            $consulta->execute();
            $this->piezas = $consulta->fetchAll(PDO::FETCH_ASSOC); // Guarda las piezas en un array
            $consulta->closeCursor(); // Cierra la consulta
            return $this->piezas; // Devuelve un array con las piezas

        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            $this->piezas = [];
            
        } finally {
            $this->db = null; // Cierra la conexión
        }
    }
}
