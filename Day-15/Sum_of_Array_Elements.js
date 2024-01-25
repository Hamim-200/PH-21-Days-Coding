function calculateArraySum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  return sum;
}

let numbersArray = [2, 4, 6, 8, 10];
let arraySum = calculateArraySum(numbersArray);
console.log("Sum of array elements:", arraySum);
