function calcularGasto() {
    // Obtendo os valores dos inputs
    quilometragem = parseFloat(document.getElementById('quilometragem').value);
    valorCombustivel = parseFloat(document.getElementById('valorCombustivel').value);
    
    // Verificando se os valores são válidos
    if (isNaN(quilometragem) || isNaN(valorCombustivel) || quilometragem <= 0 || valorCombustivel <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }
    
    // Cálculo do gasto
    consumo = 8; // km/litro
    litrosUsados = quilometragem / consumo;
    gastoTotal = litrosUsados * valorCombustivel;
    
    // Exibindo o resultado
    document.getElementById('resultado').innerText = `Gasto total de combustível: R$ ${gastoTotal.toFixed(2)}`;
}
