const checkbox = document.getElementById("checkbox");
const checkboxMarcado = document.getElementById("checkboxMarcado");

function clicou(campo){
    if (checkbox.checked){
        console.log("O campo está selecionado!");
    } else {
        console.logo("Campo desmarcado!")
    }
}

checkbox.addEventListener('click',clicou);

clicou();