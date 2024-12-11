/*function cambiarColorCaja() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  const caja = document.getElementById("cajaPrincipal");

  // Normalizar el valor de celsius entre -30 y 50 grados
  const minTemp = -30;
  const maxTemp = 50;
  const normalizedTemp = (celsius - minTemp) / (maxTemp - minTemp);

  // Calcular los valores de rojo y azul
  const red = Math.min(255, Math.max(0, Math.round(255 * normalizedTemp)));
  const blue = Math.min(255, Math.max(0, Math.round(255 * (1 - normalizedTemp))));

  // Aplicar los colores al fondo y al borde
  caja.style.backgroundColor = `rgb(${red}, 0, ${blue})`;
  caja.style.borderColor = `rgb(${red}, 0, ${blue})`;
}*/

function convertirCelsius() {
  const farenheit = document.getElementById("farenheit").value;

  let celsius = (farenheit - 32) / 1.8;

  document.getElementById("celsius").value = celsius.toFixed(2);

  cambiarColorCaja();
}

function convertirFarenheit() {
  const celsius = document.getElementById("celsius").value;

  let farenheit = celsius * 1.8 + 32;

  document.getElementById("farenheit").value = farenheit.toFixed(2);

  cambiarColorCaja();
}



