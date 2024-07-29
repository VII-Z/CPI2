const camposTexto = document.querySelectorAll("[type=text");

camposTexto.forEach((campo)=> {
    campo.addEventListener("input",() => validaCampo(campo));
    campo.addEventListener("blur",() => validaCampo);
})

function validaCampo(campo){

}
const spanErro = document.getElementById("erro");

function validaCampo(campo){
    spanErro.innerHTML = "";
    campo.classList.remove("foco");
    if(campo.validity.patternMismatch){
        spanErro.innerHTML = "Preencha um número inteiro ou decimal!";
        campo.classList.add("foco");
    }
}