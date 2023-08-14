function removeFirstIfTen(numbers) {
    return numbers[0] === 10 ? numbers.slice(1) : numbers;
  }
  
  function incrementCount(jsonData) {
    jsonData.count = jsonData.hasOwnProperty('count') ? jsonData.count + 1 : 1;
    return jsonData;
  }
  
  function productOrMinus15(n1, n2) {
    return n1 !== 0 && n2 !== 0 ? n1 * n2 : -15;
  }
  
  function checkNotEmptyStrings(s1, s2) {
    return s1 !== '' && s2 !== '' ? 'Good' : 'Error';
  }
  
  console.log(removeFirstIfTen([10, 20, 30, 40]));
  console.log(incrementCount({ name: 'John', age: 30 }));
  console.log(productOrMinus15(5, 0));
  console.log(checkNotEmptyStrings('Hello', ''));
  