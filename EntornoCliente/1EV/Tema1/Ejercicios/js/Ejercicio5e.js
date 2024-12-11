function contarLetras() {
    let texto = document.getElementById("texto").value;
    let letra = document.getElementById("letra").value;

    let contador = 0;

    // for (let i = 0; i < texto.length; i++) {
    //     if (texto[i] == letra) {
    //         contador++;
    //     }
    // }

    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) == letra) {
            contador++;
        }
    }

    if (contador == 0) {
        alert("La letra '" + letra + "' no se encuentra en el texto.");
    } else {
        alert("La letra '" + letra + "' se encuentra " + contador + " veces en el texto.");
    }
}