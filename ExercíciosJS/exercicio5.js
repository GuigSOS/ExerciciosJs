function calcularCusto() {
    // Obtendo os valores dos inputs
    comprimento = parseFloat(document.getElementById('comprimento').value);
    largura = parseFloat(document.getElementById('largura').value);

    // Verificando se os valores são válidos
    if (isNaN(comprimento) || isNaN(largura) || comprimento <= 0 || largura <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }
    
    // Cálculo da área e do custo
    area = comprimento * largura; // em m²
    precoPorMetroQuadrado = 36.00; // R$ por m²
    custoTotal = area * precoPorMetroQuadrado;
    
    // Exibindo o resultado
    document.getElementById('resultado').innerText = `Custo total para assentar piso: R$ ${custoTotal.toFixed(2)}`;
}
