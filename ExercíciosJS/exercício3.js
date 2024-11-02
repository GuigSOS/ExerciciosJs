function processarNumeros() {
    numeros = [];
    maiorquemedia = [];
    var menor = 0
    let soma = 0;

   
    for (let i = 1; i <= 10; i++) {
        numero = parseInt(document.getElementById('numero'+[i]).value);
        numeros.push(numero);
        soma += numero; 
    }

    media = soma / 10;

    for (let u = 1; u <= 10; u++){
        if (numeros[u]>media){
            maiorquemedia.push(numeros[u]);
        }         
    }
    
    for (let y = 0; y <= 10; y++){
        if (numeros[y]<0){
            menor=menor+1
        }
    }
    
    document.getElementById('resultado').innerHTML = `
        <p>Números maiores que a média (${media}): ${maiorquemedia}</p>
        <p>Número de elementos menores que zero: ${menor}</p>
    `;
}
