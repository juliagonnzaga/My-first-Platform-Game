class Cenario {
  constructor(imagem,velocidade){
    this.image = imagem;
    this.velocidade = velocidade;
    this.x1 = 0; // o cenario começa no 0
    this.x2 = width; // e acaba no tamanho da imagem
  }
  
  exibe(){
    image(ImagemCenario, this.x1, 0, width, height);
    image(ImagemCenario, this.x2, 0, width, height);   
 }
  
  move(){//queremos mover o cenário no eixo x
    this.x1 = this.x1 -this.velocidade;
    this.x2 = this.x2 -this.velocidade;
    
      if(this.x1 < -width){
        this.x1 = width;
      }
      if(this.x2 < -width){
        this.x2 = width; 
      }
  }
}