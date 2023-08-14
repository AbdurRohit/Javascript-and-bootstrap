//a
let num1 = 2;
let num2 = 3;
let num3 = 4;
let num4 = 5;
let num5 = 6;

let product = num1 * num2 * num3 * num4 * num5;

console.log(product);

//b
let numbers = [1, 2, 3, 4, 5, 6];
let target = 3;
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > target) {
    sum += numbers[i];
  }
}

console.log(sum);
//c
let product1 = {
    name: "Example Product",
    price: 100,
  };
  
  product1.discount = 10;
  product1.finalAmount = product1.price - product1.discount;

  console.log(product);
//d
let student = {
    name: "John Doe",
    marks: [80, 90, 85, 95],
  };
  
  let total = 0;
  for (let i = 0; i < student.marks.length; i++) {
    total += student.marks[i];
  }
  
  student.totalMarks = total;
  
  console.log(student);
  