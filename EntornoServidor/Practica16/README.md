# Práctica 17 - MVC y URLs

## La organización de los ficheros en el MVC es la siguiente

1. Para conectar a BDD usar la librería PDO en lugar de mysqli. Ver dudas sobre setAttribute en [http://php.net/manual/es/pdo.connections.php](http://php.net/manual/es/pdo.connections.php).

```php
<?php
    class Conexion {
        public static function conexion() {
            $conexion = new PDO("mysql:host=localhost;dbname=MUEBLES", "root", "root");
            $conexion->query("SET NAMES 'utf8'");
            return $conexion;
        }
    }
```

2. Utilizar __construct para crear el constructor de las clases.

```php
    public function __construct() {
        require_once("model/Conexion.php");
        $this->db = Conexion::conexion();
        $this->muebles = [];
    }
```

3. Los métodos del interfaz de una clase se declaran con public function.

```php
        public function getPiezas(){
        try {
            $consulta = $this->db->prepare("SELECT nombre FROM Pieza");
            $consulta->execute();
            $this->piezas = $consulta->fetchAll(PDO::FETCH_ASSOC);
            $consulta->closeCursor();
            return $this->piezas;

        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            $this->piezas = [];
            
        } finally {
            $this->db = null;
        }
    }
```

4. Los atributos de las clases deberían ser privados por lo que habría que crear los correspondientes "geters" y/o "seters".

```php
    public function getMuebles(){
        return $this->muebles;
    }
```

5. Para incluir PHPs utilizar require_once. ¿En que se diferencia de include?

Se diferencia en que require_once se asegura de que el archivo no se incluya más de una vez. Si se incluye el mismo archivo más de una vez, se producirá un error de nivel E_COMPILE_ERROR. Esto puede ser útil si tiene una función o una clase que depende de un archivo que puede haber sido incluido anteriormente.

6. Para utilizar un método estático del interfaz de una clase utilizar el operador ::.

## Se pide hacer la WEB de la práctica 12 utilizando el Modelo Vista Controlador, programación orientada a objetos y URLs amigables. Para ello pueden servir de guía los siguientes puntos

1. Todos los enlaces apuntan a index.php?x=&y= o ?x=&y=.

```php
    <a href="/index.php?controlador=Pieza&accion=listado">Disponibilidad de piezas</a>
```

2. Entre los parámetros a enviar hay que indicar el controlador.
3. El index ha de tener un controlador por omisión.

```php
    $controlador = "Principal";
    $accion = "principal";
```

4. Entre los parámetros se podría enviar una acción, concepto asociado al método que se ejecuta en el modelo.

```php
    $accion = $_GET["accion"];
```

