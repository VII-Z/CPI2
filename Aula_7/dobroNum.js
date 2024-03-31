function calcularDobro(numero) {
    return numero * 2;
}

function imprimirCaractere(caractere) {
    console.log(caractere);
}

function imprimirDobro(numero) {
    var dobro = calcularDobro(numero);
    imprimirCaractere("***************");
    imprimirCaractere("O dobro de " + numero + " é: " + dobro);
}

var numero1 = parseInt(prompt("Digite o primeiro número:"));
var numero2 = parseInt(prompt("Digite o segundo número:"));
var numero3 = parseInt(prompt("Digite o terceiro número:"));

imprimirDobro(numero1);
imprimirDobro(numero2);
imprimirDobro(numero3);