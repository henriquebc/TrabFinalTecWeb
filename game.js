// armazena a quantidade de estrtelas que servirão de combustível
var estrelaRestante = 10;
//armazena o numero de estrelas capturadas para exibir no fim do jogo
var quantEstrelas = 0;
//armazena quantidade de segundos passados para atualizar a pontuação
var segundos = 0;
//armazena a dic com ID kart na variável kart
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
    posIX = Math.floor(Math.random() * (60 - 32 + 1)) + 32;

  }//para evitar que sejam geradas duas posições iguais e garantir que tenham uma diferença de 10% uma da outra
  while(Math.abs(posIX-posEX)<10)
  //atribui as posições as classes  ".combust-estrela" e ".inimigo"
  combusEstrela.style.left = posEX + "%";
  inimigo.style.left = posIX  + "%";
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
  if(posXK==posXE && posYK == posYI){
    inimigoColide()
    //caso contrário verifica se o inimigo parou de ser exibido na div game-board que é quando ele está na posição -50 = -seu próprio height
  }else if(posYI==-50){
    inimigoUltrapassa()
  }

}, 10);





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