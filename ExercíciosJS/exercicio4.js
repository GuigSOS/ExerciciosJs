function calcularGasto() {
    quilometragem = parseFloat(document.getElementById('quilometragem').value);
    valorCombustivel = parseFloat(document.getElementById('valorCombustivel').value);
    
    if (isNaN(quilometragem) || isNaN(valorCombustivel) || quilometragem <= 0 || valorCombustivel <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }
    
    consumo = 8;
    litrosUsados = quilometragem / consumo;
    gastoTotal = litrosUsados * valorCombustivel;
    
    document.getElementById('resultado').innerText = `Gasto total de combustível: R$ ${gastoTotal.toFixed(2)}`;
}
