// Carros do jogo


// Variavel do Carros
let xCarro = [600,600,600, 600,600,600]
let yCarro = [40,96,149,210,270,318]
let velocidadeCarros = [6,3,7,8,5,4]
let diametro = 50
let altura = 40

// Código para mostrar os Carros
  function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
      image(imagemCarros[i], xCarro[i], yCarro[i], diametro, altura);
    }
}

// Código para movimentar os Carros 
  function movimentaCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
      xCarro[i] -= velocidadeCarros[i];
    }
}

// Código para voltar os Carros para Posição Inicial
function voltarPosicaoInicial(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodoATela(xCarro[i])){
      xCarro[i] = 600
    }
  }
}

// Código para Verificar se os Carros passaram totalmente da Tela 
function passouTodoATela(xCarro){
  return xCarro < -50;
}