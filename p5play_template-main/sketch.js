var sprite1; 
var sprite2;
function setup() {
  createCanvas(400,400);
  sprite1 = createSprite(200,200,30,30);
  sprite2 = createSprite(300,200,30,30)
  sprite2.velocityX=-2;
}

function draw() 
{
  background(30);
  if(keyIsDown(DOWN_ARROW)){
    sprite1.y = sprite1.y+5;
  }
  if(keyIsDown(UP_ARROW)){
    sprite1.y = sprite1.y-5;
  }
  if(keyIsDown(LEFT_ARROW)){
    sprite1.x = sprite1.x-5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    sprite1.x = sprite1.x+5;
  }
  if(sprite1.isTouching(sprite2)){
  sprite1.x=200;
  sprite1.y=200;
  }
  drawSprites();
}