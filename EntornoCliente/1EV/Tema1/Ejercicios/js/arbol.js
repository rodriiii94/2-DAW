let niveles = parseInt(
  prompt("Introduce el número de niveles del árbol de Navidad:")
);

// Validar que la entrada sea un número válido
if (isNaN(niveles) || niveles <= 0) {
  console.log(
    "Por favor, introduce un número entero positivo para los niveles."
  );
} else {
  // Imprimir el árbol de Navidad en la consola
  for (let i = 1; i <= niveles; i++) {
    let espacio = " ".repeat(niveles - i); // Espacios para alinear el árbol
    let estrellas = "*".repeat(i * 2 - 1); // Imprimir la cantidad de estrellas correspondiente al nivel
    console.log(espacio + estrellas);
  }
  // Añadir el tronco del árbol
  let troncoEspacio = " ".repeat(niveles - 1);
  console.log(troncoEspacio + "|");
}
