function maxNum(num1, num2, num3, num4) {
  let max = num1; 

  max = (num2 > max) ? num2 : max;
  max = (num3 > max) ? num3 : max;
  max = (num4 > max) ? num4 : max;

  return max; 
}
console.log(maxNum(4, 6, 2, 9)); 
console.log(maxNum(4, 6, 2));   
console.log(maxNum(4, 6));      
console.log(maxNum(4));          
