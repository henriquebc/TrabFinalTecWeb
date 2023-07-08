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



