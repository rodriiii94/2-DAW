function mostrarFechaHora() {
    const ahora = new Date();
    const opciones = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    const fechaHoraFormateada = ahora.toLocaleDateString('es-ES', opciones);
    document.getElementById('fechaHora').textContent = fechaHoraFormateada;
}

