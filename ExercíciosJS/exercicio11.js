function determinarLiga() {
    percentualMetal = parseFloat(document.getElementById('percentualMetal').value);
    percentualAmetal = parseFloat(document.getElementById('percentualAmetal').value);

    // Verifica se a soma dos percentuais é igual a 100%
    if (percentualMetal + percentualAmetal !== 100) {
        document.getElementById('resultado').innerText = 'A soma dos percentuais de metal e ametal deve ser igual a 100%.';
        return;
    }

    // Determina se a liga é predominantemente metálica ou ametálica
    let resultado;
    if (percentualMetal == 50){
        resultado = 'A liga não apresenta predominância metálica ou ametálica';
    } else {
        if (percentualMetal > 50) {
            resultado = 'A liga é predominantemente metálica.';
        } else {
            resultado = 'A liga é predominantemente ametálica.';
        }
    }
    
    // Exibindo o resultado
    document.getElementById('resultado').innerText = resultado;
}
