<?php
    class Conexion {
        public static function conexion() {
            $conexion = new PDO("mysql:host=localhost;dbname=MUEBLES", "root", "root");
            $conexion->query("SET NAMES 'utf8'");
            return $conexion;
        }
    }