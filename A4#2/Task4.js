//a
const strings = ['apple', 'banana', 'orange', 'avocado'];

const result = strings.find(str => str.startsWith('a'));

console.log(result); 
//b
const strings1 = ['apple', 'banana', 'orange', 'avocado'];

const index = strings1.findIndex(str => str.length > 7);

console.log(index); 
//c
const strings2 = ['fox', 'box', 'cat', 'dog'];

const filteredArray = strings2.filter(str => str.includes('x'));

console.log(filteredArray); 
//d
const strings3 = ['apple', 'banana', 'orange', 'avocado'];

const lengthArray = strings3.map(str => str.length);

console.log(lengthArray); 
//e
const strings4 = ['Hello', 'this', 'is', '', '', 'me'];
const outputString = strings4.reduce((result, str) => {
  if (str === '') {
    result += 'X';
  } else {
    result += str.charAt(0);
  }
  return result;
}, '');
console.log(outputString); 
//f
const strings5 = ['A', 'bcd', 'XYZ'];

const outputString1 = strings5.map(str => `<p>${str}</p>`).join('');

console.log(outputString1);



