function anade() {
    var lista = document.getElementById("lista");
    var elemento = document.createElement("li");
    var texto = document.createTextNode(document.getElementById("texto").value);

    elemento.appendChild(texto);
    lista.appendChild(elemento);
}