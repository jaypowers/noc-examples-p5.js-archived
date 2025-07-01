// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
let bright;
let mycolor;
let xoff = 0.0; // x-offset for perlin noise
let yoff = 0.0; // y-offset for perlin noise

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
}

function draw() {
  // Tell p5 we will work with pixels
  loadPixels();

  // Updating pixels with perlin noise
  for (let x = 0; x < width; x++) {
    yoff = 0.0;

    for (let y = 0; y < height; y++) {
      // Calculating brightness value for noise
      bright = map(noise(xoff, yoff), 0, 1, 0, 255);
      mycolor = color(bright, 100, 150); // Creating a color with brightness
      set(x, y, mycolor);
      yoff += 0.01; // Incrementing y-offset perlins noise
    }
    xoff += 0.01; // Incrementing x-offset perlins noise
  }

  updatePixels();
  xoff += 0.01; // Incrementing x-offset perlins noise for next frame
}