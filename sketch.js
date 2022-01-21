var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var bomb, bomby
var start, end;
var gameState = "start";
var Text, score;
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bomb = loadImage("bomb.png");
}
score = 0;
score("Deaths", 370, 30);
File("red");
function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
// leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //code to reset the background



  if(path.y > 500 ){
path.y = height/2;}


spawnClouds()

  drawSprites();
}


function spawnClouds(){ 
if (gameState == ("start")){
  if (frameCount %70 === 0){
  bomby=createSprite(200,-350,20,10);
  bomby.addImage(bomb);
  bomby.scale = 0.15;
  bomby.velocityY=5;
  bomby.x=(random(90, 380))
  if (bomby.isTouching(boy)){
    gameState = ("end");
  }
}
}
if (gameState == ("end")){
  Text("Game over", 200, 200);
}

}