<?php
class Mueble {
    private $db;

    private $cod;

    private $nombres = [];

    private $precios = [];

    public function __construct() {
        require_once("../Model/Conectar.php");
        $this->db = Conectar::conexion();
        $this->cod = 0;
        $this->nombres = [];
        $this->precios = [];
    }

    public function getCodMueble() {
        $consultaCodMueble = "SELECT cod FROM Mueble";
        $consulta = $this->db->query($consultaCodMueble);

        $cods = [];
        while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)) {
            $cods[] = $filas;
        }

        return $this->cod;
    }

    public function setCodMueble($cod) {
        $this->cod = $cod;
    }

    public function get_nombre() {
        $consultaNombreMueble = "SELECT nombre FROM Mueble";
        $consulta = $this->db->query($consultaNombreMueble);
    
        while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)) {
            $this->nombres[] = $filas;
        }
    
        return $this->nombres;
    }    

    public function setNombre($nombres) {
        $this->$nombres = $nombres;
    }

    public function getPrecio() {
        $consultaPrecioMueble = "SELECT precio FROM Mueble";
        $consulta = $this->db->query($consultaPrecioMueble);

        while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)) {
            $this->precios[] = $filas;
        }

        return $this->precios;
    }

    public function setPrecio($precios) {
        $this->precios = $precios;
    }

    public function getMuebles() {
        $consultaListado = "SELECT nombre, precio FROM Mueble";
        $consulta = $this->db->query($consultaListado);

        $muebles = [];
        while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)) {
            $muebles[] = $filas;
        }

        return $muebles;
    }
}