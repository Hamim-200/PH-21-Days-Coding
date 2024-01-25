const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Developer",
};

console.log(person.name); // 'John Doe'
console.log(person["age"]); // 30

person.age = "78";
console.log(person["age"]);

let person = {
  name: "John Doe",
  address: {
    city: "New York",
    zipCode: "10001",
  },
};

console.log(person.address.city); // 'New York'


let name = 'John Doe';
let age = 30;

let person = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
};

person.greet(); // Outputs: Hello, my name is John Doe and I'm 30 years old.

