var bg, bgImg;
var eraserImg, eraser;

var fear, fearImg;
var awful, awfulImg;
var brilliant, brilliantImg;
var champion, championImg;
var dazzling, dazzlingImg;
var fabulous, fabulousImg;
var fail, failImg;
var hate, hateImg;
var terrific, terrificImg;
var wonderful, wonderfulImg;

var positiveGroup, negativeGroup;
var positive, negative;




function preload(){
    bgImg = loadImage("images/bg.jpg");
    eraserImg = loadImage("images/eraser.png");
    fearImg = loadImage("images/fear.png");
    awfulImg = loadImage("images/awful.png");
    brilliantImg = loadImage("images/brilliant.png");
    championImg = loadImage("images/champion.png");
    dazzlingImg = loadImage("images/dazzling.png");
    fabulousImg = loadImage("images/fabulous.png");
    failImg = loadImage("images/fail.png");
    hateImg = loadImage("images/hate.png");
    terrificImg = loadImage("images/terrific.png");
    wonderfulImg = loadImage("images/wonderful.png");


    
}

function setup() {
  createCanvas(1200,800);
  bg = createSprite(600,400,1200,800);
  bg.addImage("bg.jpg",bgImg);
  bg.scale = 1.0;

  eraser = createSprite(400,600);
  eraser.addImage("e",eraserImg);
  eraser.scale = 0.4;

  positiveGroup = new Group();
  negativeGroup = new Group();

}
function draw() {
  background(0);  
  
  eraser.y = mouseY;
  eraser.x = mouseX;

  spawnPositiveWords();

  drawSprites();
}

function spawnPositiveWords(){
  if(frameCount % 80 === 0){
    positive = createSprite(random(50,1100),0);
    positive.velocityY = 7;

    var r=Math.round(random(1,6));
    if (r === 1) {
      positive.addImage(terrificImg);
    } else if (r === 2) {
      positive.addImage(wonderfulImg);
    } else if (r === 3) {
      positive.addImage(fabulousImg);
    } else if (r === 4){
      positive.addImage(dazzlingImg);
    } else if (r === 5){
      positive.addImage(championImg);
    } else{
      positive.addImage(brilliantImg);
    }

  }

}