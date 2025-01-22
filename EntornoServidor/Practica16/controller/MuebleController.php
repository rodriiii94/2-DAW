<?php
require_once 'model/Mueble.php';
class MuebleController {
    private $modelo;

    public function __construct() {
        // Creo una instancia de la clase Mueble
        $this->modelo = new Mueble();
    }
    public function listarMuebles() {

        // Limite de registros por pagina
        $limite = 10;
        
        // Obtengo la pagina actual
        $pagina = isset($_GET['pagina']) ? (int)$_GET['pagina'] : 1;
        
        if ($pagina < 1) {
            $pagina = 1;
        }
        
        // Obtengo el total de registros
        $totalRegistros = $this->modelo->totalRegistros();
        $totalPaginas = ceil($totalRegistros / $limite);
        
        if ($pagina > $totalPaginas) {
            $pagina = 1;
        }
        
        // Obtengo los muebles para la pagina actual
        $muebles = $this->modelo->getMuebles($limite, $pagina);

        // Cargo la vista para que pueda usar la variable $muebles
        require_once 'view/listado.php';
    }
}