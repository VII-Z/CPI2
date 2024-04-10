//Questão 1
// function lerVetorA() {
//     let vetorA = [];
//     for (let i = 0; i < 10; i++) {
//         vetorA.push(parseInt(prompt("Digite o elemento " + (i + 1) + " do vetor A:")));
//     }
//     return vetorA;
// }
// let vetorB = [];
// function construirVetorB(vetorA) {
//     for (let i = 0; i < vetorA.length; i++) {
//         if (i % 2 === 0) {
//             vetorB.push(vetorA[i] * 5);
//         } else {
//             vetorB.push(vetorA[i] + 5);
//         }
//     }
// }
// let vetorA = lerVetorA();
// construirVetorB(vetorA);

// console.log("Vetor A:", vetorA);
// console.log("Vetor B:", vetorB);

//Questão 2
// function lerVetor(nomeVetor) {
//     let vetor = [];
//     for (let i = 0; i < 5; i++) {
//         vetor.push(parseInt(prompt(`Elemento do vetor ${nomeVetor}[${i}]:`)));
//     }
//     return vetor;
// }

// function somarVetores(vetorA, vetorB) {
//     let soma = [];
//     for (let i = 0; i < 5; i++) {
//         soma.push(vetorA[i] + vetorB[i]);
//     }
//     return soma;
// }

// let vetorA = lerVetor("A");
// let vetorB = lerVetor("B");

// let vetorSoma = somarVetores(vetorA, vetorB);

// console.log("Vetor Soma:");
// for (let i = 0; i < 5; i++) {
//     console.log(`soma[${i}] - ${vetorSoma[i]}`);
// }

//Questão 3
// function unirVetores(vetor1, vetor2) {
//     let vetorUniao = [];
//     for (let i = 0; i < vetor1.length; i++) {
//         vetorUniao.push(vetor1[i]);
//     }
    
//     for (let i = 0; i < vetor2.length; i++) {
//         vetorUniao.push(vetor2[i]);
//     }
//     return vetorUniao;
// }

// let vetor1 = [1, 2, 3, 4, 5];
// let vetor2 = [6, 7, 8, 9, 10];
// let vetorUniao = unirVetores(vetor1, vetor2);

// console.log("Vetor União:", vetorUniao);

//Questão 4

// function transformarTexto(texto) {
//     let textoMaiusculo = texto.toUpperCase();
//     let textoMinusculo = texto.toLowerCase();
//     console.log("Texto em maiúsculas:", textoMaiusculo);
//     console.log("Texto em minúsculas:", textoMinusculo);
// }

// while (true) {
//     let entrada = prompt("Digite um texto (ou digite 'sair' para encerrar):");
//     if (entrada.toLowerCase() === 'sair') {
//         break; 
//     }
//     transformarTexto(entrada);
// }