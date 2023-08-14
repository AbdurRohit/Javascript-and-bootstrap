function printEx() {
    let x = 25;
    let y = 40;
    let m = 10;
    let n = 20;
    let str = "Hello";
    let s1 = "Alice";
    let s2 = "Bob";
    let num1 = 5;
    let num2 = 0;
  
    // Given a number x, if it is non-zero, returns x otherwise 25.
    let resultA = x !== 0 ? x : 25;
    console.log("Result A:", resultA);
  
    // Given numbers m and n, returns m if it is non-zero, otherwise returns n if it is non-zero otherwise returns 12.
    let resultB = m !== 0 ? m : n !== 0 ? n : 12;
    console.log("Result B:", resultB);
  
    // Given a string str, if it is not an empty string returns str otherwise 'A'.
    let resultC = str !== '' ? str : 'A';
    console.log("Result C:", resultC);
  
    // Given a number x, returns a JSON with the field discount whose value is x(if x is not zero), otherwise it is 12.5.
    let resultD = { discount: x !== 0 ? x : 12.5 };
    console.log("Result D:", resultD);
  
    // Given a string str, returns a JSON with the field name whose value is str (if str is not an empty string), otherwise it is 'TestUser'.
    let resultE = { name: str !== '' ? str : 'TestUser' };
    console.log("Result E:", resultE);
  
    // Given a strings1 and number n1, returns a JSON with the fields name and age. The value of the field name is s1(if s1 is not an empty string) and 'Jack' otherwise. The value of the field age is n1 (if n1is not zero) and 24 otherwise.
    // let resultF = { name: s1 !== '' ? s1 : 'Jack', age: n1 !== 0 ? n1 : 24 };
    // console.log("Result F:", resultF);
  
    // Given strings s1 and s2, returns s1 if it is not an empty string, otherwise returns s2 if it is not an empty string otherwise returns 'Bug'.
    let resultG = s1 !== '' ? s1 : s2 !== '' ? s2 : 'Bug';
    console.log("Result G:", resultG);
  
    // Given numbers m and n, returns n if both the numbers are non-zero, otherwise returns zero.
    let resultH = m !== 0 && n !== 0 ? n : 0;
    console.log("Result H:", resultH);
  
    // Given strings s1 and s2, returns s2 if both the strings are not empty otherwise returns an empty string.
    let resultI = s1 !== '' && s2 !== '' ? s2 : '';
    console.log("Result I:", resultI);
  
    // Given numbers num1 and num2, returns a JSON with the field myNum whose value is num1 (if num1 is non-zero), otherwise if num2 (if num2 is non-zero), otherwise it is -1.
    let resultJ = { myNum: num1 !== 0 ? num1 : num2 !== 0 ? num2 : -1 };
    console.log("Result J:", resultJ);
  }
  
  // Call the function
  printEx();
  