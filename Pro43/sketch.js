var main, backgroundImage, lava, coin, gameover

function setup() {
  createCanvas(800,400);
  coin = createSprite(400, 200, 50, 50);
  lava = createSprite(400, 200, 50, 50);
  backgroundImage = createSprite(400, 200, 50, 50);
  gameover = createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}