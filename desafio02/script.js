
var entrada = document.querySelector("#entrada");
var btn = document.querySelector("#btn");



function gerarChunks(n, chunk = 'chunk') {
    
    if (n === 1) {
        return chunk;
    }
    
    return gerarChunks(n - 1, chunk) + '-' + chunk;
}


btn.addEventListener('click', function() {
    // Converte o valor de entrada para um número inteiro
    var usuario = parseInt(entrada.value);
    
    // Verifica se o valor inserido é um número válido
    if (!isNaN(usuario) && usuario > 0) {
        // Chama a função gerarChunks e exibe o resultado no DOM
        const resultadoChunks = gerarChunks(usuario);
        resultado.textContent = resultadoChunks;
       
    } else {
        resultado.textContent = "Por favor, insira um número inteiro válido.";
    }

    entrada.value = '';
});