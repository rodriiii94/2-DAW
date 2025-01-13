<?php
session_start();
?>
<TD WIDTH=15% BGCOLOR="DDFFFF" VALIGN=CENTER>
  <A HREF="index.php">Principal</A>
  <BR>
  <BR>
  <A HREF="View/listado.php">Productos</A>
  <BR>
  <BR>
  <?php
  if (isset($_SESSION['logged']) && $_SESSION['logged'] === true) {
    echo "<A HREF='form_existencias.php'>Disponibilidad de piezas</A> <BR> <BR>";
    echo "<A HREF='/index.php?controlador=Usuario&metodo=cerrarSesion'>Cerrar Sesion</A>";
  } else {
    echo "<A HREF='View/login.php'>Acceso clientes</A>";
  }
  ?>
</TD>