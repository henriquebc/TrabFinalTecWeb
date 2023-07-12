// armazena a quantidade de estrtelas que servirão de combustível
var estrelaRestante = 10;
//armazena o numero de estrelas capturadas para exibir no fim do jogo
var quantEstrelas = 0;
//armazena quantidade de segundos passados para atualizar a pontuação
var segundos = 0;
//armazena a div com ID kart na variável kart
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
//acessar as classes que representam a estrela que deve ser pega pelo kart e o kart inimigo
var combusEstrela = document.querySelector(".combust-estrela");
var inimigo = document.querySelector(".inimigo");
//gerar as posições aleatorias da estrela e do carro inimigo
function gerarPosi() {
  var posEX 
  var posiX
  
  do{
    //o intervalo de 60 a 32 representa a porsentagem que será atribuido ao left para serem geradas posições entre os blocos
    posEX = Math.floor(Math.random() * (60 - 32 + 1)) + 32;
    posiX = Math.floor(Math.random() * (60 - 32 + 1)) + 32;

  }//para evitar que sejam geradas duas posições iguais e garantir que tenham uma diferença de 10% uma da outra
  while(Math.abs(posiX-posEX)<10)
  //atribui as posições as classes  ".combust-estrela" e ".inimigo"
  combusEstrela.style.left = posEX + "%";
  inimigo.style.left = posiX  + "%";
}
//assim que a pagina for carregada as img inimigo e  estrela já iram inicar com posição aleatória
gerarPosi()
//como a animação de descida da .combust-estrela e ".inimigo" são executadas acada 2s as suas posições devem altera no mesmo peíodo
var geraEstrela = setInterval(gerarPosi, 2000);
//adicion aestrela
function AdiconarEstrela(){
  estrelaRestante += 5;
}
//incrementa o contador de estrelas pegas
function AdiconarContadorEstrela(){
  quantEstrelas++;
}
//adciona mais segundos
function AdiconarPontuacao(){
  segundos++;
}
//caso colida com inimigo
function inimigoColide(){
  segundos-=5;
}
//caso ultrapasse o inimigo
function inimigoUltrapassa(){
  segundos+=5;
}



//verificar se houve colisão com a estrela ou carro inimigo acada 10 milisegundos
const loop = setInterval(() => {
  var cont = 0
  var posXK = Math.floor(kart.offsetLeft);
  var posYK = Math.floor(+window.getComputedStyle(kart).bottom.replace('px', ''));
  var posXE = Math.floor(combusEstrela.offsetLeft);
  var posYE = Math.floor(+window.getComputedStyle(combusEstrela).bottom.replace('px', ''));
  var posXI = Math.floor(inimigo.offsetLeft);
  var posYI = Math.floor(+window.getComputedStyle(inimigo).bottom.replace('px', ''));
  //se a estrela estiver na mesma posição do kart
  if (posXK == posXE && posYK == posYE) {
    AdiconarEstrela()
    AdiconarContadorEstrela()
  }
  //se o inimigo estiver na mesma posição do kart
  if(posXK==posXI && posYK == posYI){
    cont = 1
    inimigoColide()
    //caso contrário verifica se o inimigo parou de ser exibido na div game-board que é quando ele está na posição -40 = -seu próprio height
  }if(posYI == -20 && cont == 0){
    inimigoUltrapassa()
  }

}, 15);





//decrementa em 1 a cada segundo o valor da estrela e atuliza tanto a quantidade de estrelas como quantidade de pontos e verifica se a quantidade de estrelas acabaram para exibir o fim de jogo
function atualizarEstrela() {
  estrelaRestante--;
  var estrela = document.querySelector(".quant-estrelas");
  estrela.textContent = estrelaRestante;
  if (estrelaRestante < 0) {
    alert(
      "Acabaram as suas estrelas." +
        " --pontuação: " +
        segundos +
        "---estrelas capturadas: " +
        quantEstrelas
    );
    //limpa os intervalos pois emquanto o alert era executado  essas funções ainda eram executdas, o que aumentava a pontuação e deixava a quntidade de estrelas negativas
    clearInterval(interEstrela);
    clearInterval(interCont);
    clearInterval(geraEstrela);
    //recarrrega a pagina
    window.location.reload();
  }
}

//atualia a pontuação acada 1 segundo após o jogo inicar


function atualizarContador() {

  segundos++;
}
function ExibPontuacao(){
  var pontuacao = document.querySelector(".pontuacao");
  pontuacao.textContent = segundos;
}

interEstrela = setInterval(atualizarEstrela, 1000);
interCont = setInterval(atualizarContador, 1000);
interPont = setInterval(ExibPontuacao, 1);

function novoElemento(tagName, className) {
  const elemento = document.createElement(tagName)
  elemento.className = className
  return elemento
}

function Inimigo(){
  this.inimigo = novoElemento(img,inimigo);
  this.inimigo.src = 'img/luid.png'
}

function QuantEstrelas(){
  this.quantEstrela = estrelas =>{
    document.getElementById('estrelas').innerHTML = estrelas;
  }
  this.quantEstrela = 10;
}
function QuantPontos(){
  this.quantPontos = ponto =>{
    document.getElementById('pontuacao').innerHTML = ponto;
  }
  this.quantPontos = 0;
}
function MoveEstrela(x, y, velocidade) {
  this.star = document.createElement("img");
  this.star.src = "img/estrela.png";
  this.star.style.position = "absolute";
  this.star.style.left = x + "%";
  this.star.style.bottom = y + "px";
  this.velocidade = velocidade;
  var gameBoard = document.getElementById("game-board");
  gameBoard.appendChild(this.star);

  this.mover = function() {
    var self = this;
    setInterval(function() {
      var novaPosicaoY = parseInt(self.star.style.bottom) - self.velocidade;
      if(novaPosicaoY ==50){
        divElement.parentNode.removeChild(this);
      }
      self.star.style.bottom = novaPosicaoY + "px";
    }, 100);
  };
}
function MoveInimigo(x, y, velocidade) {
  this.inim = document.createElement("img");
  this.inim.src = "img/luid.png";
  this.inim.style.position = "absolute";
  this.inim.style.left = x + "%";
  this.inim.style.bottom = y + "%";
  this.velocidade = velocidade;
  var gameBoard = document.getElementById("game-board");
  gameBoard.appendChild(this.inim);

  this.mover = function() {
    var self = this;
    setInterval(function() {
      var novaPosicaoY = parseInt(self.inim.style.bottom) - self.velocidade;
      if(novaPosicaoY ==50){
        divElement.parentNode.removeChild(this);
      }
      self.inim.style.bottom = novaPosicaoY + "%";
    }, 200);
  };
}

var moveEstrela = new MoveEstrela(30, 100, 5);
moveEstrela.mover();

var moveInimigo = new MoveInimigo(40, 100, 5);
moveInimigo.mover();