const areaDoCodigo = document.querySelector('.bg__codigo');
const linguagem = document.querySelector('.form__select');
const botao = document.querySelector('.codigo__button');

function mudaLinguagem() {
    const codigo = areaDoCodigo.querySelector('code');
    areaDoCodigo.innerHTML = '<code class="input__codigo hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>';
    areaDoCodigo.querySelector('code').innerText = codigo.innerText;
}

linguagem.addEventListener('change', function() {
    mudaLinguagem();
});

botao.addEventListener('click', function () {
    const codigo = areaDoCodigo.querySelector('code');
    hljs.highlightBlock(codigo);
});