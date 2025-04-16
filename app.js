function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('Campo "Do número" deve ser menor que o campo "Até o número". Tente novamente!');
        return;
    }

    if ((ate - de + 1) < quantidade) {
        alert(`O intervalo entre os números deve conter pelo menos ${quantidade} valores únicos. \nAjuste os campos "Do número" e "Até o número", ou altere a quantidade.`);
        return;
    }

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        alert('Preencha todos os campos corretamente!');
        return;
    } 

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate); // Gera um novo número se já estiver sorteado
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`; // Limpa o conteúdo anterior
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = ''; // Limpa o conteúdo
    document.getElementById('de').value = ''; // Limpa o conteúdo
    document.getElementById('ate').value = ''; // Limpa o conteúdo
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'; // Reseta o conteúdo
    alterarStatusBotao(); // Altera o status do botão
}