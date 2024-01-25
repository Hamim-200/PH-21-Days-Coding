function filterOutEvenNumbers(array) {
  let oddNumbers = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddNumbers.push(array[i]);
    }
  }

  return oddNumbers;
}

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumbersArray = filterOutEvenNumbers(numbersArray);
console.log("Odd numbers:", oddNumbersArray); 
