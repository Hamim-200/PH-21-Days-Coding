function findLargerNumber(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}

const inputNum1 = 10;
const inputNum2 = 2;

const largerNumber = findLargerNumber(inputNum1, inputNum2);
console.log("The larger number is:", largerNumber);
