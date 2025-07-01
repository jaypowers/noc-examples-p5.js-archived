// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let startX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
  colorMode(HSB, 255);
}

function draw() {
  background(32);

  const addingX = map(mouseY, 0, height, 0.01, 0.1);
  const detail = map(mouseX, 0, width, 0, 32);
  let xOff = startX;

  noiseDetail(detail);

  beginShape();
  for (let i = 0; i < width; i++) {
    vertex(i, noise(xOff) * height);
    stroke(xOff * 255 % 255, 255, 255);
    xOff += 0.01;
  }
  endShape();

  startX += addingX;
}
