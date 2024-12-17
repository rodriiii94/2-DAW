<?php
require_once 'Modelo/Usuarios_modelo.php';
$usuario = new Usuarios_modelo();
$usuario->verify($_POST['user'], $_POST['pass']);

require_once 'View/user_page.php';