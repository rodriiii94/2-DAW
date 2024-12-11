let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function factorialRecursivo(numero) {
    if (numero === 0) {
        return 1;
    } else {
        return numero * factorialRecursivo(numero - 1);
    }  
}

let factorial = numeros.map(function (numero) {
    return factorialRecursivo(numero);
});

for (let i = 0; i < factorial.length; i++) {
    document.write(numeros[i] + " => " + factorial[i] + "<br>");
}
