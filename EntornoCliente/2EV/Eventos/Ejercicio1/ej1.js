document.addEventListener('mousemove', function(event) {
    muestraInformacion(event);
});

document.addEventListener('keydown', function(event) {
    muestraInfoKey(event);
});

document.addEventListener('click', function(event) {
    cambioColorRaton(event);
});

function muestraInformacion(event) {
    const infoDiv = document.getElementById('infoCur');
    const navegadorX = event.clientX;
    const navegadorY = event.clientY;
    const paginaX = event.screenX;
    const paginaY = event.screenY;

    infoDiv.innerHTML = `
        <p>Posición respecto del navegador: (${navegadorX}, ${navegadorY})</p>
        <p>Posición respecto de la página: (${paginaX}, ${paginaY})</p>
    `;
}

function cambioColorRaton(event) {
    const infoDiv = document.getElementById('infoCur');
    infoDiv.style.backgroundColor = '#FFFFCC';
}

function muestraInfoKey(event) {
    const infoDiv = document.getElementById('infoKey');
    const tecla = event.key;
    const codigo = event.keyCode;
    const char = event.charCode;
    const evento = event.type;

    infoDiv.innerHTML = `
        <p>Tecla: ${tecla}</p>
        <p>Código: ${codigo}</p>
        <p>Char: ${char}</p>
        <p>Evento: ${evento}</p>
    `;

    infoDiv.style.backgroundColor = '#CCE6FF';
}