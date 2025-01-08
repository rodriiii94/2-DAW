function cambiarEstiloPrecios() {
    const precios = document.querySelectorAll('.price');
    const colores = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00'];
    const fondos = ['#ffe6e6', '#e6ffe6', '#e6e6ff', '#ffe6ff', '#ffffcc'];
    
    precios.forEach((precio, index) => {
        precio.style.color = colores[index % colores.length];
        precio.style.backgroundColor = fondos[index % fondos.length];
        precio.style.padding = '5px';
        precio.style.borderRadius = '3px';
    });
}

