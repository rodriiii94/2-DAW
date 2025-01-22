<?php
require_once("model/Conexion.php");
class Mueble {
    private $db;
    private $muebles;

    public function __construct() {
        $this->db = Conexion::conexion();
        $this->muebles = [];
    }

    public function getMuebles($limite, $pagina){
        try {
            $offset = ($pagina - 1) * $limite; // Calcula el inicio del registro

            //$consulta = $this->db->prepare("SELECT nombre, precio FROM Mueble ORDER BY nombre ASC LIMIT :limite OFFSET :offset");
            $consulta = $this->db->prepare("SELECT nombre, precio FROM Mueble LIMIT :limite OFFSET :offset");

            // Asigna los valores a los parámetros
            $consulta->bindValue(':limite', (int) $limite, PDO::PARAM_INT);
            $consulta->bindValue(':offset', (int) $offset, PDO::PARAM_INT);
            $consulta->execute();
            $this->muebles = $consulta->fetchAll(PDO::FETCH_ASSOC); // Guarda los muebles en un array
            $consulta->closeCursor(); // Cierra la consulta
            return $this->muebles; // Devuelve un array con los muebles

        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            // $this->muebles = [];
            
        } 
    }

    public function totalRegistros(){
        try {
            $consulta = $this->db->prepare("SELECT COUNT(*) as total FROM Mueble");
            $consulta->execute();
            $total = $consulta->fetch(PDO::FETCH_ASSOC); // Guarda el total de registros
            $consulta->closeCursor(); // Cierra la consulta
            return $total['total']; // Devuelve el total de registros

        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return 0;
            
        }
    }

    public function __destruct() {
        $this->db = null;
    }
}