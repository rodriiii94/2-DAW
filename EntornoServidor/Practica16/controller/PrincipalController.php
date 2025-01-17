<?php
class PrincipalController {
    public function __construct() {
        if (isset($_GET['accion']) && method_exists($this, $_GET['accion'])) {
            $this->{$_GET['accion']}();
        }
    }
    public function principal() {
        require_once 'view/index.php';
    }
}