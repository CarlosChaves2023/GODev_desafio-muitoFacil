var entrada = document.querySelector("#entrada");
var btn = document.querySelector("#btn");
var btnReset = document.querySelector("#btn-reset");
var resultado = document.querySelector("#resultado");

function inverterString(str) {
    return str.split('').reverse().join('');
}

btn.addEventListener('click', function() {
    // Captura o valor do input e cria um array a partir da string de entrada, dividindo pelos valores separados por vírgula
   
    var lista = entrada.value.split(',');
    
    // Remove espaços desnecessários de cada item
    lista = lista.map(item => item.trim());

    // Inverte os caracteres de cada item da lista
    var listaInvertida = lista.map(inverterString);

    // Exibe o resultado na página
    resultado.textContent = listaInvertida.join(', ');

});

btnReset.addEventListener('click', function() {
     // Limpa o campo de entrada
     entrada.value = '';
     resultado.textContent = '';
})
   