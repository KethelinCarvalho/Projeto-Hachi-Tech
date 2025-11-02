const botaoHamburguer = document.getElementById('botaoHamburguer');
const navegacao = document.getElementById('navegacao');

botaoHamburguer.addEventListener('click', () => {
    botaoHamburguer.classList.toggle('ativo');
    navegacao.classList.toggle('ativo');
});