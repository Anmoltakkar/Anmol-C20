var movRect,fixRect,r1,r2;
function setup() {
  createCanvas(800,400);
  fixRect=createSprite(200, 200, 50, 50);
  fixRect.shapeColor="green";
  movRect=createSprite(700, 200, 50, 50);
  movRect.shapeColor="green";
  r1=createSprite(50, 300, 50, 50);
  r1.shapeColor = "black"
  r1.velocityX = 2;
  r2=createSprite(350, 300, 50, 50);
  r2.shapeColor = "black"
  r2.velocityX = -2;
}

function draw() {
  background(255,255,255);
  movRect.x=World.mouseX;
  movRect.y=World.mouseY;
  
  /*if((movRect.x-fixRect.x)<(movRect.width/2+fixRect.width/2)&&
  (fixRect.x-movRect.x)<(movRect.width/2+fixRect.width/2)&&
  (movRect.y-fixRect.y)<(movRect.height/2+fixRect.height/2)&&
  (fixRect.y-movRect.y)<(fixRect.height/2+movRect.height/2)){
    movRect.shapeColor = "blue";
    fixRect.shapeColor= "blue";
  }
  else{
    fixRect.shapeColor="green";
    movRect.shapeColor="green";
  }*/
  if((r1.x-r2.x)<(r1.width/2+r2.width/2)&&
  (r2.x-r1.x)<(r1.width/2+r2.width/2)){
  r1.velocityX = r1.velocityX*(-1)
  r2.velocityX = r2.velocityX*(-1)
  }

  if((r1.y-r2.y)<(r1.height/2+r2.height/2)&&
  (r2.y-r1.y)<(r1.height/2+r2.height/2)){
  r1.velocityY = r1.velocityY*(-1)
  r2.velocityY = r2.velocityY*(-1)
  }

  drawSprites();
}