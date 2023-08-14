// let str = 'abczzzzzd';
// let len = str.length;
//  let count = 0;
// for (let i=0; i<len; i++){
//     if (str[i] == 'z'){
//       count++;
// }
// }
// console.log(count);

// let str = 'Ab#6!8m';
// let len = str.length;
// let alpha = ''
// let digits = '';
// let rest = '';
// for (let i=0;i<len;i++){
// if (str[i]>='a'&&str[i]<='z'){
// alpha = alpha + str[i];}

// else if (str[i]>='A'&&str[i]<='Z'){
// alpha = alpha + str[i];}

// else if (str[i]>='0'&&str[i]<='9'){
// digits = digits + str[i];}

// else {
// rest = rest + str[i];
// }}
// console. log(alpha, rest, digits);

// //T2
// function check(str){
// if (str.length > 5) {
//     console.log("Long");
// } else {
//     console.log("Short");
// }
// }

// check("Edufect")
// check("java")
// check("1234567")

// T3
// function check(str){
// let len = str.length;
//  let count = 0;
// for (let i=0; i<len; i++){
//     if (str[i] == 'm' || str[i] == 'M'  ){
//       count++;
// }
// }
// console.log(count);
// }

// check("mooZooom")
// check("mmmmMMMm")
// check("abcd")

// t4
// function check(str){
//   let len = str.length;
//    let count1 = 0;
//    let count2 = 0;
//   for (let i=0; i<len; i++){
//       if (str[i] == 'x' || str[i] == 'x'  ){
//         count1++;
//       }
//       else if(str[i] == 'y' || str[i] == 'Y'){
//         count2 ++;
//       }
//   }
//   console.log("x = "+ count1);
//   console.log("y = "+ count2);
//   }
  
//   check("x+y+xy+4x=7")
//   check("ax+cz+dx=0")
//   check("1234789")

// //Test 5
// function check(str){
// let char = ['a', 'b']; // Characters to search for

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];
  
//   if (char.indexOf(char) !== -1) {
//     console.log(char + " at index " + i);
//   }
// }
// console.log("\n")
// }
// check("abca")
// check("1234")
// check("perfect")

// t6
// function check(str){

//   let newStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'z') {
//       newStr += 'x';
//     } else {
//       newStr += str[i];
//     }
//   }
//   console.log(newStr);
// }
// check("zoom")
// check("az+bz=4")
// check("sleep=zzz")

// //t8
// function check(str){
// let newStr = str.replace("m", "")
// console.log(newStr)
// }
// check("my#mother")
// check("am:pm:my:time")
// check("Hello123")

// t9
// function getChar(str) {
//   let newStr = ""
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'm') {
//        newStr += ' ';
//     } else {
//       newStr += str[i];
//     }
//   }
//   console.log(newStr);
// }

// getChar("my#mother")
// getChar("am:pm:my:time")
// getChar("Hello123")

// t10
// function check(str){
// let newStr=""
// for (let i = 0; i < str.length; i++) {
//   let char = str[i];

//   if (char >= '0' && char <= '9') {
//     newStr += char
    
//   }
// }
// console.log("Digits = " +newStr);
// }
// check ("qw23BN**45g")
// check("9810098100")
// check("qwNN*%bT")

// Task 11
// function check(str){
// let newStr = "";

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];

//   if (char >= 'A' && char <= 'Z') {
//     newStr += 'A';
//   } else if (char >= 'a' && char <= 'z') {
//     newStr += 'a';
//   } else if (char >= '0' && char <= '9') {
//     newStr += '0';
//   } else {
//     newStr += char;
//   }
// }
// console.log(newStr);
// }
// check("qw23BN**45g")
// check("#98#bQ")
// check("qwNN*%bT")

// Task 12

// function check(str){
// let newStr = "";

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];

//   if (char >= 'A' && char <= 'Z') {
//     newStr += char + char;
//   } else if (char >= 'a' && char <= 'z') {
//     newStr += char + char;
//   } else if (char >= '0' && char <= '9') {
//     newStr += char + char + char;
//   }
// }

// console.log(newStr);
// }
// check("qw2B**5g")
// check("9#a$M%2eP")
// check("qwNN*%bT")

// t == 13
// function check(str){

// let lowercaseStr = "";
// let digitStr = "";
// let uppercaseStr = "";

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];

//   if (char >= 'a' && char <= 'z') {
//     lowercaseStr += char;
//   } else if (char >= '0' && char <= '9') {
//     digitStr += char;
//   } else if (char >= 'A' && char <= 'Z') {
//     uppercaseStr += char;
//   }
// }

// let newStr = lowercaseStr + digitStr + uppercaseStr;

// console.log(newStr);

// }
// check("qw2B**5g")
// check("9#a$M%2eP")
// check("qwNN*%bT")

// t = 14
// function check(str){

// let symbol = "";

// for (let i = 0; i < str.length; i++) {
//   let char = str[i];

//   if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z') && !(char >= '0' && char <= '9')) {
//     symbol += char;
//   }
// }

// console.log(symbol);

// }
// check("q#w2@B**5g")
// check("9#a$M%2eP&$")
// check("qwNN*%bT")

// T = 15
// function check(str){

// let length = str.length;
// let firstHalf = str.slice(0, length / 2);

// console.log(firstHalf);
// }
// check("ABCDABCD")
// check("JavaScript++JS")
// check("1234")

// T = 16
// function check(str){
// let length = str.length;
// let latterHalf = str.slice(length / 2);

// console.log(latterHalf);
// }
// check("JAVA")
// check("master")
// check("1234567890")
// check("ab")

// T = 17
// function check(str)
// {
// let length = str.length;
// let middleIndex =0;
// let latterHalf =""
// let firstHalf =""
// let newStr = ""

// if(length % 2 == 0){
//     middleIndex = (length / 2)
//     latterHalf = str.substring(middleIndex);
//     firstHalf = str.substring(0, middleIndex);
//     newStr = latterHalf + firstHalf;
// }
// else{
//     middleIndex = Math.round(length / 2);
//     latterHalf = str.substring(middleIndex)
//     firstHalf = str.substring(0, middleIndex);
//     middleChar = str[middleIndex]
//     newStr = latterHalf + middleChar+ firstHalf;
// }
// console.log(newStr);
// }
// check("JAVA")
// check("EDUFECT")
// check("123456")
// check("HELLO")

// Task == 18
// function check(str) {
//     let result =""
//     let length = str.length;
//     if (length % 2 !== 0) {
//      result =  "No";
//     }
  
//     let halfLength = length / 2;
//     let firstHalf = str.substring(0, halfLength);
//     let secondHalf = str.substring(halfLength);
  
//     if (firstHalf === secondHalf) {
//     result = "Yes";
//     } else {
//     result =  "No";
//     }
//     console.log(result);
//   }
//   check("Java")
//   check("dada")
//   check("ABCDABD")
//   check("ABCDABDEFDF")
//   check("123123")
 
// Task = 19
// function check(str){
// let length = str.length;
// let middleIndex = (length / 2) | 0;
// let middleChar = str[middleIndex];

// console.log("Middle character:", middleChar);
// console.log("Index:", middleIndex);
// }
// check("ABCDE")
// check("Abc")
// check("1")
// check("123456789")

// Task 20
// function compareNames(name1, name2) {
//     let lowercaseName1 = name1.toLowerCase();
//     let lowercaseName2 = name2.toLowerCase();
  
//     let result = lowercaseName1 === lowercaseName2;
//     if(result){
//         console.log("Same")
//     }
//     else{
//         console.log("Not same")
//     }
//   }
  
//   compareNames( "James","jaMES")
//   compareNames("James", "Jack")
//   compareNames("james","JAMES")
//   compareNames("james","james bond")  

// T 21
// function separateChars(str) {
//     let oddChars = '';
//     let evenChars = '';
  
//     for (let i = 0; i < str.length; i++) {
//       if (i % 2 === 0) {
//         evenChars += str[i];
//       } else {
//         oddChars += str[i];
//       }
//     }
  
//     console.log("Even:", evenChars);
//     console.log("Odd :", oddChars);
//   }
  
//   separateChars("A1B2C3");
//   separateChars("AbCdEf")
//   separateChars("A1B2C3D4E")
//   separateChars("Q")

// Task 22

// function check(str) {
//     let replacedStr = '';
//     for (let i = 0; i < str.length; i++) {
//       let currentChar = str[i];
//       if (currentChar === '1') {
//         replacedStr += '@';
//       } else if (currentChar === '2') {
//         replacedStr += '#';
//       } else {
//         replacedStr += currentChar;
//       }
//     }
//     console.log(replacedStr);
//   }
//   check("12ab1128d")
//   check("ab11cd22ef")
//   check("abcd")
//   check("111")

// Task 23
// function check(str) {
//     let replacedStr = '';
//     for (let i = 0; i < str.length; i++) {
//       let currentChar = str[i];
//       if (currentChar === '1') {
//         replacedStr += '@';
//       } else if (currentChar === '2') {
//         replacedStr += '#';
//       } else if (currentChar === '3') {
//         replacedStr += '&';
//       } else if (currentChar >= '4' && currentChar <= '9') {
//         replacedStr += '$';
//       } else {
//         replacedStr += currentChar;
//       }
//     }
//     console.log(replacedStr);
//   }
//   check("12049brt")
//   check("a1b9c3d4QW")
//   check("1234567890")
//   check("Hello")

// TAsk = 24
// function check(str) {
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//       let currentChar = str[i];
//       if (currentChar === 'A') {
//         newStr += 'X';
//       } else if (currentChar === 'B') {
//         newStr += 'Y';
//       } else if (currentChar !== 'C' && currentChar !== 'D') {
//         newStr += currentChar;
//       }
//     }
//     console.log(newStr);
//   }
//   check("ABCDEF")
//   check("BAD CAR")
//   check("I GOT A BIRTHDAY CARD")

// TAsk = 25
// function removePlus(str) {
//   let newStr = '';
//   let previousChar = '';
// for (let i = 0; i < str.length; i++) {
//   newStr = ""
//   previousChar=""
//   for (let i = 0; i < str.length; i++) {
//     let currentChar = str[i];

//     if (currentChar === '+' && previousChar === '+') {
//       continue;
//     }

//     newStr += currentChar;
//     previousChar = currentChar;
//   } 
//   }
//   console.log(newStr);
// }

// removePlus("x+3+45+++");
// removePlus("1+2+3+4");
// removePlus('a+++b++c+')

// Task = 26
// function removeXY(str) {
//   let newStr = '';
//   let previousChar = '';

//   for (let i = 0; i < str.length; i++) {
//     let currentChar = str[i];

//     if ((currentChar === 'X' || currentChar === 'Y') && previousChar === currentChar) {
//       continue;
//     }

//     newStr += currentChar;
//     previousChar = currentChar;
//   }
//   console.log(newStr);
// }

// removeXY("AAXXXBBYYYCXXDYY")
// removeXY("XYXYXYXY")
// removeXY("XXXXYYYYYABXXYY")
// removeXY("AXBYCXDY")

//task 27
function check(str)
{
  if (str.substring(0,4)=="ABCD"){
    console.log("Starts with ABCD")
  }
  else{
    console.log("Does not start")
  }
}
check("ABCD JS")
check("AB CD Java")
check("ABCD")

//Task == 28
 function countABCD(str){
  let count=0;
  for(let i = 0 ; i<str.length; i++){
    if (str[i]=='A'){
      if(str.substring(i,4)=="ABCD"){
        count ++;
      }
    }
  }
  console.log("Number of times: "+ count)
 }
 countABCD("AB ABC ABCD ABCD ABC AB")
 countABCD("ABCD JS")
 countABCD("AB CD Java")
 countABCD("ABCDABCDABCD")

 Task ==29
function replaceABCD(str){
  let newStr = ''
  for(let i = 0 ; i<str.length; i++){

    if(str.substring(i,4)=="ABCD"){
        newStr+='XYZ'
        i+=3
    }
    else
    {
      newStr += str[i]
    }
    }
    
  console.log(newStr)
}
replaceABCD("AB ABC ABCD ABCD ABC AB")
replaceABCD("ABCD JS")
replaceABCD("AB CD Java")
replaceABCD("ABCDABCDABCD")
