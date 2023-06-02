/*Essa linha de código seleciona o elemento do botão com o ID "botao"
e o armazena na variável botao. O getElementById é um método 
do objeto document que retorna o elemento correspondente ao ID especificado*/
var botao = document.getElementById('botao');
var botaoSim = document.getElementById('Sim');
var mensagem = document.getElementById('mensagem');
var imagem = document.getElementById('imagem');
var imagem2 = document.getElementById('imagem2');

/*Essas linhas de código atribuem à variável largura o valor da largura da janela
do navegador, obtido por window.innerWidth, e à variável altura o valor da altura
da janela do navegador, obtido por window.innerHeight. A propriedade innerWidth 
retorna a largura interna da janela do navegador, incluindo a barra de rolagem vertical,
se houver, e a propriedade innerHeight retorna a altura interna da janela do navegador, 
incluindo a barra de rolagem horizontal */
var largura = window.innerWidth;
var altura = window.innerHeight;
/* Essa função abaixo determinada o "andar" do botão não para qualquer lugar da tela*/
function moverBotao() {
    var novaPosicaoX = Math.random() * (largura - botao.offsetWidth);
    var novaPosicaoY = Math.random() * (altura - botao.offsetHeight);
    botao.style.left = novaPosicaoX + 'px';
    botao.style.top = novaPosicaoY + 'px';
}

botao.addEventListener('mouseenter', function () {
    moverBotao();
});

botaoSim.onclick = function () {
    mensagem.style.display = 'block';
    imagem.style.display = 'block';
    imagem2.style.display = 'block';
}
