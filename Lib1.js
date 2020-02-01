function spawnMouse (){
  if (World.frameCount%60===0){
    mouse1 = createSprite (100,0,20,20);
    mouse1.shapeColor = "green";
    mouse2 = createSprite (1000,0,20,20);
    mouse2.shapeColor = "green";
    r = Math.round(random(1,5));

    mouse1.velocityY=r+2;
    mouse2.velocityY=r+3;
    mouse1.lifetime = 100;
    mouse2.lifetime = 100;
mouseGroup.add(mouse1);
mouseGroup.add(mouse2);

  }
}