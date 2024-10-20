function calcularExponencial() {
    baseE = parseFloat(document.getElementById('baseE').value);
    valorX = parseFloat(document.getElementById('valorX').value);

    // Verificando se os valores são válidos
    if (isNaN(baseE) || isNaN(valorX)) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para a base e para x.';
        return;
    }

    // Cálculo da função exponencial
    resultado = baseE ** valorX;

    // Exibindo o resultado
    document.getElementById('resultado').innerText = `O valor de f(x)= ${baseE}^${valorX} é: ${resultado.toFixed(2)}`;
}
