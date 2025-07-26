
// // Function Definition
// function introduceMe(username, profession, age) {
//     // console.log(typeof username);
//     // console.log(typeof profession);
//     // console.log(typeof age);
//     console.log('Hi,');
//     console.log(`My name is ${username || 'Procodrr'}.`);
//     console.log(`I am a ${profession}`);
//     console.log(`I am ${age} years old.`); 
// }

// // //                  Function Call
// // const returnValue = introduceMe()

// introduceMe('Anurag', 'Software Engineer', 25)
// // introduceMe('Akash', 'Mechanical Engineer', 27)


// ✅ Function Declaration Examples
// 1. Function Without Parameters
function greet() {
  console.log("Hello, welcome to JavaScript!");
}
greet(); // Output: Hello, welcome to JavaScript!

// 2. Function With One Parameter
function greetUser(name) {
  console.log("Hello, " + name + "!");
}
greetUser("Vikash"); // Output: Hello, Vikash!
greetUser("John");   // Output: Hello, John!

// 3. Function With Multiple Parameters
function addNumbers(a, b) {
  let sum = a + b;
  console.log("Sum is:", sum);
}
addNumbers(5, 3);   // Output: Sum is: 8
addNumbers(10, 15); // Output: Sum is: 25

// 4. Function With Return Value
function multiply(x, y) {
  return x * y;
}
let result1 = multiply(4, 5);
console.log(result1);           // Output: 20
console.log(multiply(7, 3));   // Output: 21

// Function Hoisting Example
sayHello(); // Works due to hoisting
function sayHello() {
  console.log("Hello World");
}



// 🔸 Function Expression Examples

// 1. Function Expression Without Parameters
const greet = function() {
  console.log("Hello from function expression!");
};
greet(); // Output: Hello from function expression!

// 2. Function Expression With One Parameter
const greetUser = function(name) {
  console.log("Hi, " + name + "!");
};
greetUser("Vikash"); // Output: Hi, Vikash!
greetUser("Alice");  // Output: Hi, Alice!

// 3. Function Expression With Multiple Parameters
const addNumbers = function(a, b) {
  let sum = a + b;
  console.log("Sum is:", sum);
};
addNumbers(10, 15); // Output: Sum is: 25
addNumbers(4, 6);   // Output: Sum is: 10

// 4. Function Expression With Return Value
const multiply = function(x, y) {
  return x * y;
};
let result = multiply(5, 6);
console.log(result);          // Output: 30
console.log(multiply(3, 7));  // Output: 21

// Function Expression Hoisting Error
// sayHi(); // ❌ Uncommenting this line will throw an error
const sayHi = function() {
  console.log("Hi There");
};
sayHi(); // ✅ Output: Hi There
