function evaluateExpressions(x, y) {
    let z1 = x > y ? 2 * x : y + 10;
    // The condition x > y is true if x is greater than y. So, the value of z1 will be 2 * x if x > y, otherwise y + 10.
  
    let z2 = x <= 2 * y ? x + 100 : y - 5;
    // The condition x <= 2 * y is true if x is less than or equal to 2 * y. So, the value of z2 will be x + 100 if x <= 2 * y, otherwise y - 5.
  
    console.log('For x=', x, 'and y=', y);
    console.log('z1=', z1);
    console.log('z2=', z2);
    console.log('-------------------');
  }
  
  // Call the function with different values
  evaluateExpressions(25, 40);
  evaluateExpressions(10, 20);
  evaluateExpressions(15, 5);
  