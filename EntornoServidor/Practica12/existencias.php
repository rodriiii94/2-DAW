<?php
session_start();

if (!isset($_SESSION['logged']) || $_SESSION['logged'] !== true) {
     header("Location: login.php");
     exit();
}

$server = "localhost";
$user = "root";
$pass = "root";
$db = "MUEBLES";

$conexion = new mysqli($server, $user, $pass, $db);

if ($conexion->connect_error) {
  die("<p>Error en la conexión a la base de datos: " . htmlspecialchars($conexion->connect_error) . "</p>");
}

$consulta = $conexion->prepare("SELECT sum(unidades) FROM Estante WHERE cod_pieza = (SELECT  cod FROM Pieza WHERE nombre = ?)");
?>

<HTML>
 <HEAD>
  <TITLE>
	Disponibilidad de pieza
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
	<?php
     if (isset($_SESSION['logged']) && $_SESSION['logged'] === true) {
         echo "<A HREF='form_existencias.php'>Disponibilidad de piezas</A> <BR> <BR>";
         echo "<A HREF='logout.php'>Cerrar sesi&oacute;n</A>";
     } else {
         echo "<A HREF='login.php'>Acceso clientes</A>";
     }
     ?>
    </TD>
    <TD WIDTH=85% ALIGN=CENTER VALIGN=CENTER>
     <H1>
	Informaci&oacute;n de la pieza seleccionada
     </H1>
	<?php
     $pieza = $_POST['pieza'];

     $consulta->bind_param("s", $pieza);
     if ($consulta->execute()) {
          $resultado = $consulta->get_result();
          if ($resultado->num_rows > 0) {
               while ($fila = $resultado->fetch_assoc()) {
                    echo "<p>Hay " . htmlspecialchars($fila['sum(unidades)']) . " unidades en el almacén con el nombre: " . $pieza . "</p>";
               }
          } else {
               echo "<p>No hay unidades en el almacén con el nombre: " . $pieza . "</p>";
          }
          $resultado->free();
     } else {
          echo "<p>Error al ejecutar la consulta de existencias.</p>";
     }
     $consulta->close();
     $conexion->close();
     ?>
     <BR>
    </TD>
   </TR>
  </TABLE>
 </BODY>
</HTML>