# Práctica 7 - WEB de un banco

## Realizad una aplicación WEB comercial con las siguientes características

1. **Todo el sitio WEB estará compuesto por páginas que tengan una estructura y estilo similar. No se piden virguerías en HTML, se pide legibilidad y unicidad estilística.**
2. **Deberá haber al menos las siguientes secciones: Inicio, Servicios, Oficinas y Contacto.**

![alt text](image.png)

3. **Desde cualquier sección se debe poder acceder a cualquier otra. Para ello es necesario que haya un menú siempre accesible. Se propone como modelo fredu.lovestoblog.com.**
4. **Una sección donde se va a utilizar lo aprendido en PHP será la sección "Oficinas". Al acceder a esta sección deberá aparecer un formulario que permita seleccionar una de las ciudades previamente guardadas en base de datos. No habrá ninguna ciudad seleccionada como opción por omisión. Seleccionada una ciudad se debe mostrar la dirección postal de la misma, el horario de dicha sede y un mapa interactivo de Google Maps de la zona. Si no se seleccionara ciudad alguna se debe mostrar la página de "Oficinas".**
5. **Otra sección con PHP será la sección "Contacto", con un formulario de contacto. Dicho formulario de contacto debe solicitar los siguientes datos: nombre completo, email, teléfono, asunto y mensaje. Todos los campos son requeridos. Al enviar los datos del formulario se debe mostrar una página de confirmación informando del envío de un email de confirmación, y se deben enviar dos emails, uno de confirmación al usuario y otro con la petición de contacto al administrador. El email de confirmación al usuario procederá de "no_reply@miweb.es", se podrá responder a "no_reply@miweb.es", tendrá como asunto "Hemos recibido tu mensaje con asunto: asunto_introducido" y como cuerpo del mensaje "Detalles del formulario de contacto: ...". El email al administrador procederá de el email del solicitante de contacto, se podrá responder a dicho solicitante, tendrá como asunto el asunto introducido por el solicitante y como cuerpo del mensaje el mensaje introducido por el solicitante.**
