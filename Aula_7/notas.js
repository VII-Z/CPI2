function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

var nota1 = parseFloat(prompt("Digite a nota 1:"));
var nota2 = parseFloat(prompt("Digite a nota 2:"));
var nota3 = parseFloat(prompt("Digite a nota 3:"));

var media = calcularMedia(nota1, nota2, nota3);

console.log("Média aritmética = " + media.toFixed(2));