<?php
    session_start();    
    session_unset(); // Limpia todas las variables de sesión
    session_destroy(); // Destruye todas las sesiones
    header("Location: login.php");
