// Array para armazenar as notas e variável para o somatório
var notas = [];
var somaTotal = 0;

// Selecionando os elementos do DOM
var notaInput = document.querySelector("#nota");
var somaInput = document.querySelector("#soma");
var mediaInput = document.querySelector("#media");
var btnSoma = document.querySelector("#btn-soma");
var btnMedia = document.querySelector("#btn-media");

// Atualiza o somatório e o campo de entrada de notas quando o botão "Somar" é clicado
btnSoma.addEventListener('click', function() {
    var nota = parseFloat(notaInput.value);

    // Verifica se a nota é um número válido
    if (isNaN(nota)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    // Adiciona a nota ao array e atualiza o somatório
    notas.push(nota);
    somaTotal += nota;

    // Atualiza o campo de somatório
    somaInput.value = somaTotal.toFixed(2);

    // Limpa o campo de entrada
    notaInput.value = "";
});

// Calcula a média das notas e exibe no campo "Média" quando o botão "Calcular Média" é clicado
btnMedia.addEventListener('click', function() {
    if (notas.length === 0) {
        alert("Nenhuma nota foi adicionada.");
        return;
    }

    var media = calcularMedia(notas);
    mediaInput.value = media.toFixed(2);

    // Limpa o array de notas, o somatório e o campo de entrada de notas
    notas = [];
    somaTotal = 0;
    somaInput.value = "";
    notaInput.value = "";
});

// Função que calcula a média aritmética de uma quantidade qualquer de números
function calcularMedia(numeros) {
    var soma = numeros.reduce(function(acc, num) {
        return acc + num;
    }, 0);
    return soma / numeros.length;
}
