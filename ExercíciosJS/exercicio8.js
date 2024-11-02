function calcularLigacaoIonica() {

    elM = parseInt(document.getElementById('elM').value);
    elA = parseInt(document.getElementById('elAm').value);
    
    if (isNaN(elM) || isNaN(elA) || elM <= 0 || elA <= 0) {
        document.getElementById('resultIon').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    proporM = elA;
    proporA = elM;

    document.getElementById('resultIon').innerText = `Fórmula iônica: M${proporM}A${proporA} (${proporA}:${proporM})`;
}

function calcularLigacaoCovalente() {

    ligaAtm1 = parseInt(document.getElementById('ligaAtm1').value);
    ligaAtm2 = parseInt(document.getElementById('ligaAtm2').value);
    

    if (isNaN(ligaAtm1) || isNaN(ligaAtm2) || ligaAtm1 <= 0 || ligaAtm2 <= 0) {
        document.getElementById('resultCova').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    if (ligaAtm1%2!=0){
        ligaAtm1=ligaAtm1+1
    }
    numX = ligaAtm2;
    numY = ligaAtm1 / 2;


    document.getElementById('resultCova').innerText = `Fórmula molecular: X${numX}Y${numY} (${numX} átomos de X para ${numY} de Y)`;
}
