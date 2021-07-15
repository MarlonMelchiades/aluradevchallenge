const abrirMenu = document.querySelector('.menu-abrir')
const fechaMenu = document.querySelector('.menu-fechar')

abrirMenu.onclick = function() {
    document.documentElement.classList.add('menu-ativo');
}

fechaMenu.onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
}

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};
