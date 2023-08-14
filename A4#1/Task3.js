function testEquality() {
    console.log(5 == 5); // Outputs: true. Explanation: Both operands are equal numbers, so the expression evaluates to true.
  
    console.log('5' == '5'); // Outputs: true. Explanation: Both operands are equal strings, so the expression evaluates to true.
  
    console.log(5 == '5'); // Outputs: true. Explanation: The loose equality (==) operator performs type coercion, converting '5' to a number before the comparison. Both operands become 5, so the expression evaluates to true.
  
    console.log(5 === 5); // Outputs: true. Explanation: Both operands are equal numbers, and the strict equality (===) operator also checks their types, which are both numbers. So, the expression evaluates to true.
  
    console.log(5 === '5'); // Outputs: false. Explanation: The strict equality (===) operator compares both value and type of the operands. One is a number (5), and the other is a string ('5'). Since their types are different, the expression evaluates to false.
  
    console.log(5 === '5'); // Outputs: false. Explanation: The strict equality (===) operator compares both value and type of the operands. One is a number (5), and the other is a string ('5'). Since their types are different, the expression evaluates to false.
  
    console.log(true == 8); // Outputs: false. Explanation: The boolean value true is converted to a number (1) before the comparison. Since 1 is not equal to 8, the expression evaluates to false.
  
    console.log(true === 8); // Outputs: false. Explanation: The strict equality (===) operator compares both value and type of the operands. The boolean value true is not equal to the number 8 in both value and type, so the expression evaluates to false.
  
    console.log(true == 0); // Outputs: false. Explanation: The boolean value true is converted to a number (1) before the comparison. Since 1 is not equal to 0, the expression evaluates to false.
  
    console.log(true === 0); // Outputs: false. Explanation: The strict equality (===) operator compares both value and type of the operands. The boolean value true is not equal to the number 0 in both value and type, so the expression evaluates to false.
  
    console.log(true == -3); // Outputs: false. Explanation: The boolean value true is converted to a number (1) before the comparison. Since 1 is not equal to -3, the expression evaluates to false.
  
    console.log(true === -3); // Outputs: false. Explanation: The strict equality (===) operator compares both value and type of the operands. The boolean value true is not equal to the number -3 in both value and type, so the expression evaluates to false.
  
    console.log(false == -1); // Outputs: false. Explanation: The boolean value false is converted to a number (0) before the comparison. Since 0 is not equal to -1, the expression evaluates to false.
  
    console.log(false == 0); // Outputs: true. Explanation: The boolean value false is converted to a number (0) before the comparison. Since both operands are now 0, the expression evaluates to true.
  
    console.log(false === -1); // Outputs: false. Explanation: The strict equality (===) operator compares both value and type of the operands. The boolean value false is not equal to the number -1 in both value and type, so the expression evaluates to false.
  
    console.log(false === 0); // Outputs: false. Explanation: The strict equality (===) operator compares both value and type of the operands. The boolean value false is not equal to the number 0 in both value and type, so the expression evaluates to false.
  
    console.log(false == 6); // Outputs: false. Explanation: The boolean value false is converted to a number (0) before the comparison. Since 0 is not equal to 6, the expression evaluates to false.
  
    console.log(false === 6); // Outputs: false. Explanation: The strict equality (===) operator compares both value and type of the operands. The boolean value false is not equal to the number 6 in both value and type, so the expression evaluates to false.
  }
  
  // Call the function
  testEquality();
  