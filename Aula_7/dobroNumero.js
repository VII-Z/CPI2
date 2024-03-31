function calcularDobro(numero){
  return  numero * 2; 
}

var prompt = require('prompt-sync')();

var numero1 = parseInt(prompt(require('prompt-sync')("Digite o primeiro número:")));
var numero2 = parseInt(prompt("Digite o segundo número:"));
var numero3 = parseInt(prompt("Digite o terceiro número:"));

console.log("O dobro de " + numero1 + " é: " + calcularDobro(numero1));
console.log("O dobro de " + numero2 + " é: " + calcularDobro(numero2));
console.log("O dobro de " + numero3 + " é: " + calcularDobro(numero3));
