const name = "Hamim"
const age = 21;
console.log(name  + age + "CSE");
console.log(`Hello My Name is ${name} . My age is ${age}`)

const gameName = new String ('GTA VAICITY');
console.log(gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('T'));


// STring Method
let phrase = 'Hello, World!';
let upperCasePhrase = phrase.toUpperCase(); // 'HELLO, WORLD!'
let index = phrase.indexOf('World'); // 7
let replacedPhrase = phrase.replace('World', 'Universe'); // 'Hello, Universe!'


// Length
let text = 'Hello, World!';
let length = text.length; // 13

//Slice
const slice_string = gameName.slice(0,3);
console.log(slice_string);

//replace
console.log(gameName.replace('VAI','BAY'))

//includes
console.log(gameName.includes('GTA'));

//Split
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);  //Fox
console.log(words);