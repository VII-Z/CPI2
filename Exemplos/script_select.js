const selecionadoInput = document.getElementById('selecionado');
    const novoInput = document.getElementById('novo');
    const erroSpan = document.getElementById('erro');
    const frutasSelect = document.getElementById('frutas');
    const acrescentarButton = document.getElementById('acrescentar');
    const apagarButton = document.getElementById('apagar');
    const mudarButton = document.getElementById('mudar');

    function inclui() {
      if (novoInput.value === "") {
        erroSpan.textContent = "Escreva um novo item";
        novoInput.focus();
        return;
      }

      frutasSelect.innerHTML += `<option>${novoInput.value}</option>`;
      novoInput.value = "";
    }

    function escreve() {
      selecionadoInput.value = frutasSelect.options[frutasSelect.selectedIndex].text;
    }

    function apaga() {
      frutasSelect.remove(frutasSelect.selectedIndex);
      escreve();
      novoInput.value = "";
    }

    function muda() {
      if (novoInput.value === "") {
        erroSpan.textContent = "Escreva um novo item";
        novoInput.focus();
        return;
      }
      frutasSelect.options[frutasSelect.selectedIndex].text = novoInput.value;
      escreve();
      novoInput.value = "";
    }

    acrescentarButton.addEventListener('click', inclui);
    apagarButton.addEventListener('click', apaga);
    mudarButton.addEventListener('click', muda);
    frutasSelect.addEventListener('change', escreve);