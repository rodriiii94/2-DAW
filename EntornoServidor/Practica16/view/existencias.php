<?php
session_start();
if (!isset($_SESSION['logged']) || $_SESSION['logged'] !== true) {
     header("Location: ../index.php?controlador=Usuario&accion=registro"); // Redirige a la página de registro
     exit();
 }
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
                         muebles Posada
                    </H1>
               </TD>
          </TR>
     </TABLE>
     <TABLE HEIGHT=85% WIDTH=100%>
          <TR>
               <?php
               require_once "components/menu.php";
               ?>
               <TD WIDTH=85% ALIGN=CENTER VALIGN=CENTER>
                    <H1>
                         Informaci&oacute;n de la pieza seleccionada
                    </H1>
                    <?php
                    // Recibir la pieza seleccionada y mostrarla
                    echo "<P>La cantidad de unidades disponibles de la pieza seleccionada es: " . $unidades . "</P>";
                    ?>
                    <BR>
               </TD>
          </TR>
     </TABLE>
</BODY>

</HTML>