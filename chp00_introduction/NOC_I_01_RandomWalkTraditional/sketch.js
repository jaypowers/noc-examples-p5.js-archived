// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 255);
  walker = new Walker();
}

function draw() {
  // HSB background for rgb(32, 32, 32, 10)
  colorMode(RGB);
  background(32, 10);
  colorMode(HSB, 255);

  for (let i = 0; i < 500; i++) {
    walker.step();
    walker.render();
  }
}