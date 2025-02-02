import Vertex from "./vertex.js";

export default class Graph {
  constructor() {
    // Initialize board (graph) with vertices
    this.board = Array(8)
      .fill()
      .map(() => Array(8).fill(null));
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.board[i][j] = new Vertex([i, j]);
      }
    }
  }

  getVertex(position) {
    const [x, y] = position;
    return this.board[x][y];
  }

  // Use Breadth first search to find shortest route
  findShortestRoute(startingPosition, destinationPosition) {
    const queue = [[startingPosition]]; // Queue of paths rather than single positions
    const visited = new Set([JSON.stringify(startingPosition)]);

    while (queue.length > 0) {
      const currentPath = queue.shift();
      const currentPosition = currentPath[currentPath.length - 1];

      // Check if we've reached the destination
      if (
        JSON.stringify(currentPosition) === JSON.stringify(destinationPosition)
      ) {
        return currentPath;
      }

      // Get valid moves from current position
      const currentVertex = this.getVertex(currentPosition);

      for (const nextPosition of currentVertex.validMoves) {
        const nextPosKey = JSON.stringify(nextPosition);

        if (!visited.has(nextPosKey)) {
          visited.add(nextPosKey);
          queue.push([...currentPath, nextPosition]);
        }
      }
    }

    return null; // No path found
  }

  // Main interface method
  knightMoves(start, end) {
    const path = this.findShortestRoute(start, end);

    if (!path) {
      return "No valid path found";
    }

    let output = `=> You made it in ${
      path.length - 1
    } moves! Here's your path:`;
    path.forEach((position) => {
      output += ` [${position[0]},${position[1]}]`;
    });

    return output;
  }
}
