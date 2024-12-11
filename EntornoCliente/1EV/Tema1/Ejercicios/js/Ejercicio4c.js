function cuadrado() {
    let num = numero.value;
    return num * num;
}

function raiz() {
    let num = numero.value;
    return Math.sqrt(num);
}

function factorial() {
    let num = numero.value;
    let resultado = 1;

    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

function sumar() {
    let a = numeroA.value;
    let b = numeroB.value;
    document.getElementById("respuesta").value = parseInt(a) + parseInt(b);
}

function restar() {
    let a = numeroA.value;
    let b = numeroB.value;
    document.getElementById("respuesta").value =  parseInt(a) - parseInt(b);
}

function multiplicar() {
    let a = numeroA.value;
    let b = numeroB.value;
    document.getElementById("respuesta").value = parseInt(a) * parseInt(b);
}	

function dividir() {
    let a = numeroA.value;
    let b = numeroB.value;
    document.getElementById("respuesta").value = parseInt(a) / parseInt(b);
}