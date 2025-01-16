<?php
class Unidad {
    private $db;
    private $unidades;

    public function __construct() {
        require_once("model/Conexion.php");
        $this->db = Conexion::conexion();
    }

    public function get_unidades($pieza) {
        try {
            $consultaUnidades = "SELECT sum(unidades) as stock FROM Estante WHERE cod_pieza = (SELECT cod FROM Pieza WHERE nombre = ?)";
            $consulta = $this->db->prepare($consultaUnidades);
            //! Forma 1 de parametrizar en PDO: bindParam
            $consulta->bindParam(1, $pieza); // Sustituye el ? por el valor de $pieza
            $consulta->execute();
            $resultado = $consulta->fetch(PDO::FETCH_ASSOC); // Guarda las unidades
            $this->unidades = $resultado['stock'];
            $consulta->closeCursor(); // Cierra la consulta
            return $this->unidades; // Devuelve el número de unidades

        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            $this->unidades = null; // Asegurar un valor en caso de error
            
        } finally {
            $this->db = null; // Cerrar la conexión
        }
    }
}