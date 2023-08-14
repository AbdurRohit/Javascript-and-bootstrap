function computeMaxMinCount(numbers) {
    if (numbers.length === 0) {
      return { max: undefined, min: undefined, count: 0 };
    }
  
    const initialMax = numbers[0];
    const initialMin = numbers[0];
  
    const result = numbers.reduce(
      (accumulator, currentValue) => {
        // Calculate max number
        accumulator.max = currentValue > accumulator.max ? currentValue : accumulator.max;
  
        // Calculate min number
        accumulator.min = currentValue < accumulator.min ? currentValue : accumulator.min;
  
        // Count numbers greater than 25
        accumulator.count = currentValue > 25 ? accumulator.count + 1 : accumulator.count;
  
        return accumulator;
      },
      { max: initialMax, min: initialMin, count: 0 }
    );
  
    return result;
  }
  
  // Test with an array of numbers
  const numbers = [10, 5, 30, 15, 40, 20, 25, 35];
  const result = computeMaxMinCount(numbers);
  console.log("Max number:", result.max);
  console.log("Min number:", result.min);
  console.log("Count of numbers greater than 25:", result.count);
  