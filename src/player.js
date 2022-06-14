class Player {
  constructor(col, row, playerNumber, span) {
    if (!playerNumber === 1 && !playerNumber === 2) {
      throw new Error("shit");
    }
    this.col = col;
    this.playerNumber = playerNumber;
    this.span = span;
    //we use the span to change the score dynamically
    this.row = row;
    this.score = 0;
    this.directions = DIRECTIONS[playerNumber];
    this.movementDirection = "down";
  }

  draw() {
    push();
    if (this.playerNumber === 2) {
      tint(255, 150, 150, 255);
    }
    image(
      PLAYER_DIRECTION_IMAGE[this.movementDirection],
      this.col,
      this.row,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
    this.span.innerText = this.score;
    noTint();
    pop();
  }
  move(key) {
    if (key === this.directions.up) {
      if (this.row > 0) {
        this.row -= SQUARE_SIDE;
      }
      this.movementDirection = "up";
    } else if (key === this.directions.down) {
      if (this.row < HEIGHT - SQUARE_SIDE) {
        this.row += SQUARE_SIDE;
      }
      this.movementDirection = "down";
    } else if (key === this.directions.left) {
      if (this.col > 0) {
        this.col -= SQUARE_SIDE;
      }
      this.movementDirection = "left";
    } else if (key === this.directions.right) {
      if (this.col < WIDTH - SQUARE_SIDE) {
        this.col += SQUARE_SIDE;
      }
      this.movementDirection = "right";
    }
  }
}
