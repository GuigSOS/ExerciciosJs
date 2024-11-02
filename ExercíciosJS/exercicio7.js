function determinarPredominancia() {

    percentualMetal = parseFloat(document.getElementById('percentualMetal').value);
    percentualAmetal = parseFloat(document.getElementById('percentualAmetal').value);
    
    if (isNaN(percentualMetal) || isNaN(percentualAmetal)) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    soma = percentualMetal + percentualAmetal;
    
    if (soma !== 100) {
        document.getElementById('resultado').innerText = 'A soma das porcentagens deve ser igual a 100%.';
        return;
    }

    if (percentualMetal == percentualAmetal){
        document.getElementById('resultado').innerText = 'A liga não apresenta predominância metálica ou ametálica';
    }else {
        if (percentualMetal > percentualAmetal) {
            document.getElementById('resultado').innerText = 'A liga é predominantemente metálica.';
        } else {
            document.getElementById('resultado').innerText = 'A liga é predominantemente ametálica.';
        }
    }
}
