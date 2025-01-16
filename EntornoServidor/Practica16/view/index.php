<?php
session_start();
?>

<HTML>

<HEAD>
    <TITLE>
        Inicio
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
            require_once "components/menu.php";
            ?>
            <TD WIDTH=85% ALIGN=CENTER VALIGN=CENTER>
                <H1>
                    Bienvenido a la nueva forma de entender el hogar
                </H1>
                En Muebles Posada hacemos realidad tus deseos.
            </TD>
        </TR>
    </TABLE>
</BODY>

</HTML>