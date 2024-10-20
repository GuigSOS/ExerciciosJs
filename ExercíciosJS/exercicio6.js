function calcularForcaResultante() {
    // Obtendo os valores dos inputs
    massa = parseFloat(document.getElementById('massa').value);
    aceleracao1 = parseFloat(document.getElementById('aceleracao1').value);
    aceleracao2 = parseFloat(document.getElementById('aceleracao2').value);
    
    // Verificando se os valores são válidos
    if (isNaN(massa) || isNaN(aceleracao1) || isNaN(aceleracao2) || massa <= 0) {
        document.getElementById('resultadoForca').innerText = 'Por favor, insira valores válidos.';
        return;
    }
    
    // Cálculo da força resultante
    aResultante = aceleracao1 - aceleracao2; // Aceleração resultante
    forcaResultante = massa * aResultante; // F = m * a_resultante
    
    // Exibindo o resultado
    document.getElementById('resultadoForca').innerText = `Força resultante: ${forcaResultante.toFixed(2)} N`;
}

function calcularForcaAcaoReacao() {
    // Obtendo os valores dos inputs
    massa1 = parseFloat(document.getElementById('massa1').value);
    aceleracaoObj1 = parseFloat(document.getElementById('aceleracaoObj1').value);
    massa2 = parseFloat(document.getElementById('massa2').value);
    aceleracaoObj2 = parseFloat(document.getElementById('aceleracaoObj2').value);
    
    // Verificando se os valores são válidos
    if (isNaN(massa1) || isNaN(aceleracaoObj1) || isNaN(massa2) || isNaN(aceleracaoObj2) || massa1 <= 0 || massa2 <= 0) {
        document.getElementById('resultadoAcaoReacao').innerText = 'Por favor, insira valores válidos.';
        return;
    }
    
    // Cálculo da força de ação e reação
    forcaAcao = massa1 * aceleracaoObj1; // F1 = m1 * a1
    forcaReacao = massa2 * aceleracaoObj2; // F2 = m2 * a2

    // Exibindo o resultado
    document.getElementById('resultadoAcaoReacao').innerText = `Força de ação: ${forcaAcao.toFixed(2)} N\nForça de reação: ${forcaReacao.toFixed(2)} N (mesma magnitude, sentidos opostos)`;
}
