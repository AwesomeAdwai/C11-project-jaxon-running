var runner, runner_running, edges;
var pathImage;
var path;
var leftBoundry, rightBoundry;

function preload(){
runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.scale=1.2;
  path.y=path.height/2;
  
  runner = createSprite(200, 340, 50, 50);
  runner.addAnimation("running", runner_running);
  edges = createEdgeSprites();

  runner.scale = 0.1;
  //runner.y = 500
  leftBoundry = createSprite(30, 200, 20, 400);
  leftBoundry.visible = false
}

function draw() {
  background("black");
  path.velocityY=2

 //console.log(path.y)

  runner.x = mouseX;

if(path.y>400){
  path.y=height/2;
}
runner.collide(leftBoundry);
  drawSprites();
  text(mouseX + ","+ mouseY,200,50);

  runner.collide(rightBoundry);
  drawSprites();
  text(mouseX + ","+ mouseY,370,200);
}

