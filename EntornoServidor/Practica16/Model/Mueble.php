<?php
class Mueble {
    private $db;

    private $cod;

    private $nombre;

    private $precio;

    public function __construct() {
        require_once("Model/Conectar.php");
        $this->db = Conectar::conexion();
        $this->cod = 0;
        $this->nombre = "";
        $this->precio = 0;
    }

    public function getCodMueble() {
        $consultaCodMueble = "SELECT cod FROM Mueble";
        $consulta = $this->db->query($consultaCodMueble);

        while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)) {
            $this->cod = $filas;
        }

        return $this->cod;
    }

    public function setCodMueble($cod) {
        $this->cod = $cod;
    }

    public function getNombre() {
        $consultaNombreMueble = "SELECT nombre FROM Mueble";
        $consulta = $this->db->query($consultaNombreMueble);

        while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)) {
            $this->nombre = $filas;
        }

        return $this->nombre;
    }

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function getPrecio() {
        $consultaPrecioMueble = "SELECT precio FROM Mueble";
        $consulta = $this->db->query($consultaPrecioMueble);

        while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)) {
            $this->precio = $filas;
        }

        return $this->precio;
    }

    public function setPrecio($precio) {
        $this->precio = $precio;
    }

}
