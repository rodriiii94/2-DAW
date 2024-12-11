const tablero = document.getElementById("tablero");
const celdas = document.querySelectorAll(".celda");
const estado = document.getElementById("estado");
const resetBtn = document.getElementById("resetBtn");
const btnUnJugador = document.getElementById("btnUnJugador");
const btnDosJugadores = document.getElementById("btnDosJugadores");

let jugadorActivo = "X";
let juegoActivo = false;
let estadoJuego = ["", "", "", "", "", "", "", "", ""];
let contraIA = false;

/**
 * Array de condiciones ganadoras para el juego de Tres en Raya.
 * Cada sub-array contiene los índices de las posiciones en el tablero
 * que forman una línea ganadora.
 *
 * @type {number[][]}
 */
const condicionesGanadoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/**
 * Inicia el juego de Tres en Raya.
 *
 * @param {boolean} vsIA - Indica si el juego es contra la IA (true) o contra otro jugador (false).
 */
function empezarJuego(vsIA) {
  juegoActivo = true;
  contraIA = vsIA;
  estadoJuego = ["", "", "", "", "", "", "", "", ""];
  jugadorActivo = "X";
  celdas.forEach((celda) => {
    celda.textContent = "";
    celda.style.backgroundColor = "#ddd";
  });
  setestado(`Turno del Jugador ${jugadorActivo}`);
}

/**
 * Maneja el evento de clic en una celda del juego Tres en Raya.
 *
 * @param {Event} celdaClickadaEvent - El evento de clic en la celda.
 * @returns {void}
 *
 * @description
 * Esta función se ejecuta cuando se hace clic en una celda del juego.
 * Actualiza el estado del juego y la interfaz de usuario según el jugador activo.
 * Si el juego está activo y es el turno de la IA, realiza un movimiento de la IA después de un breve retraso.
 */
function handleceldaClick(celdaClickadaEvent) {
  const celdaClickada = celdaClickadaEvent.target;
  const celdaClickadaIndex = parseInt(celdaClickada.getAttribute("data-index"));

  if (estadoJuego[celdaClickadaIndex] !== "" || !juegoActivo) return;

  estadoJuego[celdaClickadaIndex] = jugadorActivo;
  celdaClickada.textContent = jugadorActivo;
  celdaClickada.style.backgroundColor =
    jugadorActivo === "X" ? "#ff9999" : "#99ff99";

  comprobarResultado();

  if (juegoActivo && contraIA && jugadorActivo === "O") {
    setTimeout(movimientoIA, 500);
  }
}

/**
 * Realiza el movimiento de la IA en el juego de Tres en Raya.
 * La función evalúa todas las posibles jugadas y selecciona la mejor
 * utilizando el algoritmo minimax.
 *
 * @function
 */
function movimientoIA() {
  let mejorPunt = -Infinity;
  let mejorMovimiento;

  for (let i = 0; i < 9; i++) {
    if (estadoJuego[i] === "") {
      estadoJuego[i] = "O";
      let puntuacion = minimax(estadoJuego, 0, false);
      estadoJuego[i] = "";
      if (puntuacion > mejorPunt) {
        mejorPunt = puntuacion;
        mejorMovimiento = i;
      }
    }
  }

  estadoJuego[mejorMovimiento] = "O";
  celdas[mejorMovimiento].textContent = "O";
  celdas[mejorMovimiento].style.backgroundColor = "#99ff99";
  comprobarResultado();
}

/**
 * Función que implementa el algoritmo Minimax para el juego de Tres en Raya.
 * Evalúa todas las posibles jugadas y devuelve la puntuación de la mejor jugada posible.
 *
 * @param {Array} board - El estado actual del tablero como un array de 9 elementos.
 * @param {number} depth - La profundidad actual del árbol de decisiones.
 * @param {boolean} isMaximizing - Indica si el jugador actual es el que maximiza (true) o minimiza (false) la puntuación.
 * @returns {number} La puntuación de la mejor jugada posible.
 */
function minimax(board, depth, isMaximizing) {
  let result = comprobarGanador();
  if (result !== null) {
    return result === "X" ? -1 : result === "O" ? 1 : 0;
  }

  if (isMaximizing) {
    let mejorPunt = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === "") {
        board[i] = "O";
        let puntuacion = minimax(board, depth + 1, false);
        board[i] = "";
        mejorPunt = Math.max(puntuacion, mejorPunt);
      }
    }
    return mejorPunt;
  } else {
    let mejorPunt = Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === "") {
        board[i] = "X";
        let puntuacion = minimax(board, depth + 1, true);
        board[i] = "";
        mejorPunt = Math.min(puntuacion, mejorPunt);
      }
    }
    return mejorPunt;
  }
}

/**
 * Comprueba el resultado del juego para determinar si hay un ganador, un empate o si el juego debe continuar.
 *
 * Revisa las condiciones ganadoras para ver si algún jugador ha ganado la ronda.
 * Si hay un ganador, actualiza el estado del juego y lo detiene.
 * Si no hay ganador, verifica si hay un empate.
 * Si hay un empate, actualiza el estado del juego y lo detiene.
 * Si no hay ganador ni empate, cambia el turno al siguiente jugador y actualiza el estado del juego.
 */
function comprobarResultado() {
  let rondaGanada = false;
  for (let i = 0; i < condicionesGanadoras.length; i++) {
    const [a, b, c] = condicionesGanadoras[i];
    if (
      estadoJuego[a] &&
      estadoJuego[a] === estadoJuego[b] &&
      estadoJuego[a] === estadoJuego[c]
    ) {
      rondaGanada = true;
      break;
    }
  }

  if (rondaGanada) {
    setestado(`¡El Jugador ${jugadorActivo} ha ganado!`);
    juegoActivo = false;
    return;
  }

  let rondaEmpatada = !estadoJuego.includes("");
  if (rondaEmpatada) {
    setestado("¡Empate!");
    juegoActivo = false;
    return;
  }

  jugadorActivo = jugadorActivo === "X" ? "O" : "X";
  setestado(`Turno del Jugador ${jugadorActivo}`);
}

/**
 * Comprueba si hay un ganador en el juego de Tres en Raya.
 *
 * Recorre todas las posibles combinaciones ganadoras y verifica si alguna de ellas
 * está completa con el mismo símbolo (X o O). Si encuentra una combinación ganadora,
 * devuelve el símbolo del ganador. Si no hay combinaciones ganadoras y el tablero
 * está lleno, devuelve 'empate'. Si no hay ganador y el tablero no está lleno,
 * devuelve null.
 *
 * @returns {string|null} El símbolo del ganador ('X' o 'O'), 'empate' si no hay más
 * movimientos posibles y no hay ganador, o null si el juego aún no ha terminado.
 */
function comprobarGanador() {
  for (let i = 0; i < condicionesGanadoras.length; i++) {
    const [a, b, c] = condicionesGanadoras[i];
    if (
      estadoJuego[a] &&
      estadoJuego[a] === estadoJuego[b] &&
      estadoJuego[a] === estadoJuego[c]
    ) {
      return estadoJuego[a];
    }
  }
  if (!estadoJuego.includes("")) return "empate";
  return null;
}

/**
 * Establece el mensaje de estado en el elemento correspondiente.
 *
 * @param {string} mensaje - El mensaje que se mostrará en el estado.
 */
function setestado(mensaje) {
  estado.textContent = mensaje;
}

/**
 * Restablece el estado del juego a su configuración inicial.
 * Desactiva el juego, actualiza el estado del texto y limpia las celdas del tablero.
 * También desmarca todas las opciones de radio.
 */
function resetJuego() {
  juegoActivo = false;
  estado.textContent = "Selecciona un modo de juego";
  celdas.forEach((celda) => {
    celda.textContent = "";
    celda.style.backgroundColor = "#ddd";
  });

  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.checked = false;
  });
}

celdas.forEach((celda) => celda.addEventListener("click", handleceldaClick));
resetBtn.addEventListener("click", resetJuego);
btnUnJugador.addEventListener("click", () => empezarJuego(true));
btnDosJugadores.addEventListener("click", () => empezarJuego(false));

resetJuego();
