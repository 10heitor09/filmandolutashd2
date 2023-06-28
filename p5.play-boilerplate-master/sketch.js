var gameState = 'start';
var botaoImg, botao;
var espaço
var noggers
var jorge
var nome
function preload(){
nomeImg = loadImage("filmandolutashd.png")
botaoImg = loadImage("start.png");
espaçoImg = loadImage("espaço.png");
noggersImg = loadImage("noggers.png");
jorgeImg = loadImage("jorge.png");
}

function setup() {
  createCanvas(800,800);
  nome = createSprite(400, 200, 100, 700);
  nome.addImage(nomeImg);
  nome.scale = 3.0
  botao = createSprite(400, 400, 50, 50);
  //add a imagem
  botao.addImage(botaoImg);
  botao.scale = 0.3

  espaço = createSprite(398,255,255,255)
 espaço.addImage(espaçoImg)
 espaço.scale = 1.1
 espaço.visible = false

  noggers = createSprite(559,255,255,255)
  noggers.addImage(noggersImg)
  noggers.scale = 0.2
  noggers.visible = false
  
  jorge = createSprite(69,255,255,255)
  jorge.addImage(jorgeImg)
  jorge.scale = 0.1
  jorge.visible = false

}

function draw() {
  background(255,255,255);  
  drawSprites();


if(gameState=='start'){
if(mousePressedOver(botao)){
 botao.visible = false
  gameState='play';
 }
 if(mousePressedOver(nome)){
  nome.visible = false
  gameState='play'
 }





}

if(gameState=='play'){
 noggers.visible = true
 jorge.visible = true
 espaço.visible = true
noggers.x = 559
noggers.y = 255

if(mousePressedOver(noggers)){
noggers.visible = false
gameState='batlle1'
}

}

if(gameState=='batlle1'){
noggers.visible = true
if(keyDown("a")){
  noggers.x -= 5;
}

if(keyDown("d")){
  noggers.x += 5;
}

}



if(gameState=='batlle2'){


}

if(gameState=='end'){


}

}


