function testTernaryOperators() {
    let x1 = (8 > 10 ? "Hello" : "Bye");
    console.log("x1:", x1);
    // Since 8 is not greater than 10, the condition (8 > 10) is false. So, the value of x1 becomes "Bye".
  
    let x2 = (15 > 10 ? "Hello" : "Bye");
    console.log("x2:", x2);
    // Since 15 is greater than 10, the condition (15 > 10) is true. So, the value of x2 becomes "Hello".
  
    let x3 = (16 === 16 ? "Ok" : "NotOk");
    console.log("x3:", x3);
    // Since 16 is equal to 16, the condition (16 === 16) is true. So, the value of x3 becomes "Ok".
  
    let x4 = ("hello" === "hello" ? "Wow" : "TryAgain");
    console.log("x4:", x4);
    // Since the string "hello" is identical to itself, the condition ("hello" === "hello") is true. So, the value of x4 becomes "Wow".
  }
  
  // Call the function
  testTernaryOperators();
  