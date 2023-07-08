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

// Cria um novo elemento <div>
var rua = novoElemento('img','rua');
rua.style.src = 'img/bloco.png';

  
var posX = 80;
var posY = 50;
rua.style.right = posX + "%";
rua.style.bottom = posY + "%";

// Adiciona a <div> à <section>
element.appendChild(rua);


//atualiza estrelas

var estrela = document.querySelector(".estrelas")

var quant = 10;

function atulizarEstrela(){
  quant--;
  estrela.textContent = quant;
  if(quant<0){
    alert("A cabaram as suas estrelas."+'--pontuação '+segundos)
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




