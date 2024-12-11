document.addEventListener('mousemove', function(event) {
    muestraInformacion(event);
});

function muestraInformacion(event) {
    const infoDiv = document.getElementById('info');
    const navegadorX = event.clientX;
    const navegadorY = event.clientY;
    const paginaX = event.screenX;
    const paginaY = event.screenY;

    infoDiv.innerHTML = `
        <p>Posición respecto del navegador: (${navegadorX}, ${navegadorY})</p>
        <p>Posición respecto de la página: (${paginaX}, ${paginaY})</p>
    `;
}