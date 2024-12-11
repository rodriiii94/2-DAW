var array = new Array(10);

function mostrar(array) {
    document.getElementById("original").value = array.join("-");
}

function mostrarNuevo(array) {
    document.getElementById("nuevo").value = array.join("-");
}

function aleatorio() {

    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 16);
    }

    mostrar(array);
}

function invertir() {
    array.reverse();
    mostrar(array);
}

function eliminar() {
    let valor = document.getElementById("valor").value;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == parseInt(valor)) {
            array.splice(i, 1);
            i--;
        }
    }

    mostrarNuevo(array);
}

function mayor() {
    let mayor = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }

    document.getElementById("mayor").value = mayor;
}

function menor() {
    let menor = 16;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
    }

    document.getElementById("menor").value = menor;
}

function hexadecimal() {
    let hexadecimal = new Array(array.length);

    for (let i = 0; i < array.length; i++) {
        hexadecimal[i] = array[i].toString(16).toUpperCase();
    }

    document.getElementById("hexadecimal").value = hexadecimal.join("-");
}

