<?php
class MenuController {
    function principal() {
        header("Location: ../View/index.php");
        exit();
    }
    
    function productos() {
        header("Location: ../View/listado.php");
        exit();
    }
    
    function form_existencias() {
        header("Location: ../View/form_existencias.php");
        exit();
    }
    
    function clientes() {
        header("Location: ../View/login.php");
        exit();
    }
}
