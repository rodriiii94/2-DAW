<?php
session_start();
if (isset($_SESSION['logged']) && $_SESSION['logged'] === true) {
  header("Location: user_page.php");
  exit();
}
?>

<HTML>

<HEAD>
  <TITLE>
    Acceso de clientes
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
      <?php
      require_once 'Menu/menu.php';
      ?>
      <TD WIDTH=85% ALIGN=CENTER VALIGN=CENTER>
        <H1>Identif&iacute;quese
        </H1>
        <!-- Formulario de identificación -->
        <FORM NAME="login" ACTION="/index.php?controlador=Usuario&metodo=login" METHOD="POST">
          <TABLE>
            <TR>
              <TD ALIGN="RIGHT">
                Usuario:
              </TD>
              <TD>
                <INPUT TYPE="TEXT" NAME="user">
              </TD>
            </TR>
            <TR>
              <TD ALIGN="RIGHT">
                Contrase&ntilde;a:
              </TD>
              <TD>
                <INPUT TYPE="TEXT" NAME="pass">
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
        <!-- Fin del formulario de identificación -->
      </TD>
    </TR>
  </TABLE>
</BODY>

</HTML>