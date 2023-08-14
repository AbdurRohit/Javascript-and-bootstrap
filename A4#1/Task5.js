function calculateX1AndY1(m1, m2, m3) {
    let x1 = m1 || m2 || m3;
    let y1 = m1 && m2 && m3
  
    console.log('x1 = ' + x1 + ', y1 = ' + y1);
  }
  
  console.log("Test Case a):");
  calculateX1AndY1(10, 6, 7);
  
  console.log("\nTest Case b):");
  calculateX1AndY1(0, 0, 15);
  
  console.log("\nTest Case c):");
  calculateX1AndY1(0, 3, 5);
  
  console.log("\nTest Case d):");
  calculateX1AndY1('A', 'B', 'C');
  
  console.log("\nTest Case e):");
  calculateX1AndY1('X', '', 'Y');
  
  console.log("\nTest Case f):");
  calculateX1AndY1(3, null, 5);
  
  console.log("\nTest Case g):");
  calculateX1AndY1(12, 'ABC', 'Hi');
  
  console.log("\nTest Case h):");
  calculateX1AndY1(0, 'DEF', 'Good');
  