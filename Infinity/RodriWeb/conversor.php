<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversor de monedas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 15px; /* Espacio entre los elementos del formulario */
        }

        label {
            color: #333;
        }

        .radio-group {
            display: flex;
            align-items: center;
            gap: 10px; /* Espacio entre radio y texto */
        }

        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin: 0 auto;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box; /* Asegura que el padding no afecte el ancho total */
        }

        input[type="submit"] {
            background-color: #3498db;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }

        input[type="submit"]:hover {
            background-color: #3498db;
        }

        .error {
            color: red;
            font-size: 14px;
        }

        .result {
            font-size: 16px;
            color: #333;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Conversor de monedas</h1>
        <form action="" method="post">
            <div class="radio-group">
                <input type="radio" name="moneda" value="pesetas" id="pesetas" />
                <label for="pesetas">Pesetas a euros</label>
            </div>
            <div class="radio-group">
                <input type="radio" name="moneda" value="euros" id="euros" />
                <label for="euros">Euros a pesetas</label>
            </div>
            <label for="cantidad">Cantidad:</label>
            <input type="text" name="cantidad" id="cantidad" placeholder="Introduce la cantidad" />
            <input type="submit" value="Convertir" />
        </form>

        <?php if ($_SERVER['REQUEST_METHOD'] == 'POST'): ?>
            <?php if (empty($_POST['moneda']) || empty($_POST['cantidad'])): ?>
                <p class="error">Por favor, seleccione una moneda e introduzca una cantidad.</p>
            <?php elseif (!is_numeric($_POST['cantidad']) || $_POST['cantidad'] < 0): ?>
                <p class="error">Por favor, introduzca una cantidad válida y positiva.</p>
            <?php else: ?>
                <div class="result">
                    <?php if ($_POST['moneda'] == 'pesetas'): ?>
                        <p><?php echo htmlspecialchars($_POST['cantidad']) ?> pesetas son <?php echo number_format($_POST['cantidad'] / 166.386, 2) ?> euros</p>
                    <?php else: ?>
                        <p><?php echo htmlspecialchars($_POST['cantidad']) ?> euros son <?php echo number_format($_POST['cantidad'] * 166.386, 2) ?> pesetas</p>
                    <?php endif ?>
                </div>
            <?php endif ?>
        <?php endif ?>
    </div>

</body>
</html>
