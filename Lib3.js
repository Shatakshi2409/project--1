function reset (){
    gameState = "play";
    dogGroup.destroyEach();
    mouseGroup.destroyEach();
    gameOver.visible=false;
    restart.visible=false;
} 