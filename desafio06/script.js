// Seleciona os elementos do DOM
var entrada = document.querySelector("#entrada");
var btn = document.querySelector("#btn");
var btnReset = document.querySelector("#btn-reset");
var resultado = document.querySelector("#resultado");

// Função que inverte cada palavra da frase
function invertMauisc(str) {
    const arrPalavras = str.split(" "); // Divide a string em palavras
    const palavrasInvertidas = arrPalavras.map(palavra => {
        return palavra.split("").reverse().join(""); // Inverte cada palavra
    });
    return palavrasInvertidas.join(" "); // Recompõe a frase com as palavras invertidas
}

// Adiciona um evento de clique ao botão "Enviar"
btn.addEventListener("click", function() {
    var fraseUsuario = entrada.value.trim(); // Remove espaços em branco das extremidades
    
    if (fraseUsuario) {
        var fraseInvertida = invertMauisc(fraseUsuario);
        resultado.innerText = `A frase invertida é: ${fraseInvertida}`;
    } else {
        alert('Por favor, insira uma frase válida.');
    }
});

// Adiciona um evento de clique ao botão "Limpar"
btnReset.addEventListener("click", function() {
    entrada.value = ''; // Limpa o campo de entrada
    resultado.innerText = ''; // Limpa o campo de resultado
    entrada.focus(); // Coloca o foco de volta no campo de entrada
});

