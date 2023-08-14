// //task a
// const square = (num) => {
//   return num ** 2;
// };

// console.log(square(5)); 

// //task b
// const squareAndCube = (num) => {
//   const square = num ** 2;
//   const cube = num ** 3;
  
//   console.log('Square:', square);
//   console.log('Cube:', cube);
// };

// squareAndCube(3);

// //task c
// const getLargerNumber = (num1, num2) => {
//   return Math.max(num1, num2);
// };

// console.log(getLargerNumber(5, 2));

// //task d 
// const toUpperCase = (str) => {
//   return str.toUpperCase();
// };

// console.log(toUpperCase("hello")); 

//task e
// const areNumbersEqual = (num1, num2, num3) => {
//   return num1 === num2 && num2 === num3;
// };
// console.log(areNumbersEqual(2, 2, 2)); 
// console.log(areNumbersEqual(1, 2, 3)); 
// //f
// const countFactors = (num) => {
//   let count = 0;
  
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       count++;
//     }
//   }
  
//   return count;
// };
// console.log(countFactors(10)); 
// //g
// const generateAString = (num) => {
//   return "A".repeat(num);
// };
// console.log(generateAString(5)); 
// //h
// const removeCharacter = (str, char) => {
//   return str.replace(new RegExp(char, "g"), "");
// };
// console.log(removeCharacter("hello world", "o")); 
//i
const printPattern = (num) => {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    pattern += i % 2 === 0 ? "B" : "A";
  }
  
  console.log(pattern);
};

printPattern(5);

//j
const countDifferentCharacters = (str) => {
  const uniqueCharacters = new Set(str.split(""));
  
  return uniqueCharacters.size;
};

console.log(countDifferentCharacters("hello")); 
//k
const convertToJSON = (str) => {
  return JSON.stringify({ txt: str });
};

console.log(convertToJSON("hello")); 
//l
const convertoJSON = (str1, str2) => {
  return JSON.stringify({ txt1: str1, txt2: str2 });
};

console.log(convertoJSON("hello", "world")); 
