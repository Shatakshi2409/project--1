var cat,dog,mouse;
var gameState="play";
var score = 0;
function setup() {
  createCanvas(1200,600);

cat=createSprite(550,550,50,50);
cat.shapeColor="red";
dogGroup=new Group();
mouseGroup = new Group();
gameOver=createSprite(600,300,50,50);
restart=createSprite(600,400,50,50);
gameOver.visible=false;
restart.visible=false;
}

function draw() {
  background(0,0,0);  
  createEdgeSprites();
  text("Score: "+score,50,50);
  if (gameState === "play"){

  
  //cat.bounceOff(leftEdge);
cat.x=World.mouseX;
cat.y=World.mouseY;
//console.log(cat.x)

spawnDog();
spawnMouse();
if (mouseGroup.isTouching(cat)){
  score+=10;
}
if (dogGroup.isTouching(cat)){
//gameState = "end";
score-=5;


}
if (dogGroup.isTouching(cat)&& score===0){
  gameState = "end";
}
  }
  else if (gameState === "end"){
dogGroup.setVelocityYEach(0);
mouseGroup.setVelocityYEach(0);
cat.x=600;
cat.y=550;
dogGroup.setLifetimeEach(-2);
mouseGroup.setLifetimeEach(-2);
  gameOver.visible=true;
restart.visible=true;

if(mousePressedOver(restart)){
  reset();
}
}

  console.log(gameState)
  drawSprites();
}

