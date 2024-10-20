function calcularLigacaoIonica() {
    // Obtendo os valores dos inputs
    elMetal = parseInt(document.getElementById('elMetal').value);
    elAmetal = parseInt(document.getElementById('elAmetal').value);
    
    // Verificando se os valores são válidos
    if (isNaN(elMetal) || isNaN(elAmetal) || elMetal <= 0 || elAmetal <= 0) {
        document.getElementById('resultadoIonica').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    // Cálculo da fórmula iônica
    proporcaoMetal = elAmetal; // O número de elétrons que o ametal ganha
    proporcaoAmetal = elMetal; // O número de elétrons que o metal perde

    // Exibindo o resultado
    document.getElementById('resultadoIonica').innerText = `Fórmula iônica: M${proporcaoMetal}A${proporcaoAmetal} (${proporcaoAmetal}:${proporcaoMetal})`;
}

function calcularLigacaoCovalente() {
    // Obtendo os valores dos inputs
    ligacoesAtomo1 = parseInt(document.getElementById('ligacoesAtomo1').value);
    ligacoesAtomo2 = parseInt(document.getElementById('ligacoesAtomo2').value);
    
    // Verificando se os valores são válidos
    if (isNaN(ligacoesAtomo1) || isNaN(ligacoesAtomo2) || ligacoesAtomo1 <= 0 || ligacoesAtomo2 <= 0) {
        document.getElementById('resultadoCovalente').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    // Cálculo da fórmula molecular
    numeroDeX = ligacoesAtomo2; // Átomo 2 (ex: Hidrogênio)
    numeroDeY = Math.ceil(ligacoesAtomo1 / 2); // Átomo 1 (ex: Oxigênio)

    // Exibindo o resultado
    document.getElementById('resultadoCovalente').innerText = `Fórmula molecular: X${numeroDeX}Y${numeroDeY} (${numeroDeX} átomos de X para ${numeroDeY} de Y)`;
}
