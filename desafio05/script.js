// Seleciona os elementos do DOM
var entrada = document.querySelector("#entrada");
var btn = document.querySelector("#btn");
var btnReset = document.querySelector("#btn-reset");
var resultado = document.querySelector("#resultado");

// Função que encontra a maior letra em uma string
function letraComMaiorIndice(str) {
    let maiorLetra = '';
    for (const letra of str) {
        if (letra > maiorLetra) {
            maiorLetra = letra;
        }
    }
    return maiorLetra;
}

// Adiciona um evento de clique ao botão "Enviar"
btn.addEventListener("click", function() {
    var textoUsuario = entrada.value.trim(); // Remove espaços em branco das extremidades
    
    if (textoUsuario) {
        var maiorLetra = letraComMaiorIndice(textoUsuario);
        resultado.innerText = `A maior letra é: ${maiorLetra}`;
    } else {
        alert('Por favor, insira um texto válido.');
    }
});

// Adiciona um evento de clique ao botão "Limpar"
btnReset.addEventListener("click", function() {
    entrada.value = ''; // Limpa o campo de entrada
    resultado.innerText = ''; // Limpa o campo de resultado
    entrada.focus(); // Coloca o foco de volta no campo de entrada
});
