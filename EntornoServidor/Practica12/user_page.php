<?php
session_start();
if (!isset($_SESSION['logged']) || $_SESSION['logged'] !== true) {
    header("Location: login.php");
    exit();
}
?>

<HTML>
 <HEAD>
  <TITLE>
	Clientes
  </TITLE>
 </HEAD>
 <BODY>
  <TABLE HEIGHT=15% WIDTH=100%>
   <TR>
    <TD BGCOLOR="FFFFDD" ALIGN=CENTER VALIGN=CENTER>
     <H1>
	Muebles Posada
     </H1>
    </TD>
   </TR>
  </TABLE>
  <TABLE HEIGHT=85% WIDTH=100%>
   <TR>
    <TD WIDTH=15% BGCOLOR="DDFFFF" VALIGN=CENTER>
	<A HREF="index.php">Principal</A>
	<BR>
	<BR>
	<A HREF="listado.php">Productos</A>
	<BR>
	<BR>
	<A HREF='form_existencias.php'>Disponibilidad de piezas</A>
	<BR>
	<BR>
	<?php
     if (isset($_SESSION['logged']) && $_SESSION['logged'] === true) {
         echo "<A HREF='logout.php'>Cerrar sesi&oacute;n</A>";
     } else {
         echo "<A HREF='login.php'>Acceso clientes</A>";
     }
     ?>
    </TD>
    <TD WIDTH=85% ALIGN=CENTER VALIGN=CENTER>
     <H1>
	    Bienvenido usuario
     </H1>
    </TD>
   </TR>
  </TABLE>
 </BODY>
</HTML>