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

        $cods = [];
        while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)) {
            $cods[] = $filas['cod'];
        }

        return $this->cod;
    }

    public function setCodMueble($cod) {
        $this->cod = $cod;
    }

    public function getNombre() {
        $consultaNombreMueble = "SELECT nombre FROM Mueble";
        $consulta = $this->db->query($consultaNombreMueble);
    
        $nombres = [];
        while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)) {
            $nombres[] = $filas['nombre'];
        }
    
        return $nombres;
    }    

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function getPrecio() {
        $consultaPrecioMueble = "SELECT precio FROM Mueble";
        $consulta = $this->db->query($consultaPrecioMueble);

        $Precios = [];
        while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)) {
            $Precios[] = $filas['precio'];
        }

        return $this->precio;
    }

    public function setPrecio($precio) {
        $this->precio = $precio;
    }

}
