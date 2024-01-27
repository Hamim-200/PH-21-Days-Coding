function findMinValue(numbers) {
    if (numbers.length === 0) {
      return "None";
    }
  
    let Min = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < Min) {
        Min = numbers[i];
      }
    }
  
    return Min;
  }
  
  let numbersArray = [5, 12, 8, 20, 3, 10];
  let MinValue = findMinValue(numbersArray);
  console.log("Minimum value:", MinValue);
  