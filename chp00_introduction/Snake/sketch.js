function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
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
    translate(-5, 0);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    translate(5, 0);
  }
  if (keyIsDown(UP_ARROW)) {
    translate(0, -5);
  }
  if (keyIsDown(DOWN_ARROW)) {
    translate(0, 5);
  }
}