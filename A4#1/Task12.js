function findX(strings) {
    const result = strings.map((str) => (str.includes('x') ? 'GotX' : 'NOT Found'));
    return result;
  }
  
  
  const strings = ['apple', 'banana', 'orange', 'grapes'];
  const resultA = findX(strings);
  console.log(resultA); 

function shortenStrings(strings) {
    const result = strings.map((str) => (str.length > 5 ? str.slice(0, 5) : str));
    return result;
  }
  
  
  const strings1 = ['apple', 'banana', 'orange', 'grapes'];
  const resultB = shortenStrings(strings1);
  console.log(resultB); 
  
function transformNumbers(numbers) {
    const result = numbers.map((num) => (num > 100 ? num + 10 : num - 25));
    return result;
  }
  
  const numbers = [80, 120, 90, 150];
  const resultC = transformNumbers(numbers);
  console.log(resultC);
  