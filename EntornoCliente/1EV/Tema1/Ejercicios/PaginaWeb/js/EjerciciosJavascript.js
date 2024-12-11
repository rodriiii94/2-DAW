function cuadrado() {
  const salida = document.getElementById("resultadoCuadrado");
  var alto = parseInt(document.getElementById("altoCuadrado").value);
  var ancho = parseInt(document.getElementById("anchoCuadrado").value);

  salida.innerHTML = "";

  for (let i = 0; i < alto; i++) {
    for (let j = 0; j < ancho; j++) {
      if (i === 0 || i === alto - 1 || j === 0 || j === ancho - 1) {
        salida.innerHTML += "*";
      } else {
        if (j === ancho - 1) {
          salida.innerHTML += "*";
        } else {
          salida.innerHTML += "&nbsp;";
        }
      }
    }
    salida.innerHTML += "<br>";
  }
}

function diamante() {
  const salida = document.getElementById("resultadoDiamante");
  var alto = parseInt(document.getElementById("altoDiamante").value);

  salida.innerHTML = "";

  const mitad = Math.ceil(alto / 2);

  // Parte superior del rombo
  for (let i = 1; i <= mitad; i++) {
    for (let j = 0; j < mitad - i; j++) {
      salida.innerHTML += "&nbsp;";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      salida.innerHTML += "*";
    }
    salida.innerHTML += "<br>";
  }

  // Parte inferior del rombok
  for (let i = mitad - 1; i >= 1; i--) {
    for (let j = 0; j < mitad - i; j++) {
      salida.innerHTML += "&nbsp;";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      salida.innerHTML += "*";
    }
    salida.innerHTML += "<br>";
  }
}

function colores() {
  let colores = ["Azul", "Amarillo", "Rosa", "Verde", "Negro", "Rojo", "Blanco"];
  let color = document.getElementById("color");

  const salida = document.getElementById("salida");

  salida.innerHTML = "";

  if (colores.includes(color.value)) {
    salida.innerHTML = "Ese color SI está en el array";
  } else {
    salida.innerHTML = "Ese color NO está en el array";
  }

}

function fuente() {
  const salida = document.getElementById("salidaFuente");
  const fontFamily = document.getElementById("fuente").value;
  salida.style.fontFamily = fontFamily;
}

function video() {
  const alto = document.getElementById("alto").value;
  const ancho = document.getElementById("ancho").value;
  const video = document.getElementById("video");

  video.style.width = ancho + "%";
  video.style.height = alto + "%";
}
