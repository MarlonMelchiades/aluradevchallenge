const abrirBusca = document.querySelector('.busca-abrir')
const fechaBusca = document.querySelector('.busca-fechar')

abrirBusca.onclick = function() {
    document.documentElement.classList.add('busca-ativo');
}

fechaBusca.onclick = function() {
    document.documentElement.classList.remove('busca-ativo');
}

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('busca-ativo');
    }
};
