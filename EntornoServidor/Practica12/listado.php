<?php
session_start();

$server = "localhost";
$user = "root";
$pass = "root";
$db = "MUEBLES";

$conexion = new mysqli($server, $user, $pass, $db);

if ($conexion->connect_error) {
  die("<p>Error en la conexión a la base de datos: " . htmlspecialchars($conexion->connect_error) . "</p>");
}

$consulta = $conexion->prepare("SELECT nombre, precio FROM Mueble");
?>

<HTML>

<HEAD>
  <TITLE>
    Listado de muebles
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
          Listado de productos
        </H1>
        <BR>
        <TABLE BORDER=1>
          <TR>
            <TD ALIGN="CENTER" BGCOLOR=E7E7E7>
              <B>Nombre</B>
            </TD>
            <TD ALIGN="CENTER" BGCOLOR=E7E7E7>
              <B>Precio</B>
            </TD>
          </TR>

          <?php
          if ($consulta->execute()) {
            $resultado = $consulta->get_result();
            if ($resultado->num_rows > 0) {
              while ($fila = $resultado->fetch_assoc()) {
                echo "<tr><td>" . htmlspecialchars($fila['nombre']) . "</td><td>" . htmlspecialchars(number_format($fila['precio'], 2)) . " €</td></tr>";
              }
            } else {
              echo "<p>No se encontraron cuentas para " . htmlspecialchars($usuario) . "</p>";
            }
            $resultado->free();
          } else {
            echo "<p>Error al recuperar las cuentas</p>";
          }
          $consulta->close();
          ?>
        </TABLE>
      </TD>
    </TR>
  </TABLE>
</BODY>

</HTML>