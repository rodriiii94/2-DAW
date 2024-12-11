const libra = 0.86;
const dolar = 1.21;
const yen = 129.85;

//! Funciones únicas para cada moneda
function convertirLibra() {
    let euros = document.getElementById("cantidad").value;

    document.getElementById("respuesta").value = euros * libra;
    document.getElementById('bandera').src = 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg';
    document.getElementById('bandera').style.width = '50px';
}

function convertirDolar() {
    let euros = document.getElementById("cantidad").value;

    document.getElementById("respuesta").value = euros * dolar;
    document.getElementById('bandera').src = 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg';
    document.getElementById('bandera').style.width = '50px';
}

function convertirYen() {
    let euros = document.getElementById("cantidad").value;

    document.getElementById("respuesta").value = euros * yen;
    document.getElementById('bandera').src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png';
    document.getElementById('bandera').style.width = '50px';
}

//! Función general para todas las monedas 
//*(Pasa por parámetro la moneda a convertir)

function convertir(moneda) {
    let euros = document.getElementById("cantidad").value;
    let valorCambio = 0;
    let bandera = '';

    switch (moneda) {
        case 'libra':
            valorCambio = euros * libra;
            bandera = 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg';
            break;
        case 'dolar':
            valorCambio = euros * dolar;
            bandera = 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg';
            break;
        case 'yen':
            valorCambio = euros * yen;
            bandera = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/2560px-Flag_of_Japan.svg.png';
            break;
    
        default:
            break;
    }

    document.getElementById("respuesta").value = valorCambio;
    document.getElementById('bandera').src = bandera;
    document.getElementById('bandera').style.width = '50px';
}
