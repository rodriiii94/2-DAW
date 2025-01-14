<?php
class Unidad {
    private $db;
    private $unidades;

    public function __construct() {
        require_once("../Model/Conectar.php");
        $this->db = Conectar::conexion();
    }

    public function get_unidades($pieza) {
        $consultaUnidades = "SELECT sum(unidades) FROM Estante WHERE cod_pieza = (SELECT  cod FROM Pieza WHERE nombre = ?)";
        $consulta = $this->db->prepare($consultaUnidades);
        $consulta->bindParam(1, $pieza);
        $consulta->execute();
        $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
        $this->unidades = $resultado['sum(unidades)'];
        return $this->unidades;
    }
}