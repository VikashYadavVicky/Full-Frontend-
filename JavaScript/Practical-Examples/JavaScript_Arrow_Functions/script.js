// // // Function Declaration

// // function square(num){
// //     return num * num
// // } 

// // // Function Expression

// // const square = function(num) {
// //     return num * num
// // }

// // // Arrow Function Expression

// // const square = (num) => {
// //     return num * num
// // }

// const square = num => num * num
// const add = (a, b) => a + b

// const random = () => (
//     Math.floor(Math.random() * 10) + 1
// )

// // setTimeout(() => {
// //     console.log('hiii');
// // }, 2000)

// const fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango']
// fruits.forEach((fruit) => {
//     console.log(fruit);
// }
// )

// ✅ Traditional Function
function addTraditional(a, b) {
  return a + b;
}
console.log(addTraditional(2, 3)); // 5

// ✅ Arrow Function
const addArrow = (a, b) => a + b;
console.log(addArrow(2, 3)); // 5

// 🔹 With One Parameter
const greet = name => `Hello, ${name}`;
console.log(greet("Vikash")); // Hello, Vikash

// 🔹 With Multiple Parameters
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

// 🔹 With No Parameters
const sayHi = () => console.log("Hi!");
sayHi(); // Hi!

// 🔹 Multi-Line Function Body
const divide = (a, b) => {
  if (b === 0) return "Can't divide by zero!";
  return a / b;
};
console.log(divide(10, 2)); // 5

// 🔥 Lexical this - Arrow Function (Incorrect)
const person1 = {
  name: "Vikash",
  greet: () => `Hi, I'm ${this.name}`
};
console.log(person1.greet()); // Hi, I'm undefined

// ✅ Fix Using Regular Function
const person2 = {
  name: "Vikash",
  greet() {
    return `Hi, I'm ${this.name}`;
  }
};
console.log(person2.greet()); // Hi, I'm Vikash
