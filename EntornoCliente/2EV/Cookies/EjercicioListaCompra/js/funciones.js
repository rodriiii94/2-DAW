window.onload = init;
function init(){
    botonEnvio = document.querySelector('[type="button"]');
    nuevoItem = document.querySelector('[type="text"]');
    nuevoPrecio = document.querySelector('[type="number"]');
    tablaCompra = document.getElementById("tablaCompra");
    botonEnvio.addEventListener("click",anadir);
    document.getElementById("resetear").addEventListener("click",resetear);
    rellenarContenido();
}

function anadir(e){
    evento = e || e;
    if (nuevoItem.value == "" || nuevoPrecio.value == ""){
        evento.preventDefault();
    }else{
        var fila = document.createElement("tr");
        var celdaItem = document.createElement("td");
        var celdaPrecio = document.createElement("td");
        celdaItem.innerHTML = nuevoItem.value;
        celdaPrecio.innerHTML = nuevoPrecio.value;
        fila.appendChild(celdaItem);
        fila.appendChild(celdaPrecio);
        fila.addEventListener("dblclick",eliminarFila);
        tablaCompra.appendChild(fila);
        nuevoItem.value = "";
        nuevoPrecio.value = "";
    }
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
            i++;
        }
    }
};

function eliminarFila(){
    this.parentNode.removeChild(this);
    actualizarCookie();
}
