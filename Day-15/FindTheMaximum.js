function findMaxValue(numbers) {
  if (numbers.length === 0) {
    return "None";
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

let numbersArray = [5, 12, 8, 20, 3, 10];
let maxValue = findMaxValue(numbersArray);
console.log("Maximum value:", maxValue);
