// conectarse a la base de datos

// Importar el módulo mysql
//* npm install mysql

const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'world'
});

conexion.connect((error) => {
    if (error) {
        console.error('El error de conexión es: ' + error);
        return;
    }
    console.log('Conectado a la base de datos');
});

// Consulta a la base de datos
// conexion.query('SELECT * FROM city', (error, filas) => {
//     if (error) {
//         console.error('El error de consulta es: ' + error);
//         return;
//     }
//     console.log('Las ciudades son: ', filas);
// });

// Insertar datos en la base de datos
const queryInsert = 'INSERT INTO city (ID, Name, countryCode, District, Population) VALUES (4080, "Parla", "ESP", "Centro", 130000)';

// conexion.query(queryInsert, (error) => {
//     if (error) {
//         console.error('El error de inserción es: ' + error);
//         return;
//     }
//     console.log('Inserción exitosa');
// });

// Actualizar datos en la base de datos
const queryUpdate = 'UPDATE city SET Population = 140000 WHERE ID = 4080';

conexion.query(queryUpdate, (error) => {
    if (error) {
        console.error('El error de actualización es: ' + error);
        return;
    }
    console.log('Actualización exitosa');
});


conexion.end();

        