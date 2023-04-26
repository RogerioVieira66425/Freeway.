// Personagem do jogo


// Código do Personagem
let xAtor =  85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

// Código para mostrar o Personagem
function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

// Código para movimentar o Personagem
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
    
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
      yAtor += 3;
    }
  }
}

// Código para verificar Colisão
function verificarColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarro[i],yCarro[i],diametro,altura,xAtor,yAtor,15)
    if (colisao){ 
      voltaAtorParaPosisaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

// Código para voltar o Personagem
function voltaAtorParaPosisaoInicial(){
  yAtor = 366
}

// Código do Placar
function incluiPonto(){
  textAlign(CENTER)
  textSize(25)
  fill(255, 240, 60)
  text(meusPontos, width / 5, 26)
}

// Código para marcar os Pontos
function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosisaoInicial()
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;

}
