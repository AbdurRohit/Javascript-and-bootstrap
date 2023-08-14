function printEx(x, x1, x2, str, marks, n1, n2) {
    let resultA = x % 2 === 0 ? x + 10 : x - 3;
    console.log("Result A:", resultA);
  
    let resultB = x1 > x2 ? x1 : x2;
    console.log("Larger number:", resultB);
  
    let resultC = str.includes('p') ? 'Yes' : 'No';
    console.log("Result C:", resultC);
  
    let resultD = marks >= 40 ? 'Pass' : 'Fail';
    console.log("Result D:", resultD);
  
    let resultE = { maxValue: n1 > n2 ? n1 : n2 };
    console.log("Result E:", resultE);
  
    let resultF = { marks: x, status: x >= 40 ? 'Pass' : 'Fail' };
    console.log("Result F:", resultF);
  }
  

  printEx(8, 25, 40, "Sample String", 50, 10, 20);
  