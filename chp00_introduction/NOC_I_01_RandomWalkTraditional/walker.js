class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    strokeWeight(2);
    this.col = 0;
  }

  render() {
    stroke(this.col, 100, 100);
    point(this.x, this.y);
  }

  step() {
    let choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
    this.col ++; // Increment color value for noise
  }
}