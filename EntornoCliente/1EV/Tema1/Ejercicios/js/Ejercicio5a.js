const NUM_NOTAS = 5;
let notas = new Array(NUM_NOTAS);

for (let i = 0; i < NUM_NOTAS; i++) {
    var nota = "";

    while (nota != 'A' & nota != 'B' & nota != 'C' & nota != 'D' & nota != 'F') {
        nota = prompt("Introduce la nota " + i + " (A, B, C, D, F): ".toUpperCase());
        notas[i] = nota;
    }
}

document.write("<tr>");

let suma = 0;

for (let i = 0; i < NUM_NOTAS; i++) {
    switch (notas[i]) {
        case 'A':
            document.write("<td>4</td>");
            suma += 10;
            break;
        case 'B':
            document.write("<td>3</td>");
            suma += 8;
            break;
        case 'C':
            document.write("<td>2</td>");
            suma += 7;
            break;
        case 'D':
            document.write("<td>1</td>");
            suma += 6;
            break;
        case 'F':
            document.write("<td>0</td>");
            suma += 4;
            break;
    }
    document.write("</tr>");
}





