function testLogicalOperators() {
    console.log(false || 5); // Outputs: 5
    // The logical OR (||) operator returns the first truthy value encountered, which is 5.
  
    console.log(true || 5); // Outputs: true
    // The logical OR (||) operator returns the first truthy value encountered, which is true.
  
    console.log(false && 8); // Outputs: false
    // The logical AND (&&) operator returns the first falsy value encountered, which is false.
  
    console.log(true && 8); // Outputs: 8
    // The logical AND (&&) operator returns the last truthy value encountered, which is 8.
  
    console.log(false || 'Hello'); // Outputs: 'Hello'
    // The logical OR (||) operator returns the first truthy value encountered, which is 'Hello'.
  
    console.log(true || 'Hello'); // Outputs: true
    // The logical OR (||) operator returns the first truthy value encountered, which is true.
  
    console.log(false && 'Hello'); // Outputs: false
    // The logical AND (&&) operator returns the first falsy value encountered, which is false.
  
    console.log(true && 'Hello'); // Outputs: 'Hello'
    // The logical AND (&&) operator returns the last truthy value encountered, which is 'Hello'.
  
    console.log(null || 10); // Outputs: 10
    // The logical OR (||) operator returns the first truthy value encountered, which is 10.
  
    console.log(null && 10); // Outputs: null
    // The logical AND (&&) operator returns the first falsy value encountered, which is null.
  
    console.log('Hello' || 'Bye'); // Outputs: 'Hello'
    // The logical OR (||) operator returns the first truthy value encountered, which is 'Hello'.
  
    console.log('Hello' && 'Bye'); // Outputs: 'Bye'
    // The logical AND (&&) operator returns the last truthy value encountered, which is 'Bye'.
  
    console.log(0 || 5); // Outputs: 5
    // The logical OR (||) operator returns the first truthy value encountered, which is 5.
  
    console.log(0 && 5); // Outputs: 0
    // The logical AND (&&) operator returns the first falsy value encountered, which is 0.
  
    console.log('' || 'Ok'); // Outputs: 'Ok'
    // The logical OR (||) operator returns the first truthy value encountered, which is 'Ok'.
  
    console.log('' && 'Ok'); // Outputs: ''
    // The logical AND (&&) operator returns the first falsy value encountered, which is ''.
  
    console.log(undefined || 'Red'); // Outputs: 'Red'
    // The logical OR (||) operator returns the first truthy value encountered, which is 'Red'.
  
    console.log(undefined && 'Red'); // Outputs: undefined
    // The logical AND (&&) operator returns the first falsy value encountered, which is undefined.
  
    console.log(2 || 3 || 4); // Outputs: 2
    // The logical OR (||) operator returns the first truthy value encountered, which is 2.
  
    console.log(2 && 3 && 4); // Outputs: 4
    // The logical AND (&&) operator returns the last truthy value encountered, which is 4.
  
    console.log(0 || 0 || 12); // Outputs: 12
    // The logical OR (||) operator returns the first truthy value encountered, which is 12.
  
    console.log(0 && 0 && 12); // Outputs: 0
    // The logical AND (&&) operator returns the first falsy value encountered, which is 0.
  
    console.log('' || 'Red' || ''); // Outputs: 'Red'
    // The logical OR (||) operator returns the first truthy value encountered, which is 'Red'.
  
    console.log('' && 'Red' && ''); // Outputs: ''
    // The logical AND (&&) operator returns the first falsy value encountered, which is ''.
  
    console.log(null || 'Red' || 'Green'); // Outputs: 'Red'
    // The logical OR (||) operator returns the first truthy value encountered, which is 'Red'.
  
    console.log(null && 'Red' && 'Green'); // Outputs: null
    // The logical AND (&&) operator returns the first falsy value encountered, which is null.
  }
  
  // Call the function
  testLogicalOperators();
  