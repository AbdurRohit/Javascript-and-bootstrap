// //t1
// function countEvenNumbers(arr) {
//     let count = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         count++;
//       }
//     }
  
//     return count;
//   }
//   let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let evenCount = countEvenNumbers(numbers);
//   console.log(evenCount);  


//Task 2
// function printArraySum(arr) {
//     let sum = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
  
//     console.log(sum);
// }
 
//   printArraySum([1,3,4,5,6]); 
//   printArraySum([11])
//   printArraySum([-1,2,-3,4,-5,6,-7]) 
  
//t 3
// function printMultiplesOfThree(arr) {
//     let sum = 0;
//     let count = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 3 === 0) {
//         sum += arr[i];
//         count++;
//       }
//     }
  
//     console.log("Sum of multiples of 3:", sum);
//     console.log("Count of multiples of 3:", count);
//   }

//   printMultiplesOfThree([3,4,5,12]);
//   printMultiplesOfThree([1,2,3,4,5,6,7,8,9,10])
//   printMultiplesOfThree([11])
//   printMultiplesOfThree([])
  
//T4
// function printSumOfEvenAndOdd(arr) {
//     let sumEven = 0;
//     let sumOdd = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         sumEven += arr[i];
//       } else {
//         sumOdd += arr[i];
//       }
//     }
  
//     console.log("Sum of even numbers:", sumEven);
//     console.log("Sum of odd numbers:", sumOdd);
//   }
// printSumOfEvenAndOdd([3,4,5,12])
// printSumOfEvenAndOdd([1,2,3,4,5,6,7,8,9,10])
// printSumOfEvenAndOdd([101])
  
//Task 5
// function printCount(arr) {
//     let count = 0;
  
//     console.log("Numbers greater than 21:");
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 21) {
//         console.log(arr[i]);
//         count++;
//       }
//     }
  
//     console.log("Count:", count);
//   }

//   printCount([5,18,26,30,40,6]);
//   printCount([100,200,10,20,50,64])
//   printCount([77])
//   printCount([])

//t 6
// function addTenToElements(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] += 10;
//   }
//   console.log(arr)
// }

// addTenToElements([2,3,5,7])
// addTenToElements([23,25])
//T7
// function addHelloToElements(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = "Hello " + arr[i];
//   }
//   console.log(arr);
// }
// addHelloToElements(['Jack', 'Mary'])
// addHelloToElements(['jack'])
// addHelloToElements([])

//TASK 8
// function compareSums(arr1, arr2) {
//   let sum1 = 0;
//   let sum2 = 0;

//   for (let num of arr1) {
//     sum1 += num;
//   }

//   for (let num of arr2) {
//     sum2 += num;
//   }

//   if (sum1 > sum2) {
//     console.log("Big1");
//   } else if (sum2 > sum1) {
//     console.log("Big2");
//   } else {
//     console.log("Equal");
//   }
// }
// compareSums([1,2,3],[10,20,30])
// compareSums([1,3,5,7,9],[2,4,19])
// compareSums([50,100],[1,2,3,4,5,6])
//tASK 9
// function findLargestNumber(arr) {
//   let largestNumber = arr[0]; // Assume the first element is the largest

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largestNumber) {
//       largestNumber = arr[i];
//     }
//   }
//   console.log(largestNumber);
// }

// findLargestNumber([5,18,26,30,40,6]);
// findLargestNumber([100,200,10,20,50,64])
// findLargestNumber([77])

//Task 12
// function compareArraySums(arr1, arr2) {
//     let sum1 = 0;
//     let sum2 = 0;
  
//     for (let i = 0; i < arr1.length; i++) {
//       sum1 += arr1[i]; // Calculate sum of first array
//     }
  
//     for (let i = 0; i < arr2.length; i++) {
//       sum2 += arr2[i]; // Calculate sum of second array
//     }
  
//     if (sum1 > sum2) {
//       console.log('Big1'); // Print 'Big1' if sum1 is greater
//     } else if (sum2 > sum1) {
//       console.log('Big2'); // Print 'Big2' if sum2 is greater
//     } else {
//       console.log('Equal'); // Print 'Equal' if sums are equal
//     }
//   }
  
//   let array1 = [1, 2, 3, 4];
//   let array2 = [5, 6, 7];
//   compareArraySums(array1, array2); 
  
// //T13
// function countDivisibleElements(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 || arr[i] % 3 === 0 || arr[i] % 5 === 0 || arr[i] % 7 === 0) {
//       count++;
//     }
//   }

//   console.log("Count of elements divisible by 2, 3, 5, or 7:", count);
// }


// countDivisibleElements([10,12,14]);
// countDivisibleElements([3,4,5,6]);
// countDivisibleElements([210]);

//t14

// function checkConsecutive(arr) {
//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   if (max - min + 1 === arr.length) {
//     let consecutive = true;
//     let index = 0;

//     for (let i = min; i <= max; i++) {
//       if (arr.indexOf(i, index) === -1) {
//         consecutive = false;
//         break;
//       }
//       index = arr.indexOf(i, index) + 1;
//     }

//     if (consecutive) {
//       console.log("SEQUENCE");
//       return;
//     }
//   }

//   console.log("NOT");
// }

// checkConsecutive([12,11,10])
// checkConsecutive([4,3,2,5])
// checkConsecutive([12,13,14,15,16,17])

//task 15
// function checkAlternating(arr) {
//   if (arr.length < 2) {
//     console.log("NOT");
//     return;
//   }

//   for (let i = 0; i < arr.length - 1; i++) {
//     if ((arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) || (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0)) {
//       console.log("NOT");
//       return;
//     }
//   }

//   console.log("ALTERNATING");
// }
// checkAlternating([12,11,10])
// checkAlternating([4,9,16,25,49])
// checkAlternating([12,13,14,15,16,17])

//T16
// function checkAB(str) {
//   for (let i = 0; i < str.length - 1; i++) {
//     if (str[i] === 'a' && str[i + 1] === 'b') {
//       console.log("ABFOUND");
//       return;
//     }
//   }

//   console.log("AB NOT FOUND");
// }
// checkAB('javascript')
// checkAB('TESTabcdef')
// checkAB('acbcadbd')

//task 17
// function getEvenNumbers(arr) {
//   let evenNumbers = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNumbers.push(arr[i]);
//     }
//   }

//  console.log(evenNumbers);
// }
// getEvenNumbers([5,18,26,30,40,6,9])
// getEvenNumbers([20,14,2,7,18])
// getEvenNumbers([77])

//Task = 18
// function getEvenNumbers(arr) {
//   let evenNumbers = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 === 0) {
//       evenNumbers.unshift(arr[i]);
//     }
//   }

//   console.log(evenNumbers) ;
// }
// getEvenNumbers([5,18,26,30,40,6,3])
// getEvenNumbers([20,14,2,7,18])
// getEvenNumbers([77])
// T = 19
// function printArrayElements(arr) {
//     let st = ""
//     let element = ""
//     for (let i = arr.length - 1; i >= 0; i--) {
//       element = arr.pop();
//       st += element+" ";
     
//     }
//     console.log("pop = "+ st)
//   }
  
// printArrayElements([40,6,9])
// printArrayElements([20,14,2,7,18])
// printArrayElements([77])

//t20
// function printArrayElements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       const element = arr.shift();
//       console.log(element);
//     }
//   }
//   printArrayElements([5,18,26,30,40,6,3])
//   printArrayElements([20,14,2,7,18])
//   printArrayElements([77])
// //t21
// function removeNameFromArray(names, nameToRemove) {
//     let index = -1;
    
//     for (let i = 0; i < names.length; i++) {
//       if (names[i] === nameToRemove) {
//         index = i;
//         break;
//       }
//     }
    
//     if (index !== -1) {
//       names.splice(index, 1);
//       console.log("Successfully removed " + nameToRemove + " from the array.");
//       console.log(names)
//     } else {
//       console.log(nameToRemove + " is not found in the array.");
//     }
//   }

// removeNameFromArray(['Jack','Bob','Ed','Steve'], "Bob")
// removeNameFromArray(['Jack','Bob','Ed','Steve'], "Jack")
// removeNameFromArray(['Jack','Bob','Ed','Steve'], "Steve")

//t22
// function findLargestAndRemove(arr) {
//   let largest = arr[0];
//   let largestIndex = 0;
  
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//       largestIndex = i;
//     }
//   }
  
//   arr.splice(largestIndex, 1);
  
//   console.log("Largest number:", largest);
//   console.log("Array after removing the largest number:", arr);
// }
// findLargestAndRemove([5,18,26,30,40,6])
// findLargestAndRemove([100,10,20,50,64,200])
// findLargestAndRemove([25,20,14,2,7,21])
// findLargestAndRemove([77])

//T 23
// function insertIntoSortedArray(arr, num) {
//   let index = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (num <= arr[i]) {
//       index = i;
//       break;
//     }
//     index = i + 1;
//   }

//   arr.splice(index, 0, num);

//   console.log("Array after inserting", num + ":", arr);
// }

// insertIntoSortedArray([5,18,26,30,40],6)
// insertIntoSortedArray([10,20,50,64], 99)
// insertIntoSortedArray([5], 7)

//t 24
// function concatenateArrays(arr1, arr2) {
//   const newArray = arr1.concat(arr2);
//   console.log("Concatenated Array:", newArray);
// }
// concatenateArrays([5,18,26,30], [40,6])
// concatenateArrays([100,10],[20,50,64,200])
// concatenateArrays([], [1,2,3])
// concatenateArrays([2,7,21], [])

//t 25

// function interleaveArrays(arr1, arr2) {
//   const newArray = [];
//   const length1 = arr1.length;
//   const length2 = arr2.length;
//   let maxLength;

//   if (length1 > length2) {
//     maxLength = length1;
//   } else {
//     maxLength = length2;
//   }

//   for (let i = 0; i < maxLength; i++) {
//     if (i < length1) {
//       newArray.push(arr1[i]);
//     }
    
//     if (i < length2) {
//       newArray.push(arr2[i]);
//     }
//   }

//   console.log("Interleaved Array:", newArray);
// }

// interleaveArrays([5,18,26,30], [40,6])
// interleaveArrays([100,10],[20,50,64,200])
// interleaveArrays([], [1,2,3])
// interleaveArrays([2,7,21], [])

