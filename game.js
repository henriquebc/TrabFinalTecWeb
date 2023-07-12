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

function novoElemento(tagName, className) {
  const elemento = document.createElement(tagName)
  elemento.className = className
  return elemento
}

function Inimigo(){
  this.inimigo = novoElemento('img','inimigo');
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
  this.star = novoElemento('img','inimigo');
  this.star.src = 'img/luid.png'
  this.star.style.position = "absolute";
  this.star.style.left = x + "%";
  this.star.style.bottom = y + "px";
  this.getX = () => parseInt(this.star.style.bottom.split('px')[0])
  this.setX = x => this.star.style.bottom = `${x}px`
  this.getY = () => parseInt(this.star.style.left.split('px')[0])
  this.setY = y => this.star.style.left = `${y}px`
  this.velocidade = velocidade;
  var gameBoard = document.getElementById("game-board");
  gameBoard.appendChild(this.star);
  var self = this
  this.mover = function() {
    setInterval(function() {
      var novaPosicaoY = self.getY()- self.velocidade;
      self.getX(novaPosicaoY)
    }, 100);
  };
}

var moveEstrela = new MoveEstrela(30, 100, 5);
moveEstrela.mover();


if (moveEstrela.getY() === 50) {
  moveEstrela.star.parentNode.removeChild(moveEstrela.star);
  console.log(moveEstrela.getY());
}

var moveInimigo = new MoveInimigo(40, 100, 5);
moveInimigo.mover();



function MoveInimigo(x, y, velocidade) {
  this.inim = document.createElement("img");
  this.inim.style.width = 40+'px'
  this.inim.src = "img/luid.png";
  this.inim.style.position = "absolute";
  this.inim.style.left = x + "%";
  this.inim.style.bottom = y + "%";
  this.velocidade = velocidade;
  this.getY = () => parseInt(this.inim.style.bottom.split('px')[0])
  var gameBoard = document.getElementById("game-board");
  gameBoard.appendChild(this.inim);

  this.mover = function() {
    var self = this;
    setInterval(function() {
      var novaPosicaoY = parseInt(self.inim.style.bottom) - self.velocidade;
      self.inim.style.bottom = novaPosicaoY + "%";
    }, 200);
  };
}

//sobreposição
function overlap(Elemento1, Elemento2) {

  const a = Elemento1.getBoundingClientRect()
  const b = Elemento2.getBoundingClientRect()

  const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
  const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

  return horizontal && vertical
}