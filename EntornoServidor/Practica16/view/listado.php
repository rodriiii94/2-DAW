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
      require_once 'components/menu.php';
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

          <!-- Recorrer los muebles y mostrarlos en la tabla -->
          <?php foreach ($muebles as $mueble): ?>
            <TR>
              <TD><?php echo htmlspecialchars($mueble['nombre']); ?></TD> <!-- Mostrar el nombre del mueble -->
              <TD><?php echo number_format($mueble['precio'], 2); ?> €</TD> <!-- Mostrar el precio del mueble -->
            </TR>
          <?php endforeach; ?>
        </TABLE>
        <br>
        <!-- Botones de paginación -->
        <form method="GET" action="">
          <input type="hidden" name="controlador" value="Mueble">
          <input type="hidden" name="accion" value="listarMuebles">

          <?php if ($pagina > 1): ?>
            <button type="submit" name="pagina" value="<?php echo $pagina - 1; ?>">Anterior</button>
          <?php endif; ?>

          <span>Página <?php echo $pagina; ?> de <?php echo $totalPaginas; ?></span>

          <?php if ($pagina < $totalPaginas): ?>
            <button type="submit" name="pagina" value="<?php echo $pagina + 1; ?>">Siguiente</button>
          <?php endif; ?>
        </form>

      </TD>
    </TR>
  </TABLE>
</BODY>

</HTML>