<?php
class Mueble {
    private $db;
    private $muebles;

    public function __construct() {
        require_once("model/Conexion.php");
        $this->db = Conexion::conexion();
        $this->muebles = [];
    }

    public function getMuebles(){
        try {
            $consulta = $this->db->prepare("SELECT nombre, precio FROM Mueble");
            $consulta->execute();
            $this->muebles = $consulta->fetchAll(PDO::FETCH_ASSOC); // Guarda los muebles en un array
            $consulta->closeCursor(); // Cierra la consulta
            return $this->muebles; // Devuelve un array con los muebles

        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            $this->muebles = [];
            
        } finally {
            $this->db = null; // Cierra la conexión
        }
    }
}