const numbers1 = [1, 2, 3, 4];
const numbers2 = [5, 6, 7, 8];

const numbers = [...numbers1, ...numbers2];
const square = (num) => num * num;

const squares = numbers.map(square);
const isEven = (num) => num % 2 === 0;
const evenSquares = squares.filter(isEven);

const [firstEvenSquare, secondEvenSquare] = evenSquares;

console.log(`Original numbers: ${numbers}`);
console.log(`Squares: ${squares}`);
console.log(`Even Squares: ${evenSquares}`);
console.log(`First Even Square: ${firstEvenSquare}`);
console.log(`Second Even Square: ${secondEvenSquare}`);
