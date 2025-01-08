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
          Existencias
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
                         Disponibilidad de piezas
                    </H1>
                    Selecci&oacute;n de la pieza para la que se desea conocer su disponibilidad.
                    <BR>
                    <BR>
                    <!-- Formulario de selección de pieza -->
                    <FORM NAME="existencias" ACTION="View/existencias.php" METHOD="POST">
                         <TABLE>
                              <TR>
                                   <TD ALIGN="RIGHT">
                                        Escoja la pieza
                                   </TD>
                                   <TD>
                                        <SELECT NAME="pieza">
                                             <?php

                                             if ($consulta->execute()) {
                                                  $resultado = $consulta->get_result();
                                                  while ($fila = $resultado->fetch_assoc()) {
                                                       echo '<OPTION VALUE="' . htmlspecialchars($fila['nombre']) . '">' .
                                                            htmlspecialchars($fila['nombre']) . '</OPTION>';
                                                  }
                                                  $resultado->free();
                                             } else {
                                                  echo "<p>Error al ejecutar la consulta de piezas.</p>";
                                             }
                                             $consulta->close();
                                             $conexion->close();
                                             ?>
                                        </SELECT>
                                   </TD>
                              </TR>
                              <TR>
                                   <TD>
                                   </TD>
                                   <TD>
                                        <INPUT TYPE="SUBMIT" NAME="SUBMIT" VALUE="Enviar">
                                   </TD>
                              </TR>
                         </TABLE>
                    </FORM>
               </TD>
          </TR>
     </TABLE>
</BODY>

</HTML>