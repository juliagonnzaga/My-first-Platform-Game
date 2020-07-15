let ImagemCenario;
let ImagemPersonagem;
let ImagemInimigo;
let SomDoPulo;

let AlturaPersonagem;
let cenario;
let musicaDoJogo;
let personagem;
let inimigo;

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]
const matrizPersonagem = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810],
    ] 
function preload(){
  ImagemCenario = 
    loadImage('imagens/cenario/floresta.png');
  ImagemPersonagem =
    loadImage('imagens/personagem/correndo.png');
  ImagemInimigo =
    loadImage('imagens/inimigos/gotinha.png');
  
  AlturaPersonagem = 135;
  musicaDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/Pulinho.mp3');
}

function setup() {//função setup: o que tem no jogo antes mesmo dele começar
  createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(ImagemCenario, 3);
    personagem = new Personagem(matrizPersonagem, ImagemPersonagem, 0, 110, 135, 220, 270);
    inimigo = new Inimigo(matrizInimigo, ImagemInimigo, width-52, 52, 52, 104, 104);
    frameRate(40);
    musicaDoJogo.loop();
}

function keyPressed(){
  if(key === 'ArrowUp'){
    personagem.pula();
    somDoPulo.play();
  }
}

function draw() {//quando eu quero desenhar alguma coisa na tela, qualquer animação
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigo.exibe();
  inimigo.move();
  
  if (personagem.estaColidindo(inimigo)) {
    console.log('colidiu')
    noLoop()
  }
}


