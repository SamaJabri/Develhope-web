const sum = (...nums) => nums.reduce((numOne, numTwo) => numOne + numTwo);

const numbers = [1, 2, 3];
console.log(sum(...numbers));