<td width="15%" bgcolor="#DDFFFF" valign="center">
  <a href="/index.php?controlador=Menu&metodo=principal">Principal</a>
  <br><br>
  <a href="/index.php?controlador=Menu&metodo=productos">Productos</a>
  <br><br>
  <?php
  if (isset($_SESSION['logged']) && $_SESSION['logged'] === true): ?>
    <a href="/index.php?controlador=Menu&metodo=form_existencias">Disponibilidad de piezas</a>
    <br><br>
    <a href="/index.php?controlador=Usuario&metodo=cerrarSesion">Cerrar Sesión</a>
  <?php else: ?>
    <a href="/index.php?controlador=Menu&metodo=clientes">Acceso clientes</a>
  <?php endif; ?>
</td>
