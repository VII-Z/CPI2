//Um exemplo que de código que poderia ser compartilhado entre os dois seria:

const camposTexto = document.querySelectorAll("[type=text]");
const spanErro = document.getElementById("erro");

camposTexto.forEach((campo) => {
    campo.addEventListener("input", () => validaCampo(campo));
    campo.addEventListener("blur", () => validaCampo(campo));
});

function validaCampo(campo) {
    spanErro.innerHTML = "";
    campo.classList.remove("foco");

    if (campo.validity.valueMissing) {
        spanErro.innerHTML = "Preencha um valor válido!";
        campo.classList.add("foco");
    } else if (campo.validity.patternMismatch) {
        spanErro.innerHTML = "Preencha um número inteiro ou decimal!";
        campo.classList.add("foco");
    }
}

//Alterando os pontos necessários no exemplo 1 e 2.
