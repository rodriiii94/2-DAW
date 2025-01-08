// Función para cambiar estilos cuando se hace clic en el botón
document.getElementById('changeButton').addEventListener('click', function() {
    // Cambiar estilos usando clases
    var elements = document.getElementsByClassName('text-content');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('changed-font');
    }
    
    // Cambiar estilos usando ID
    var uniqueBox = document.getElementById('uniqueBox');
    uniqueBox.classList.toggle('changed-background');
    
    // Cambiar el texto del botón
    this.textContent = this.textContent === 'Cambiar Estilos' ? 'Restaurar Estilos' : 'Cambiar Estilos';
});

// Demostración de cómo acceder a elementos por clase en JavaScript
var sharedStyleElements = document.getElementsByClassName('shared-style');
console.log('Elementos con clase compartida:', sharedStyleElements.length);

// Demostración de cómo acceder a un elemento por ID en JavaScript
var uniqueElement = document.getElementById('uniqueBox');
console.log('Elemento con ID único:', uniqueElement.textContent);

