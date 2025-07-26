// 🔹 Function Example
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Vikash")); // Output: Hello, Vikash!

// 🔹 Method Example (function as a property of an object)
const person = {
  name: "Vikash",

  // Method using traditional function expression
  add: function (a, b) {
    return `${this.name} adds: ${a + b}`;
  },

  // Method using traditional function expression
  subtract: function (a, b) {
    return `${this.name} subtracts: ${a - b}`;
  },

  // Method using shorthand syntax
  multiply(a, b) {
    return `${this.name} multiplies: ${a * b}`;
  }
};

console.log(person.add(10, 5));        // Output: Vikash adds: 15
console.log(person.subtract(10, 5));   // Output: Vikash subtracts: 5
console.log(person.multiply(10, 5));   // Output: Vikash multiplies: 50

// 🔹 this Keyword Behavior Example
function showThis() {
  console.log("Inside function:", this); // In browser: Window, in strict mode: undefined
}

const obj = {
  name: "Vikash",
  showThisMethod: function () {
    console.log("Inside method:", this); // Refers to 'obj'
  }
};

showThis();              // Logs: global object (Window or undefined in strict mode)
obj.showThisMethod();    // Logs: obj itself
