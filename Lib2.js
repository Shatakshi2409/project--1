function spawnDog (){
  if (World.frameCount%40===0){
    dog1 = createSprite (300,0,20,20);
    dog1.shapeColor = "blue";
    dog2 = createSprite (700,0,20,20);
    dog2.shapeColor = "blue";
    r = Math.round(random(1,5));

    dog1.velocityY=r+2;
    dog2.velocityY=r+3;
    dog1.lifetime = 100;
    dog2.lifetime = 100;
    dogGroup.add(dog1);
    dogGroup.add(dog2);

  }
}