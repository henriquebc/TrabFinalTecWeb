//movimentação personagem
// Obtém referência para o kart
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
function novoElemento (tagName, className) {
  const elemento = document.createElement(tagName);
  elemento.className = className;
  return elemento;
};


var element = document.getElementById("game-board");


function gerarEstrela(){
  var star = novoElemento('img','combust-estrela');
  star.src = 'estrela.png';
  star.style.width = 50 +'px';

  
  var posX = 20;
  var posY = 100;
  star.style.right = posX + "%";
  star.style.bottom = posY + "%";

  // Adiciona a <div> à <section>
  element.appendChild(star);
}

var setGerarEstrela = setInterval(gerarEstrela, 5000);

var quant = 100;

function atulizarEstrela(){
  quant--;
  var estrela = document.querySelector(".estrelas")
  estrela.textContent = quant;
  if(quant<0){
    alert("A cabaram as suas estrelas."+'--pontuação '+segundos+'estrelas capturadas')
    clearInterval(interEstrela)
    clearInterval(interCont)
    window.location.reload();
  }
}

//atualia a pontuação acada 1 segundo após o jogo inicar
var pontuacao = document.querySelector(".pontuacao");
var segundos = 0;

function atualizarContador() {
  segundos++;
  pontuacao.textContent = segundos;
}
interEstrela = setInterval(atulizarEstrela, 1000);
interCont = setInterval(atualizarContador, 1000);



//atualizando caminho

var rua = document.querySelector(".rua")
var rua1 = document.querySelector(".rua1")
var rua2 = document.querySelector(".rua2")
var rua3 = document.querySelector(".rua3")
var rua4 = document.querySelector(".rua4")
var rua5 = document.querySelector(".rua5")
var rua6 = document.querySelector(".rua6")
var rua7 = document.querySelector(".rua7")
var rua8 = document.querySelector(".rua8")
var rua9 = document.querySelector(".rua9")

//combustivel

var estrela = document.document.querySelector(".combust-estrela");