# Pruebas de RodriBank

## Tabla de pruebas

| Escenario | Entrada | Resultado Esperado |
|-----------|---------|--------|
| Página de inicio (**indexBanco.php**) | Usuario hace click en el logo RodriBank | Carga la página de inicio (indexBanco.php) |
| Página de inicio (**indexBanco.php**) | Usuario hace click en INICIO | Carga la página de inicio (indexBanco.php) |
| Página de inicio (**indexBanco.php**) | Usuario hace click en SERVICIOS | Carga la página de servicios (servicios.php) |
| Página de inicio (**indexBanco.php**) | Usuario hace click en OFICINAS | Carga la página de oficinas (oficinas.php) |
| Página de inicio (**indexBanco.php**) | Usuario hace click en CONTACTO | Carga la página de contacto (contacto.php) |
| Página de servicios (**servicios.php**) | Usuario hace click en el logo RodriBank | Carga la página de inicio (indexBanco.php) |
| Página de servicios (**servicios.php**) | Usuario hace click en INICIO | Carga la página de inicio (indexBanco.php) |
| Página de servicios (**servicios.php**) | Usuario hace click en SERVICIOS | Carga la página de servicios (servicios.php) |
| Página de servicios (**servicios.php**) | Usuario hace click en OFICINAS | Carga la página de oficinas (oficinas.php) |
| Página de servicios (**servicios.php**) | Usuario hace click en CONTACTO | Carga la página de contacto (contacto.php) |
| Página de oficinas (**oficinas.php**) | Usuario hace click en el logo RodriBank | Carga la página de inicio (indexBanco.php) |
| Página de oficinas (**oficinas.php**) | Usuario hace click en INICIO | Carga la página de inicio (indexBanco.php) |
| Página de oficinas (**oficinas.php**) | Usuario hace click en SERVICIOS | Carga la página de servicios (servicios.php) |
| Página de oficinas (**oficinas.php**) | Usuario hace click en OFICINAS | Carga la página de oficinas (oficinas.php) |
| Página de oficinas (**oficinas.php**) | Usuario hace click en CONTACTO | Carga la página de contacto (contacto.php) |
| Página Oficinas (**oficinas.php**) *En la base de datos hay un registro de una ciudad con nombre: **Madrid**, direccion postal: **28018**, horario: **9:00 a 17:00** y un mapa*| Usuario selecciona una ciudad dada en el desplegable y hace click en **ver oficina** | Se muestra los apartados de nombre: **Madrid**, dirección postal: **28018**, horario: **9:00 a 17:00** y mapa |
| Página Oficinas (**oficinas.php**) | El usuario, sin seleccionar una ciudad y con la opcion por defecto, hace click en **ver oficina** | Vuelve a cargar la página de oficinas (oficinas.php) |
| Página Oficinas (**oficinas.php**) *No existe nongún registro en la base de datos con el nombre **awdawdds***| El usuario, inspeccionando el código de la página cambia el valor de cualquiera de las opciones por **awdawdds** que no está en la base de datos | Muestra los apartados pero con el mensaje de que **no** se ha encontrado la información de **awdawdds** y el mapa **NO** aparece |
| Página de contacto (**contacto.php**) | Usuario hace click en el logo RodriBank | Carga la página de inicio (indexBanco.php) |
| Página de contacto (**contacto.php**) | Usuario hace click en INICIO | Carga la página de inicio (indexBanco.php) |
| Página de contacto (**contacto.php**) | Usuario hace click en SERVICIOS | Carga la página de servicios (servicios.php) |
| Página de contacto (**contacto.php**) | Usuario hace click en OFICINAS | Carga la página de oficinas (oficinas.php) |
| Página de contacto (**contacto.php**) | Usuario hace click en CONTACTO | Carga la página de contacto (contacto.php) |
| Página Contacto (**contacto.php**) | El usuario rellena todos los campos correctamente y hace click en el botón enviar | Carga la página **mail.php** con el mensaje de confirmación: **Gracias por contactarnos, *'Nombre que haya puesto el usuario'*. Hemos enviado un correo de confirmación** |
| Página Contacto (**contacto.php**) | El usuario no rellena todos los campos y hace click en el botón enviar | Muestra un mensaje de error indicando que faltan campos por rellenar y hasta que no rellene todos los campos correctamente no envía nada |
| Página de confirmación de mail (**mail.php**) | Usuario hace click en el logo RodriBank | Carga la página de inicio (indexBanco.php) |
| Página de confirmación de mail (**mail.php**) | Usuario hace click en INICIO | Carga la página de inicio (indexBanco.php) |
| Página de confirmación de mail (**mail.php**) | Usuario hace click en SERVICIOS | Carga la página de servicios (servicios.php) |
| Página de confirmación de mail (**mail.php**) | Usuario hace click en OFICINAS | Carga la página de oficinas (oficinas.php) |
| Página de confirmación de mail (**mail.php**) | Usuario hace click en CONTACTO | Carga la página de contacto (contacto.php) |
