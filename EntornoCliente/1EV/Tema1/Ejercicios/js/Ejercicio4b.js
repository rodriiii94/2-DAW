function cuadradoNumero(numero) {
    return Math.pow(numero, 2);
}

function raizCuadrada(numero) {
    return Math.sqrt(numero);
}

function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

let numero = parseInt(prompt("Introduce un número:"));

if (isNaN(numero)) {
    console.log("Por favor, introduce un número válido.");
} else {
    document.write(`El cuadrado de ${numero} es: ${cuadradoNumero(numero)} <br>`);
    document.write(`La raíz cuadrada de ${numero} es: ${raizCuadrada(numero)}<br>`);
    document.write(`El factorial de ${numero} es: ${factorial(numero)}<br>`);
}
