window.onload = init;
function init(){
    botonEnvio = document.getElementById("boton")
    nuevoItem = document.getElementById("item");
    nuevoPrecio = document.getElementById("precio");    
    tablaCompra = document.getElementById("listaCompra");
    botonEnvio.addEventListener("click",anadir);
    document.getElementById("resetear").addEventListener("click",resetear);
    rellenarContenido();
}

function anadir(e){
    evento = e || e.target.value;
    if (nuevoItem.value == "" || nuevoPrecio.value == ""){
        evento.preventDefault();
    }else{
        console.log("Añadido");
        var fila = document.createElement("tr");
        var celdaItem = document.createElement("td");
        var celdaPrecio = document.createElement("td");
        var celdaCantidad = document.createElement("td");
        var inputCantidad = document.createElement("input");
        inputCantidad.type = "number";
        inputCantidad.value = 1;
        inputCantidad.min = 1;
        inputCantidad.addEventListener("change", actualizarPrecio);

        celdaItem.innerHTML = nuevoItem.value;
        celdaPrecio.innerHTML = nuevoPrecio.value;
        celdaCantidad.appendChild(inputCantidad);

        fila.appendChild(celdaItem);
        fila.appendChild(celdaCantidad);
        fila.appendChild(celdaPrecio);
        fila.addEventListener("dblclick",eliminarFila);
        tablaCompra.appendChild(fila);
        nuevoItem.value = "";
        nuevoPrecio.value = "";
        actualizarCookie(); // Asegurar que se actualiza la cookie
        console.log("Contenido de la cookie: " + getCookie("compra"));

    }
} 

function actualizarPrecio(e){
    var inputCantidad = e.target;
    var fila = inputCantidad.parentNode.parentNode;
    var precioUnitario = parseFloat(fila.cells[2].innerHTML) / (inputCantidad.value - 1);
    fila.cells[2].innerHTML = (precioUnitario * inputCantidad.value).toFixed(2);
    actualizarCookie();
}

function actualizarCookie(){
    setCookie("compra",tablaCompra.innerHTML,7);
}

function resetear(){
    tablaCompra.innerHTML ="";
    removeCookie("compra");
}

function rellenarContenido(){
    var i=0;
    if (detectCookie("compra")){
        tablaCompra.innerHTML = getCookie("compra");
        //los elementos añadidos no tienen el comportamientoFila.
        elementosFila = document.getElementsByTagName("tr");
        while(i<elementosFila.length){
            elementosFila[i].addEventListener("dblclick",eliminarFila);
            var inputCantidad = elementosFila[i].cells[1].getElementsByTagName("input")[0];
            inputCantidad.addEventListener("change", actualizarPrecio);
            i++;
        }
    }
}

function eliminarFila(){
    this.parentNode.removeChild(this);
    actualizarCookie();
}
