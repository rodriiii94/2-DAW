<td width="15%" bgcolor="#DDFFFF" valign="center">
  <a href="/index.php?controlador=Principal&accion=principal">Principal</a>
  <br><br>
  <a href="/index.php?controlador=Mueble&accion=listarMuebles">Productos</a>
  <br><br>
  <?php
  if (isset($_SESSION['logged']) && $_SESSION['logged'] === true): ?>
    <a href="/index.php?controlador=Pieza&accion=listado">Disponibilidad de piezas</a>
    <br><br>
    <a href="/index.php?controlador=Usuario&accion=cerrarSesion">Cerrar Sesión</a>
  <?php else: ?>
    <a href="/index.php?controlador=Usuario&accion=registro">Acceso clientes</a>
  <?php endif; ?>
</td>