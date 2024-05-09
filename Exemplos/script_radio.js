const lastnameInput = document.getElementsByName ('lastname')[0];
const firstnameInput = document.getElementsByName ('firstname')[0];
const mudancaRadios = document.querySelectorAll('input[type="radio"]');

function convertAllFields(mudancaCase){
    let mudarCase;
    if (mudancaCase === "upper"){
        mudarCase = function(str){
            return str.toUpperCase();
        }
    } else {
        mudarCase = function(str){
            return str.toLowerCase();
        }
    }
    lastnameInput.value = mudarCase(lastnameInput.value);
    firstnameInput.value = mudarCase(firstnameInput.value);
}

mudancaRadios.forEach(radio => radio.addEventListener('change',() => {
    if(radio.checked){
        convertAllFields(radio.value);
    }
}));