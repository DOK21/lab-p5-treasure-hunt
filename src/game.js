class Game {
  drawGrid() {
    for (let i = 0; i < 11; i++) {
      line(0, SQUARE_SIDE * i, WIDTH, SQUARE_SIDE * i);
      line(SQUARE_SIDE * i, 0, SQUARE_SIDE * i, HEIGHT);
    }
    // Iteration 1

    // Draw the grid
    // https://p5js.org/reference/#/p5/line
  }
}
