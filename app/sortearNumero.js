
const menorValor = 1;
const maiorValor = 1000;

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {

    return parseInt(Math.random() * maiorValor + 1);
}

const elementoMenorValor = document.getElementById('valor-menor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('valor-maior');
elementoMaiorValor.innerHTML = maiorValor;

