# Práctica 3 - Servicio de asignación dinámica de direcciones

1. **Para que ciertos servicios de red e Internet  puedan funcionar es aconsejable que existan otros servicios complementarios que aporten ciertas funciones. ¿En qué consiste el servicio de asignación dinámica de direcciones?**

El servicio de asignación dinámica de direcciones (DHCP) permite que los dispositivos en una red obtengan automáticamente una dirección IP y otros parámetros de configuración, como puerta de enlace y servidores DNS, sin necesidad de configurarlos manualmente. Esto facilita la administración de redes y evita conflictos de IP.

2. **¿El servicio de asignación dinámica de direcciones es imprescindible para el funcionamiento de una red de ordenadores?**

El modelo de arquitectura del servicio de asignación dinámica de direcciones (DHCP) sigue una arquitectura **cliente-servidor**, donde un servidor DHCP asigna dinámicamente direcciones IP y otros parámetros de configuración a los dispositivos cliente en la red, que solicitan estos recursos cuando se conectan.

3. **¿Cuál es el modelo de arquitectura del servicio de asignación dinámica de direcciones?**

El modelo de arquitectura del servicio de asignación dinámica de direcciones (DHCP) es **cliente-servidor**, donde el servidor DHCP administra y asigna direcciones IP automáticamente a los clientes en la red que las solicitan.

4. **¿Qué ventajas presenta el uso del servicio de asignación dinámica de direcciones?**

Las ventajas del DHCP son: **configuración automática**, **prevención de conflictos de IP**, **escalabilidad**, **uso eficiente de direcciones IP** y **flexibilidad** para dispositivos en la red.

5. **¿Qué desventajas presenta?**

Las desventajas del DHCP son: **dependencia del servidor** (si falla, no se asignan IPs), **menor control sobre direcciones IP fijas**, y **vulnerabilidad a ataques** como el DHCP spoofing.

6. **¿Cómo funciona el protocolo DHCP?**

El protocolo DHCP funciona en cuatro pasos clave:

1. **Discover**: El cliente envía una solicitud de IP al servidor DHCP.
2. **Offer**: El servidor responde ofreciendo una dirección IP y otros parámetros de red.
3. **Request**: El cliente acepta la oferta y solicita la dirección IP ofrecida.
4. **Acknowledge**: El servidor confirma la asignación de la IP, y el cliente puede usarla en la red.

Este proceso automatiza la configuración de red para los dispositivos conectados.

7. **Simulad, mediante Packet Tracer un escenario con un router WiFi y cuatro portátiles. Entrad en la configuración del router WiFi y cambiad el rango de direcciones asignadas dinámicamente por el servidor DHCP, de manera que se asignen sólo cuatro. Añadid un nuevo portátil al escenario e interpretad los resultados.**

8. **En una red local clase C se quieren instalar ciertos servicios alojados en servidores. Se dispone de un total de 17 servidores. Por otro lado se quiere dar servicio a hasta 300 clientes, sabiéndose que nunca coinciden más de 210 encendidos a la vez. Además se tiene un router proporcionado por un ISP. Explica qué soluciones adoptarías para configurar esta red.**

Para configurar esta red, se pueden seguir varias soluciones:
    - Asignar direcciones IP estáticas a los servidores y a los clientes, para asegurar que siempre tengan la misma dirección.
