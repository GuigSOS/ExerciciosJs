let valores = [];

function adicionarValor() {
    const valorInput = document.getElementById('valor');
    const valor = parseInt(valorInput.value);

    // Verificando se o valor é válido
    if (!isNaN(valor)) {
        valores.push(valor);
        valorInput.value = ''; // Limpa o campo de entrada
        atualizarListaValores();
    } else {
        alert('Por favor, insira um valor válido.');
    }
}

function atualizarListaValores() {
    listaValores = document.getElementById('listaValores');
    listaValores.innerHTML = ''; // Limpa a lista atual

    // Adiciona todos os valores à lista
    for (let i = 0; i < valores.length; i++) {
        li = document.createElement('li');
        li.textContent = valores[i];
        listaValores.appendChild(li);
    }
}

function mostrarValores() {
    resultado = document.getElementById('resultado');
    resultado.textContent = `Valores inseridos: ${valores.join(', ')}`;
}

function mostrarMaiorValor() {
    resultado = document.getElementById('resultado');
    if (valores.length > 0) {
        maior = Math.max(...valores);
        resultado.textContent = `Maior valor: ${maior}`;
    } else {
        resultado.textContent = 'Nenhum valor inserido.';
    }
}

function mostrarMenorValor() {
    resultado = document.getElementById('resultado');
    if (valores.length > 0) {
        menor = Math.min(...valores);
        resultado.textContent = `Menor valor: ${menor}`;
    } else {
        resultado.textContent = 'Nenhum valor inserido.';
    }
}
