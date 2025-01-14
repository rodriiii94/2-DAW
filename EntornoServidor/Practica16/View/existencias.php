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
               require_once("Menu/menu.php");
               ?>
               <TD WIDTH=85% ALIGN=CENTER VALIGN=CENTER>
                    <H1>
                         Informaci&oacute;n de la pieza seleccionada
                    </H1>
                    // TODO: Mostrar la información de la pieza seleccionada
                    <BR>
               </TD>
          </TR>
     </TABLE>
</BODY>

</HTML>