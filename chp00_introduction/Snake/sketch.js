function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(32);
  fill(50, 100, 50);
  rect(width / 2, height / 2, 30, 30);

  
  fill(50, 255, 50);
  translate(0, -100);
  rect(width / 2, height / 2, 30, 30);
}
