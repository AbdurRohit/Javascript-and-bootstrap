// // #2 Task 1 
// console.log("***** Task 1 - a *****")  
// for(let i = 0; i<3; i++)
// {
//     console.log(i)    
// }
// // END
// console.log("***** Task 1 - b *****") 
// for (let j = 0; j<3; j++)
// {
//     console.log("Hello World");
// }
// // END Program
// console.log("***** Task 1 - c)i *****") 
// for(let i = 0; i<7; i++)
// {
//     console.log("Count = ",i);
// }
// //end of code
// console.log("***** Task 1 - c)ii *****") 
// let str = 'A'
// for (let i=0;i<4; i++){
// str = str + 'A';
// console. log(str);
// }
// //end of code
// console.log("***** Task 1 - c)iii *****") 
// let strr = ''
// for (let i=1;i<=5; i++){
// strr = strr + i;
// console. log(strr);
// }
// //end of code
// console.log("***** Task 1 - c)iv *****") 
// let limit = 10; // Define the limit of the table

// for (let i = 1; i <= limit; i++) {
//   let result = 3 * i;
//   console.log("3 * " + i + " = " + result);
// }

// // Using a for loop, display the numbers from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }

// //Using a for loop, display Javascript 6 times. 
// for (let j = 0; j<6; j++)
// {
//     console.log("Javascript");
// }

// //Using a for loop, display the output as shown below EmployeeId::1EmployeeId::2EmployeeId::3EmployeeId::4EmployeeId::5
// for(let i = 1; i<6; i++)
// {
//     console.log("EmployeeId :: ",i);
// }
// Using a for loop, display the numbers from 1 to 11 along with their cube. For e.g. if the number is 4, the output should look likenumber=4, cube=64
// for (let number = 1; number <= 11; number++) {
//     let cube = number * number * number;
//     console.log("number=" + number + ", cube=" + cube);
//   }
  
// //Task 6
// for (let i = 1; i <= 10; i++) {
//     let number1 = i;
//     let number2 = i * 10;
//     let number3 = i * 20;
   
//     console.log(number1 + "  " + number2 + "  " + number3);
//   }
//   console.log('............\n')
// //Task 7
// for (let i = 1; i <= 8; i++) {
//     let number1 = i;
//     let number2 = i + 10;
//     let number3 = i + 100;
//     let number4 = i + 1000;
  
//     console.log(number1 + "  " + number2 + " " + number3 + " " + number4);
// }

// Task 13

// const prompt = require('prompt-sync')();
//     let n = prompt(" n = ")
//     let output = "";
//       for (let i = 1; i <= n; i++) {
//       let number = (i - 1) * 2 + 1;
//       output += "XY" + number;
  
//       if (i !== n) {
//         output += number + 1;
//       }
//     }

//   console.log(output)
//   console.log('____________________________\n')
 

// Task 14

// const prompt = require('prompt-sync')();
//     let n = prompt(" n = ")
//     let pattern = "";
//     let symbol = "";

//   for (let i = 1; i <= n; i++) {
//     symbol = symbol + '@'; 
//     pattern += i + symbol;
//   }
//   console.log(pattern);
//   console.log('____________________________\n')
  
// Task 15

// const prompt = require('prompt-sync')();
// let n = prompt(" n = ")
// let pattern = "";
// let currentChar = "M";
// let tempPattern = "";

// for (let i = 1; i <= n; i++) {
//   tempPattern += currentChar;
//   pattern += tempPattern;

//   if (i !== n) {
//     pattern += "+";
//     currentChar += "M";
//   }
// }
// console.log(pattern);
// console.log('____________________________\n')

// Task 16
// const prompt = require('prompt-sync')();
// let n = prompt(" n = ")
// let pattern = 1;
// for (let i = 1; i <= n; i++) {
//   pattern = i * 3;
//   console.log(pattern);
// }

// Task 18
// const prompt = require('prompt-sync')();
// let n = prompt(" n = ")
// let num = n;

// for (i = 1; i<=n ; i++){
//   console.log(num)
//   num = num - 1;
  
// }

// // Task 19
// const prompt = require('prompt-sync')();
// let n = prompt(" n = ")
// let num = n;
// let m = 0;

// for (i = 1; i<=n ; i++){
//   m = (m * 10) + num;
//   num = num - 1;
// }
// console.log(m);