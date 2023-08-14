// // Task 1
// const prompt = require('prompt-sync')();
// let n = prompt(" n = ")

//     let remainder = n%2;
//     if
//     (remainder==1){ 
//     n++; 
//     }
//     console. log (n);

// // // end

// let num =18;
// if (num%6==0){
// console.log('Divisible by 6');
// }
// else if (num%3==0){
// console.log( 'Divisible by 3');
// }
// else if (num%2==0){
// console.log('Divisible by 2');
// }
// else {
// console.log('Not divisible 2,3 and 6');
// }

//Task 4

// const prompt = require('prompt-sync')();
// let n = prompt(" n = ")
// let m = prompt(" m = ")
// if (m > n) {
//     console.log(m+" is Larger");
//   } else if (m < n) {
//     console.log(m+" is Smaller");
//   } else {
//     console.log("both Equal");
//   }

//Task 2
// function checkPositiveNumber(n) {
//     if (n > 0) {
//       console.log(n+ ":Positive Number");
//     } else {
//       console.log( n +":Not a Positive Number");
//     }
//   }
  
//   checkPositiveNumber(5);  
//   checkPositiveNumber(-3);  
//   checkPositiveNumber(0);  
  
// // task 3
// function checkMultipleOfTen(n) {
//     if (n % 10 === 0) {
//       console.log("Multiple of 10");
//     } else {
//       console.log("Not a Multiple of 10");
//     }
//   }
  
//   checkMultipleOfTen(30);
//   checkMultipleOfTen(17);
//   checkMultipleOfTen(100);


// // task 5

// function check(n) {
//     let result = "";
//     for (let i = 2; i <= 5; i++) {
//       if (n % i === 0) {
//         result += i + ": yes \n"; 
//       } else {
//         result += i + ": no \n";
//       }
//     }
//     console.log(result);
//   }
  
//   check(15);  
  
  
//Task 6
// for (let i = 1; i <= 15; i++) {
//     if (i % 5 === 0) {
//       console.log("Hello");
//     } else {
//       console.log(i);
//     }
//   }

// Task 7

// function displayParity(n) {
//     let output = "";
  
//     for (let i = 1; i <= n; i++) {
//       output += i + ": " + (i % 2 === 0 ? "even" : "odd");
  
//       if (i !== n) {
//         output += ", ";
//       }
//     }
  
//     console.log(output);
//   }
  
//   displayParity(3); 
//   displayParity(6); 
//   displayParity(1); 

//Task 8
// function display(n) {
//   let str = "";

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       if (str !== "") {
//         str += ", ";
//       }
//       str += i;
//     }
//   }

//   console.log(str);
// }

// display(12);
// display(17);
// display(25);


// Task 9

// function check(n) {
//   for (let i = 1; i <= n; i++) {
//     const square = i * i;
//     const isOdd = square % 2 !== 0;

//     let message = "Square of " + i + " = " + square + " : ";
//     if (isOdd) {
//       message += "odd";
//     } else {
//       message += "even";
//     }

//     console.log(message);
//   }
// }

// // Test the function
// check(5);

// Task 10
// function printGrade(n) {
//     if (n >= 75) {
//       console.log("Good");
//     } else if (n >= 50 && n < 75) {
//       console.log("Average");
//     } else {
//       console.log("Poor");
//     }
//   }
  
//   printGrade(80);   
//   printGrade(65);   
//   printGrade(40);   
  
// // Task 11
// function printGrade(n) {
//     if (n >= 90 && n <= 100) {
//       console.log("Grade A");
//     } else if (n >= 75 && n < 90) {
//       console.log("Grade B");
//     } else if (n >= 50 && n < 75) {
//       console.log("Grade C");
//     } else {
//       console.log("Grade D");
//     }
//   }
//   printGrade(95);
//   printGrade(82);
//   printGrade(68);
//   printGrade(40);
  
// Task 12
// function Displayptn(n) {
//   let pattern = "";
//   let letter = "";

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       if (letter === "") {
//         pattern += "X";
//         letter = "Y";
//       } else if (letter === "Y") {
//         pattern += "X";
//         letter = "X";
//       } else if (letter === "X") {
//         pattern += "Y";
//         letter = "Y";
//       }
//     }
//     pattern += "\n";
//   }
//   console.log(pattern);
// }

// Displayptn(3);
// Displayptn(1);
// Displayptn(2);

// Task 12 redo 

// function Displayptn(n) {
//   let pattern = "";

//   for (let i = 0; i < n; i++) {
//     if (i % 2 == 0){
//       pattern += "X"
//     }
//     else{
//       pattern += "Y"
//     }  
//     console.log(pattern);
//     }
//     console.log("..............")
// }

// Displayptn(3);
// Displayptn(1);
// Displayptn(2);

//Task 13
// function displayPattern(n) {
//   let pattern = "";
//   let alphabet = "ABC";

//   for (let i = 0; i < n; i++) {
//     pattern += alphabet[i % alphabet.length];
//   }

//   console.log(pattern);
// }

// displayPattern(4);
// displayPattern(6);
// displayPattern(10);

// //Task 14

// function displayPattern(n) {
//   let pattern = "";
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 1) {
//       pattern += "P" + i;
//     } else if (i % 3 === 2) {
//       pattern += "Q" + i;
//     } else {
//       pattern += "R" + i;
//     }
//   }

//   console.log(pattern);
// }

// displayPattern(4);
// displayPattern(6);
// displayPattern(3);
// displayPattern(1);

// //Task 15
// function printPattern(n) {
//   let pattern = "";
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//       pattern += i;
//       if (i !== n && i !== n - 1) {
//         pattern += "#";
//       }
//     }
//   }
//   console.log(pattern);
// }

// printPattern(9);
// printPattern(3);
// printPattern(2);

// //Task 16

// function printPattern(n) {
//     let pattern = "-1";
//     let sign = -1;
  
//     for (let i = 2; i <= n; i++) {
//       if (sign === -1) {
//         pattern += "-" + i;
//       } else {
//         pattern += "+" + i;
//       }
//       sign *= -1;
//     }
  
//     console.log(pattern);
//   }

// printPattern(6);
// printPattern(5);
// printPattern(2);

// // Task 17
// function PatternAndSum(n) {
//   let pattern = "-1";
//   let sign = -1;
//   let sum = -1;

//   for (let i = 2; i <= n; i++) {
//     if (sign === -1) {
//       pattern += "-" + i;
//       sum -= i;
//     } else {
//       pattern += "+" + i;
//       sum += i;
//     }
//     sign *= -1;
//   }

//   pattern += " = " + sum;
//   console.log(pattern);
// }

// PatternAndSum(3);
// PatternAndSum(6);
// PatternAndSum(9);

// //Task 18
// function printPattern(n) {
//   let pattern = "";
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0) {
//       pattern += "x";
//     } else {
//       pattern += i;
//     }
//   }
//   console.log(pattern);
// }

// printPattern(3);
// printPattern(7);

// // Task 18
// function printPattern(n) {
//   let output = '';

//   for (let i = n; i >= 1; i--) {
//     if (i % 3 === 0) {
//       output += 'x';
//     } else {
//       output += i;
//     }
//   }

//   console.log(output);
// }

// printPattern(7);

// //Task 19 
// function printDivideNumbers(n) {
//   let dr = 'Divide: ';
//   let ndr = 'Not Divide: ';

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       dr += i;
//       if (i !== n) {
//         dr += '#';
//       }
//     } else {
//       ndr += i;
//       if (i !== n) {
//         ndr += '#';
//       }
//     }
//   }
//   console.log(dr);
//   console.log(ndr);
// }

// printDivideNumbers(9);
// printDivideNumbers(4);
// printDivideNumbers(2);

// Task 20
function calculate(n) {
  let sum = 0;
  
  for (let i = 1; i <= 4; i++) {
    let lastDigit = n % 10;
    sum += lastDigit;
    n = (n - lastDigit) / 10;
  }
  
  console.log(sum);
}

calculate(2456); 
calculate(1001); 
calculate(9999); 
calculate(1234); 

