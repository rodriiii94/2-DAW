function updateText() {
    // Obtener los elementos
    const output = document.getElementById("output");
    const inputText = document.getElementById("inputText").value;
    const textColor = document.getElementById("textColor").value;
    const textSize = document.getElementById("textSize").value;
    const isBold = document.getElementById("bold").checked;
    const isItalic = document.getElementById("italic").checked;
    const isUnderline = document.getElementById("underline").checked;
    const fontFamily = document.getElementById("fontFamily").value;
    const bgColor = document.getElementById("bgColor").value;
    const borderColor = document.querySelector('input[name="borderColor"]:checked').value;

    // Aplicar el texto
    output.textContent = inputText;

    // Aplicar estilos de texto-
    output.style.color = textColor;
    output.style.fontSize = textSize + "em";
    output.style.fontFamily = fontFamily;
    output.style.fontWeight = isBold ? "bold" : "normal";
    output.style.fontStyle = isItalic ? "italic" : "normal";
    output.style.textDecoration = isUnderline ? "underline" : "none";
    output.style.width

    // Aplicar estilos de contenedor
    output.style.backgroundColor = bgColor;
    output.style.borderColor = borderColor;
}