const camposTexto = document.querySelectorAll("[type=text]");
const spanErro = document.getElementById("erro");

camposTexto.forEach((campo) => {
    campo.addEventListener("input", () => validaCampo(campo));
    campo.addEventListener("blur", () => validaCampo(campo));
});

function validaCampo(campo)
{
    spanErro.innerHTML = "";
    campo.classList.remove("foco");

    if(campo.validity.valueMissing)
    {
        spanErro.innerHTML = "Preencha um valor válido!";
        campo.classList.add("foco");
    }
    else if(campo.validity.patternMismatch)
    {
        spanErro.innerHTML = "Preencha um número inteiro ou decimal!";
        campo.classList.add("foco");
    }
}

const botoesOperacao = document.querySelectorAll("[type=button]");
const campoResultado = document.getElementById("resultado");

botoesOperacao.forEach((botao) => {
    botao.addEventListener("click", () => {
        let soma = 0, multiplicacao = 1, valor;
        let isValid = true;

        camposTexto.forEach((campo) => {
            if (!campo.checkValidity()) {
                isValid = false;
                return;
            }
        });

        if (!isValid) return;

        camposTexto.forEach((campo) => {
            if(campo.value)
            {
                valor = Number(campo.value);

                if(botao.name == "soma")
                {
                    soma += valor;
                    campoResultado.innerHTML = soma;
                }
                else if(botao.name == "multiplica")
                {
                    multiplicacao *= valor;
                    campoResultado.innerHTML = multiplicacao;
                }
            }
        });
    });
});