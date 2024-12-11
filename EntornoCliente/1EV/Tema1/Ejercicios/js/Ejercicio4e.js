const pie = 0.328084;

function convertir() {
    let cm = document.getElementById("cantidad").value;

    document.getElementById("respuesta").value = cm * pie;
}