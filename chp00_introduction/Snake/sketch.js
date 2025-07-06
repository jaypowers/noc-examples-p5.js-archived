let x, y;
let speed = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = 0;
  y = 0;

}

function draw() {
  update();

  background(32);
  fill(50, 100, 50);
  rect(width / 2, height / 2, 30, 30);

  
  fill(50, 255, 50);
  translate(0, -100);
  rect(width / 2, height / 2, 30, 30);
}

function update() {
  if (keyIsDown(LEFT_ARROW)) {
    x += speed;
    translate(-x, 0);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += -speed;
    translate(x, 0);
  }
  if (keyIsDown(UP_ARROW)) {
    y += speed;
    translate(0, -y);
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += -speed;
    translate(0, y);
  }
}