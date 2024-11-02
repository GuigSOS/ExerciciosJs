valores = [];

function adicionarValor() {
    valorInput = document.getElementById('valor');
    valor = parseInt(valorInput.value);

    if (!isNaN(valor)) {
        valores.push(valor);
        valorInput.value = '';
        atualizarListaValores();
    } else {
        alert('Por favor, insira um valor válido.');
    }
}

function atualizarListaValores() {
    listaValores = document.getElementById('listaValores');
    listaValores.innerHTML = '';

    for (let i = 0; i < valores.length; i++) {
        li = document.createElement('li');
        li.textContent = valores[i];
        listaValores.appendChild(li);
    }
}

function mostrarValores() {
    resultado = document.getElementById('resultado');
    document.getElementById('resultado').innerText = `Valores inseridos: ${valores.join(', ')}`;
}

function mostrarMaiorValor() {
    resultado = document.getElementById('resultado');
    if (valores.length > 0) {
        maior = Math.max(...valores);
        document.getElementById('resultado').innerText = `Maior valor: ${maior}`;
    } else {
        document.getElementById('resultado').innerText = 'Nenhum valor inserido.';
    }
}

function mostrarMenorValor() {
    resultado = document.getElementById('resultado');
    if (valores.length > 0) {
        menor = Math.min(...valores);
        document.getElementById('resultado').innerText = `Menor valor: ${menor}`;
    } else {
        document.getElementById('resultado').innerText = 'Nenhum valor inserido.';
    }
}
