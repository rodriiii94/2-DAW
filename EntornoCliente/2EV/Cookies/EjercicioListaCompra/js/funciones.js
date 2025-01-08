window.onload = init;
function init(){
    botonEnvio = document.querySelector('[type="button"]');
    nuevoItem = document.querySelector('[type="text"]');
    listaCompra = document.getElementById("listaCompra");
    botonEnvio.addEventListener("click",anadir);
    document.getElementById("resetear").addEventListener("click",resetear);
    rellenarContenido();
}

function anadir(e){
    evento = e || e;
    if (nuevoItem.value == ""){
        evento.preventDefault();
    }else{
    var lista = document.createElement("li");
    lista.innerHTML = nuevoItem.value;
    lista.addEventListener("dblclick",eliminarLi);
    listaCompra.appendChild(lista);
    nuevoItem.value = "";
    }
    actualizarCookie();
} 


function actualizarCookie(){
    setCookie("compra",listaCompra.innerHTML,7);
}

function resetear(){
    listaCompra.innerHTML ="";
    removeCookie("compra");
}

function rellenarContenido(){
    var i=0;
    if (detectCookie("compra")){
        listaCompra.innerHTML = getCookie("compra");
        //los elementos añadidos no tienen el comportamientoLi.
        elementosLista = document.getElementsByTagName("li");
        while(i<elementosLista.length){
            elementosLista[i].addEventListener("dblclick",eliminarLi);
            i++;
        }
    }
};

function eliminarLi(){
    this.parentNode.removeChild(this);
    actualizarCookie();
}
