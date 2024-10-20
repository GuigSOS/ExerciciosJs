function processarNumeros() {
    numeros = [];
    maiorquemedia = [];
    var menor = 0
    let soma = 0;

    // Lê os números dos campos de entrada
    for (let i = 1; i <= 10; i++) {
        numero = parseInt(document.getElementById(`numero${i}`).value);
        numeros.push(numero);
        soma += numero; // Soma os números para calcular a média
    }

    // Calcula a média
    media = soma / numeros.length;

    // Filtra os números maiores que a média
    for (let u = 1; u <= 10; u++){
        if (numeros[u]>media){
            maiorquemedia.push(numeros[u]);
        }         
    }
    
    // Conta os números menores que zero
    for (let y = 0; y <= 10; y++){
        if (numeros[y]<0){
            menor=menor+1
        }
    }
    
    
    // Exibe os resultados no HTML
    document.getElementById('resultado').innerHTML = `
        <p>Números maiores que a média (${media}): ${maiorquemedia}</p>
        <p>Número de elementos menores que zero: ${menor}</p>
    `;
}
