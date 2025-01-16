<?php
session_start();
if (!isset($_SESSION['logged']) || $_SESSION['logged'] !== true) {
     header("Location: ../index.php?controlador=Usuario&metodo=registro"); // Redirige a la página de registro
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
                         Disponibilidad de piezas
                    </H1>
                    Selecci&oacute;n de la pieza para la que se desea conocer su disponibilidad.
                    <BR>
                    <BR>
                    <!-- Formulario de selección de pieza -->
                    <FORM NAME="existencias" ACTION="/index.php?controlador=Unidad&metodo=stock" METHOD="POST">
                         <TABLE>
                              <TR>
                                   <TD ALIGN="RIGHT">
                                        Escoja la pieza
                                   </TD>
                                   <TD>
                                        <SELECT NAME="pieza">
                                             <?php
                                             // Recorrer las piezas y mostrarlas en el select
                                             foreach ($piezas as $pieza) {
                                                  echo "<OPTION VALUE='" . $pieza['nombre'] . "'>" . $pieza['nombre'] . "</OPTION>";
                                             }
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