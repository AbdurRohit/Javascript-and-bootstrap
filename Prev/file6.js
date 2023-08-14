//task 1
// function lergeno(num1,num2)
// {
//     console.log("Parameters are = " ,num1,num2)
//     if(num2<=num1)
//     {
//         console.log("Largest: "+num1)
//     }
//     else{
//         console.log("Largest: "+num2)
//     }
// }
// lergeno(15,23)
// // lergeno(100,123)

// function add(a,b,c,d){
//     let sum = a+b+c+d
//     return sum
// }
// console.log(add(12,12,65,67))
// console.log(add(11,2,15,1237))
// //Task = 2
//task 2
// function sumNumber(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     console.log(sum);
//   }
  
//   sumNumber(2)
//   sumNumber(10)
//   sumNumber(20)
 
//Task 3
// function removeChar(str, char) {
//     let result = '';
  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] !== char) {
//         result += str[i];
//       }
//     }
  
//     console.log(result);
//   }
  
//   removeChar("moozoom", "m");
//   removeChar("abcaabca","a")
//   removeChar("abcd","a")
  
//Task 4
// function isRightAngledTriangle(a, b, c) {
//     if (a <= 0 || b <= 0 || c <= 0) {
//       console.log(false);
//       return;
//     }

//     if (a * a + b * b === c * c ||
//         a * a + c * c === b * b ||
//         b * b + c * c === a * a) {
//       console.log(true);
//       return;
//     }
//     console.log(false);
//   }
//   isRightAngledTriangle(6,8,10);
//   isRightAngledTriangle(12,13,5)
//   isRightAngledTriangle(5,3,4)
//   isRightAngledTriangle(8,14,24)
//Task 5
// function isTriangle(a, b, c) {
//     if (a <= 0 || b <= 0 || c <= 0) {
//       console.log(false);
//       return;
//     }
  
//     if (a + b > c && a + c > b && b + c > a) {
//       console.log(true);
//       return;
//     }
  
//     console.log(false);
//   }
  
//   isTriangle(5, 6, 7);
//   isTriangle(7, 2, 5)
//   isTriangle(6, 10, 3)
//   isTriangle(8, 14, 24)

// // t 6
// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     console.log(reversed);
//   }
  
//   // Example usage
//   reverseString("perfect");
//   reverseString("java")
//   reverseString("123456789")

// //Task 7
// function compareChar(str, char1, char2) {
//     let countChar1 = 0;
//     let countChar2 = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char1) {
//         countChar1++;
//       } else if (str[i] === char2) {
//         countChar2++;
//       }
//     }
  
//     if (countChar1 > countChar2) {
//       console.log(1);
//     } else if (countChar1 === countChar2) {
//       console.log(0);
//     } else {
//       console.log(-1);
//     }}

//   compareChar("moozoom","m","o");
//   compareChar("abcaabca","b","c");
//   compareChar("abcdefgh","3","4");
//Task 8
// function hasEqualBrackets(str) {
//     let count = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === "(") {
//         count++;
//       } else if (str[i] === ")") {
//         count--;
//       }
  
//       if (count < 0) {
//         console.log(false);
//         return;
//       }
//     }
  
//     console.log(count === 0);
//   }
  
//  hasEqualBrackets("(a+b+(c+d*e)-(d+e*f))+3")
//  hasEqualBrackets("5+(((a+b)*c)+d+e)-7")
//  hasEqualBrackets("(a+b))+(c")
//Task 9
// function isGoodExpression(str) {
//     let count = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === "(") {
//         count++;
//       } else if (str[i] === ")") {
//         if (count === 0) {
//           console.log(false);
//           return;
//         }
//         count--;
//       }
//     }
  
//     console.log(count === 0);
//   }
  
//   isGoodExpression("(a+b+(c+d*e)-(d+e*f))+3");
//   isGoodExpression("5+(((a+b)*c)+d+e)-7")
//   isGoodExpression("(a+b))+(c")
//task 10
// function isPrime(number) {
//     if (number <= 1) {
//       return false;
//       return;
//     }
  
//     for (let i = 2; i * i <= number; i++) {
//       if (number % i === 0) {
//         return false;
        
//       }
//     }
  
//     return true;
//   }
// //   isPrime(5)
// //   isPrime(49)
// //   isPrime(1)
// //   isPrime(97)
  
// //Task 11
// function countPrimes(n) {
//     let count = 0;
  
//     for (let i = 1; i <= n; i++) {
//       if (isPrime(i)) {
//         count++;
//       }
//     }
  
//     console.log(count);
//   }
//   countPrimes(2)
//   countPrimes(75)
//   countPrimes(1)
//   countPrimes(150)

//Task 12
// function countChar(str, char) {
//     let count = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         count++;
//       }
//     }
  
//     return count;
//   }
 
// //   countChar("museum","m");
// //   countChar("abracadabra","a")
// //   countChar("90045","2")
// //Task 13
// // function getMaxCharCount(str) {
// //     let maxCount = 0;
  
// //     for (let i = 0; i < str.length; i++) {
// //       let char = str[i];
// //       let count = countChar(str, char);
  
// //       if (count > maxCount) {
// //         maxCount = count;
// //       }
// //     }
  
// //     console.log(maxCount);
// //   } 
// //   getMaxCharCount("museum");
// //   getMaxCharCount("abracadabra")
// //   getMaxCharCount("90045")
  
// // //Task 14
// function sumOfDigits(n) {
//     let sum = 0;
//     for (let i = 0 ;i<n+10 ;i++){
//       sum += n % 10;
//         n = (n / 10) | 0;
      
//         if (n === 0) {
//           break;
//         }
//       }
    
//     console.log(sum);
//   }
  
// sumOfDigits(24681)
// sumOfDigits(1002)
// sumOfDigits(789)
