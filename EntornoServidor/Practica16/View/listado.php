<?php
session_start();
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
        <A HREF="View/index.php">Principal</A>
        <BR>
        <BR>
        <A HREF="View/listado.php">Productos</A>
        <BR>
        <BR>
        <?php
        if (isset($_SESSION['logged']) && $_SESSION['logged'] === true) {
          echo "<A HREF='View/form_existencias.php'>Disponibilidad de piezas</A> <BR> <BR>";
          echo "<A HREF='View/logout.php'>Cerrar sesi&oacute;n</A>";
        } else {
          echo "<A HREF='View/login.php'>Acceso clientes</A>";
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
            foreach ($productos as $producto) {
              echo "<tr><td>" . htmlspecialchars($producto['nombre']) . "</td><td>"
              . htmlspecialchars(number_format($producto['precio'], 2)) . " €</td></tr>";
          }
          
          ?>
        </TABLE>
      </TD>
    </TR>
  </TABLE>
</BODY>

</HTML>