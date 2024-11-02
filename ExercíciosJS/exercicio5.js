function calcularCusto() {

    comprimento = parseFloat(document.getElementById('comprimento').value);
    largura = parseFloat(document.getElementById('largura').value);

    if (isNaN(comprimento) || isNaN(largura) || comprimento <= 0 || largura <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }
    
    
    area = comprimento * largura;
    precoMetroQuadrado = 36.00; 
    custoTotal = area * precoMetroQuadrado;
    
    document.getElementById('resultado').innerText = `Custo total para assentar piso: R$ ${custoTotal.toFixed(2)}`;
}
