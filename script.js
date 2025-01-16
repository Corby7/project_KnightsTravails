import Vertice from "./vertice.js";

console.log("hoi");

const leftUnder = new Vertice(0, 0);
const middle = new Vertice(3, 3);

console.log("Leftunder knight valid moves:");
console.log(leftUnder.validMoves);

console.log("Middle knight valid moves:");
console.log(middle.validMoves);
