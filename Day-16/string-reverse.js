function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}
const originalString = "Hello";
const reversedString = reverseString(originalString);
console.log(reversedString);
