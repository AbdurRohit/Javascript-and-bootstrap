//task 3 a
const numbers = [1, 3, 4, 7, 8, 9, 10];

const firstEven = numbers.find((number) => number % 2 === 0);

console.log(firstEven); 
const numbers1 = [10, 20, 30, 40, 50];

const firstIndexGreaterThan25 = numbers1.findIndex((number) => number > 25);

console.log(firstIndexGreaterThan25); 
//c
const numbers2 = [3, 5, 9, 12, 15, 18];

const notDivisibleBy3 = numbers2.filter((number) => number % 3 !== 0);

console.log(notDivisibleBy3); 
//d
const numbers4 = [5, 3, 9, 1, 7];

const sortedAscending = numbers.sort((a, b) => a - b);

console.log(sortedAscending);
//e
const numbers5 = [5, 3, 9, 1, 7];
const sortedDescending = numbers5.sort((a, b) => b - a);
console.log(sortedDescending);
//f
const numbers6 = [2, 4, 6, 8, 10];

const doubledNumbers = numbers6.map((number) => number * 2);

console.log(doubledNumbers); 
//g
const numbers7 = [1, 2, 3, 4, 5];

const sumOfSquares = numbers7.reduce((accumulator, number) => accumulator + (number ** 2), 0);

console.log(sumOfSquares); 
