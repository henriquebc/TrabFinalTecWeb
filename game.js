//movimentação personagem
// armazena a quantidade de estrtelas
var estrelaRestante = 10;
//armazena o numero de estrelas capturadas
var quantEstrelas = 0;
//armazena quantidade de segundos passados/pontuação
var segundos = 0;

var kart = document.getElementById("kart");
// Posição inicial do kart
var posiX = 45;
// Função para mover o kart
function moveKart(event) {
  var key = event.keyCode;
  // Movimento para a esquerda
  if (key == 37) {
    posiX -= 1;
    kart.style.left = posiX + "%";
  }
  // Movimento para a direita
  else if (key == 39) {
    posiX += 1;
    kart.style.left = posiX + "%";
  }
}

// Adiciona um listener para as teclas pressionadas
document.addEventListener("keydown", moveKart);

//função ue cria um novo elemento
function novoElemento(tagName, className) {
  const elemento = document.createElement(tagName);
  elemento.className = className;
  return elemento;
}

var combusEstrela = document.querySelector(".combust-estrela");
var inimigo = document.querySelector(".inimigo");
function gerarEstrela() {
  var posEX 
  var posIX
  do{
    posEX = Math.floor(Math.random() * (60 - 32 + 1)) + 32;
    posIX = Math.floor(Math.random() * (60 - 32 + 1)) + 32;

  }while(Math.abs(posIX-posEX)<10)
  
  combusEstrela.style.left = posEX + "%";
  inimigo.style.left = posIX  + "%";
}

var geraEstrela = setInterval(gerarEstrela, 4000);
function AdiconarEstrela(){
  estrelaRestante += 5;
}
function AdiconarContadorEstrela(){
  quantEstrelas++;
}
function AdiconarPontuacao(){
  segundos++;
}

const loop = setInterval(() => {
  var posXK = kart.offsetLeft;
  var posYK = Math.floor(+window.getComputedStyle(kart).bottom.replace('px', ''));
  var posXE = combusEstrela.offsetLeft;
  var posYE = Math.floor(+window.getComputedStyle(combusEstrela).bottom.replace('px', ''));
  var posXI = inimigo.offsetLeft;
  var posYI = +window.getComputedStyle(inimigo).bottom.replace('px', '');
  if (Math.abs(posXK-posXE)<=10 && posYK == posYE) {
    AdiconarEstrela()
    AdiconarContadorEstrela()
  }
  if(posXK==posXI && posYK == posYI){
    colidiuCarro()
  }
  else if(posYI<0){
    if(posYK-Math.abs(posYI) == 50 ){
      AdiconarPontuacao()
    }
  }

}, 10);


function atualizarEstrela() {
  estrelaRestante--;
  var estrela = document.querySelector(".quant-estrelas");
  estrela.textContent = estrelaRestante;
  if (estrelaRestante < 0) {
    alert(
      "A cabaram as suas estrelas." +
        " --pontuação: " +
        segundos +
        "----estrelas capturadas:" +
        quantEstrelas
    );
    clearInterval(interEstrela);
    clearInterval(interCont);
    clearInterval(geraEstrela);
    window.location.reload();
  }
}

//atualia a pontuação acada 1 segundo após o jogo inicar
var pontuacao = document.querySelector(".pontuacao");

function atualizarContador() {
  segundos++;
  pontuacao.textContent = segundos;
}
interEstrela = setInterval(atualizarEstrela, 1000);
interCont = setInterval(atualizarContador, 1000);

//atualizando caminho

/*
var rua = document.querySelector(".rua");
var rua1 = document.querySelector(".rua1");
var rua2 = document.querySelector(".rua2");
var rua3 = document.querySelector(".rua3");
var rua4 = document.querySelector(".rua4");
var rua5 = document.querySelector(".rua5");
var rua6 = document.querySelector(".rua6");
var rua7 = document.querySelector(".rua7");
var rua8 = document.querySelector(".rua8");
var rua9 = document.querySelector(".rua9");
*/

//combustivel

var estrela = document.querySelector(".combust-estrela");
