# Práctica 11 - Filezilla Server

## Cread un documento que explique el proceso seguido en esta práctica y contestad las cuestiones que se plantean. Los pasos que tenéis que realizar son los siguientes

1. **Instalad un servidor FTP en una máquina Windows. Se recomienda Filezilla Server.**
1. **Configuradlo de acuerdo con los siguientes patrones sugeridos para un sitio FTP de descargas:**

- **Poned una contraseña de administración.**
![alt text](image.png)
- **Estableced el mensaje de bienvenida.**
![alt text](image-1.png)
- **Cread en vuestro disco duro un directorio llamado ftp.**
![alt text](image-2.png)
- **Cread un usuario anonymous y dadle permiso de lectura (Read) y de listar (List) los ficheros del directorio ftp.**
![alt text](image-3.png)
- **Cread un directorio dentro del directorio ftp llamado upload. Para el usuario anonymous dad permiso de escritura (Write) y de creación de directorios (Create) sobre dicho directorio. De esta forma, si un usuario anónimo te quiere dejar algo, lo podrá hacer, pero en esa carpeta. Al no tener permiso de borrado (Delete), no podrá borrar nada, sólo dejar cosas.**
![alt text](<Screenshot from 2024-11-05 18-48-43.png>)
- **Limitad la velocidad al usuario anonymous. Para poder dar servicio a un número previsto de clientes a la vez hay que tener en cuenta la velocidad de la conexión al proveedor de Internet. ¿Qué velocidad nos resulta más crítica?**
![alt text](image-5.png)
- **Cread un grupo de usuarios llamado cursoinem y conceded los permisos que creais convenientes.**
![alt text](image-6.png)
- **Cread usuarios concretos para el grupo cursoinem.**
![alt text](image-7.png)
![alt text](image-8.png)
- **Filtrar el acceso por direcciones IP. Tened en cuenta que el filtrado se puede hacer total para una IP o para el par IP-usuario.**
![alt text](image-9.png)
  