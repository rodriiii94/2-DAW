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
          muebles Posada
        </H1>
      </TD>
    </TR>
  </TABLE>
  <TABLE HEIGHT=85% WIDTH=100%>
    <TR>
      <?php
        require_once 'Menu/menu.php';
      ?>
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
          // Incluir el controlador para obtener los muebles
          require_once '../Controller/MuebleController.php';
          $muebleController = new MuebleController();
          $muebles = $muebleController->listarMuebles();
          foreach ($muebles as $mueble) {
            echo "<TR>";
            echo "<TD>" . $mueble['nombre'] . "</TD>";
            echo "<TD>" . number_format($mueble['precio'], 2) . " €</TD>";
            echo "</TR>";
          }
          ?>
        </TABLE>
      </TD>
    </TR>
  </TABLE>
</BODY>

</HTML>