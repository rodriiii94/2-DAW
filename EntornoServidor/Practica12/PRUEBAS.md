# Pruebas

| # | Escenario | Entrada | Resultado Esperado |
|---|-----------|---------|--------------------|
| 1 | Página inicio (index.php) / Sesión no iniciada | Usuario hace click en **Principal** | Carga la página index.php y menú: **Principal, Productos y Acceso Clientes**|
| 2 | Página inicio (index.php) / Sesión iniciada usuario **plopez** | Usuario hace click en **Principal** | Carga la página index.php y menú: **Principal, Productos, Disponibilidad de piezas y Cerrar Sesión**|
| 3 | Página inicio (index.php) *En base de datos hay una tabla con distintos muebles* / Sesión no iniciada | Usuario hace click en **Productos** | Carga la página listado.php con una tabla con los muebles: *Mesa TV / 35.00€*, *Mesa de centro / 40.00€*, *Mes auxiliar / 20.00€* y *Mesa comedor plegable / 50.00€* y menú: **Principal, Productos y Acceso Clientes**|
| 4 | Página inicio (index.php) *En base de datos hay una tabla con distintos muebles* / Sesión iniciada usuario **plopez** | Usuario hace click en **Productos** | Carga la página listado.php con una tabla con los muebles: *Mesa TV / 35.00€*, *Mesa de centro / 40.00€*, *Mes auxiliar / 20.00€* y *Mesa comedor plegable / 50.00€* y menú: **Principal, Productos, Disponibilidad de piezas y Cerrar Sesión**|
| 5 | Página inicio (index.php) / Sesión no iniciada | Usuario hace click en **Acceso Clientes** | Carga la página login.php y menú: **Principal, Productos y Acceso Clientes** |
| 6 | Página inicio (index.php) / Sesión iniciada usuario **plopez** | Usuario hace click en **Cerrar Sesión** | Carga el archivo logout.php y redirige a index.php y menú: **Principal, Productos, Disponibilidad de piezas y Cerrar Sesión** |
| 7 | Página inicio (index.php) / Sesión Sesión iniciada usuario **plopez** | Usuario hace click en **Disponibilidad de piezas** | Carga la página form_existencias.php con un desplegable con las piezas **Bisagra metálica, Pata de madera 20cm, Pata de madera 50cm,    Rueda, Tablero de madera 20x20 y Tablero de madera 50x50** y menú **Principal, Productos, Disponibilidad de piezas y Cerrar Sesión**|
| 8 | Página inicio (index.php) / Sesión Sesión iniciada usuario **plopez** | Usuario hace click en **Disponibilidad de piezas** y selecciona **Bisagra metálica** | Carga la página existencias.php con las unidades que hay de Bisagra metálica y menú **Principal, Productos, Disponibilidad de piezas y Cerrar Sesión** |
