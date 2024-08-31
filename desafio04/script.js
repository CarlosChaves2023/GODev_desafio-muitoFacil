document.getElementById('btn').addEventListener('click', function() {
    const entrada = document.getElementById('entrada').value;

    // Verifica se a entrada é um número inteiro
    if (!isNaN(entrada) && Number.isInteger(Number(entrada))) {
        const resultado = quadradoConcatenarAlgarismos(entrada);
        document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
    } else {
        alert('Por favor, insira um número inteiro válido.');
    }
});

document.getElementById('btn-reset').addEventListener('click', function() {
    document.getElementById('entrada').value = '';
    document.getElementById('resultado').innerText = '';
});

function quadradoConcatenarAlgarismos(num) {
    const numString = num.toString();
    let resultado = '';

    for (const digito of numString) {
        const digitoNum = parseInt(digito);
        resultado += (digitoNum ** 2).toString();
    }

    return resultado;
}
