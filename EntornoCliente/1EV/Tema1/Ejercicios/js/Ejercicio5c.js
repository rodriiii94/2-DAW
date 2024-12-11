function ponerAnyo() {
    var cajaAnyo = document.getElementById('anyo');
    cajaAnyo.value = new Date().getFullYear();
}
function mostrarDias() {
    const mes = document.getElementById('mes').value;
    const anyo = parseInt(document.getElementById('anyo').value);

    const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    const diasMeses = [31, (anyo % 4 === 0 && (anyo % 100 !== 0 || anyo % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    const index = nombresMeses.indexOf(mes);

    if (index !== -1) {
        alert(`El mes de ${mes} del año t${anyo} tiene ${diasMeses[index]} días.`);
    } else {
        alert("Mes incorrecto");
    }
}
