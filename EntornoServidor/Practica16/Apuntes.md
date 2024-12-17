# Apuntes MVC en PHP

## Consultas

$this->conexion = new PDO('mysql:host=localhost;dbname=Mueble', 'root', 'root');

$this->consultaListado = "SELECT nombre, precio FROM Mueble";
$this->consultaFormExistencias = "SELECT nombre FROM Pieza";
$this->consultaExistencias = "SELECT sum(unidades) FROM Estante WHERE cod_pieza = (SELECT  cod FROM Pieza WHERE nombre = ?)";

$this->resultadoListado = $this->conexion->prepare($this->consultaListado);
$this->resultadoFormExistencias = $this->conexion->prepare($this->consultaFormExistencias);
$this->resultadoExistencias = $this->conexion->prepare($this->consultaExistencias);
