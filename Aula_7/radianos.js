function radianosParaGraus(radianos) {
    return radianos * (180 / Math.PI);
}

var radianos = parseFloat(prompt("Digite o valor em radianos:"));

var graus = radianosParaGraus(radianos);

console.log(radianos + " radianos é equivalente a " + graus.toFixed(2) + " graus.");