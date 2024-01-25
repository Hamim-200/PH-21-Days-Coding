let fruits = ['Apple', 'Banana', 'Orange'];
let cars = new Array('Toyota', 'Honda', 'Ford');

console.log(fruits[0]);// 'Apple'
console.log(cars[1]) ; // 'Honda'

fruits[1] = 'Grapes';
console.log(fruits); // Now, fruits is ['Apple', 'Grapes', 'Orange']

fruits.push('Mango'); // Adds 'Mango' to the end

let lastFruit = fruits.pop(); // Removes and returns the last element ('Mango')


fruits.unshift('Pineapple'); // Adds 'Pineapple' to the beginning
let firstFruit = fruits.shift(); // Removes and returns the first element ('Pineapple')
