const add = function (a, b) {
  return a + b;
};

const add1 = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const square = (num) => num * num;
const double = (num) => num * 2;

const getRandomNumber = () => Math.random();

const getTime = () => new Date().toLocaleTimeString();
const getUser = () => {
  return {
    name: "John",
    age: 25,
    email: "john@example.com"
  };
};
const getProduct = () => ({ name: "iPhone", price: 999 });
const greeting = function (name) {
  console.log('Hello', name);
};

greeting("Alice"); 
