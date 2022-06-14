const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  Player.constructor.draw();
}
function keyPressed() {
  if (LEFT_ARROW) {
    this.col -= 1;
  }
  if (RIGHT_ARROW) {
    this.col += 1;
  }
  if (UP_ARROW) {
    this.row += 1;
  }
  if (DOWN_ARROW) {
    this.row += 1;
  }
}
