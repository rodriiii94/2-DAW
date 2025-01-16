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
        Clientes
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
                    Bienvenido usuario
                </H1>
            </TD>
        </TR>
    </TABLE>
</BODY>

</HTML>