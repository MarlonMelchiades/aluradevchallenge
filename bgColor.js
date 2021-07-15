const fundoColor = document.querySelector('.bg__codigo')
const botaoCyan = document.querySelector('.form__color--cyan')
const botaoVerde = document.querySelector('.form__color--verde')
const botaoRoxo = document.querySelector('.form__color--roxo')
const botaoLaranja = document.querySelector('.form__color--laranja')
const botaoRosa = document.querySelector('.form__color--rosa')
const botaoVermelho = document.querySelector('.form__color--vermelho')

function mudaParaVerde(event) {
    event.preventDefault();
    fundoColor.style.backgroundColor = "#9AFF6B";
}

function mudaParaRoxo(event) {
    event.preventDefault();
    fundoColor.style.backgroundColor = "#6B83FF";
}

function mudaParaLaranja(event) {
    event.preventDefault();
    fundoColor.style.backgroundColor = "#FFC46B";
}

function mudaParaRosa(event) {
    event.preventDefault();
    fundoColor.style.backgroundColor = "#FF6BCD";
}

function mudaParaCyan(event) {
    event.preventDefault();
    fundoColor.style.backgroundColor = "#6BD1FF";
}

function mudaParaVermelho(event) {
    event.preventDefault();
    fundoColor.style.backgroundColor = "#FF6961";
}

botaoVerde.addEventListener('click' , mudaParaVerde);
botaoRoxo.addEventListener('click' , mudaParaRoxo);
botaoLaranja.addEventListener('click' , mudaParaLaranja);
botaoRosa.addEventListener('click' , mudaParaRosa);
botaoCyan.addEventListener('click' , mudaParaCyan);
botaoVermelho.addEventListener('click' , mudaParaVermelho);











// background: #9AFF6B; -> verde
// background: #6B83FF; -> roxo
// background: #FFC46B; -> laranja
// background: #FF6BCD; -> rosa
// background: #6BD1FF; -> cyan



