document.addEventListener('DOMContentLoaded', (event) => {
    let contador = localStorage.getItem('contador');
    if (contador === null) {
        contador = 0;
    } else {
        contador = parseInt(contador) + 1;
    }
    localStorage.setItem('contador', contador);
    document.getElementById('contador').innerHTML = contador;
});

function resetContador() {
    localStorage.setItem('contador', 0);
    document.getElementById('contador').innerHTML = 0;
}