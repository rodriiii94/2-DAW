<td width="15%" bgcolor="#DDFFFF" valign="center">
  <a href="/index.php?controlador=Index&metodo=index">Principal</a>
  <br><br>
  <a href="/index.php?controlador=Mueble&metodo=listarMuebles">Productos</a>
  <br><br>
  <?php
  if (isset($_SESSION['logged']) && $_SESSION['logged'] === true): ?>
    <a href="/index.php?controlador=Pieza&metodo=listado">Disponibilidad de piezas</a>
    <br><br>
    <a href="/index.php?controlador=Usuario&metodo=cerrarSesion">Cerrar Sesión</a>
  <?php else: ?>
    <a href="/index.php?controlador=Usuario&metodo=registro">Acceso clientes</a>
  <?php endif; ?>
</td>