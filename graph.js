import Vertex from "./vertex.js";

export default class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(boardPosition) {
    if (!this.adjacencyList[boardPosition]) {
      this.adjacencyList[boardPosition] = new Vertex(boardPosition);
    }
  }

  // Add all boardpositions (8 x 8) to adjacency list
  addAllBoardPositionsAsVertexes() {
    const boardPositions = [];
    for (let i = 0; i <= 7; i++) {
      for (let j = 0; j <= 7; j++) {
        boardPositions.push([i, j]);
      }
    }

    boardPositions.forEach((boardPosition) => {
      this.addVertex(boardPosition);
    });
  }

  // Use Breadth first search to find shortest route
  findShortestRoute(startingPosition, destinationPosition) {
    const visited = new Set();
    const queue = [startingPosition];
    visited.add(startingPosition);

    while (queue.length > 0) {
      const currentBoardPosition = queue.shift();

      const currentVertex = this.adjacencyList[currentBoardPosition];
      currentVertex.validMoves.forEach((boardPosition) => {
        if (!visited.has(JSON.stringify(boardPosition))) {
          visited.add(JSON.stringify(boardPosition));
          queue.push(boardPosition);
        }
      });
    }
  }
}
