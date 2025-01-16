export default class Vertice {
  constructor(x, y) {
    this.position = [x, y];
    this.validMoves = this.findValidMoves();
  }

  findValidMoves() {
    const validMoves = [];

    const movePatterns = [
      [2, 1],
      [1, 2],
      [2, -1],
      [1, -2],
      [-2, 1],
      [-1, 2],
      [-2, -1],
      [-1, -2],
    ];

    for (const [dx, dy] of movePatterns) {
      const newX = this.position[0] + dx;
      const newY = this.position[1] + dy;

      //Validate if new position is still on board
      if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
        validMoves.push([newX, newY]);
      }
    }

    return validMoves;
  }
}
