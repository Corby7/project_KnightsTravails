import Graph from "./graph.js";

window.knightMoves = function (start, end) {
  const graph = new Graph();
  return graph.knightMoves(start, end);
};

const graph = new Graph();

console.log(graph.getVertex([0, 0]));

console.log(graph.knightMoves([3, 3], [4, 3]));
