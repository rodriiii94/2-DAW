# Práctica 14 - "Sanitizando"

### Mediante información obtenida en Internet, etc.; realizad las tareas y contestad las preguntas que se plantean.

1. **Sanitizad la aplicación WEB de la práctica 12 utilizando consultas parametrizadas.**

- *Consulta parametrizada Validar*

![alt text](<Screenshot from 2024-11-14 17-06-00.png>)

- *Consulta parametrizada Oficinas*

![alt text](<Screenshot from 2024-11-14 17-08-20.png>)
![alt text](<Screenshot from 2024-11-14 17-09-23.png>)

2. **Comprobad el resultado de la sanitización con SQLmap.**

- *Ataque Validar*
![alt text](<Captura desde 2024-11-16 21-27-26.png>)

3. **En cuanto al despliegue de la base de datos se recomienda que pertenezca a un usuario que tenga acceso sólo a dicha base de datos.**

- *Creación de usuario*

```sql
CREATE USER 'areaClientes'@'localhost' IDENTIFIED BY 'areaClientes1234';
```

![alt text](<Captura desde 2024-11-16 21-39-44.png>)

- *Concesión de permisos*

```sql
GRANT SELECT ON BANCO.Usuario TO 'areaClientes'@'localhost';
GRANT SELECT ON BANCO.Cuentas TO 'areaClientes'@'localhost';
```

![alt text](<Captura desde 2024-11-16 21-48-45.png>)

- *Conexión con el usuario creado*

![alt text](<Captura desde 2024-11-16 21-52-06.png>)
