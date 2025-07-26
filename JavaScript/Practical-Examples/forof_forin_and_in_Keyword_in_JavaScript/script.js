// ✅ for...of Loop Examples

// 📌 Example 1: Array
const fruits = ["apple", "banana", "mango"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Output: apple, banana, mango

// 📌 Example 2: String
const name = "Vikash";
for (const letter of name) {
  console.log(letter);
}
// Output: V, i, k, a, s, h

// 🔄 for...in Loop Example

const user = {
  name: "Vikash",
  age: 24,
  city: "Delhi"
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
// Output:
// name: Vikash
// age: 24
// city: Delhi

// 🔍 in Keyword Examples

// 📌 Example 1: In Object
const car = { brand: "Toyota", model: "Fortuner" };
console.log("brand" in car);  // true
console.log("color" in car);  // false

// 📌 Example 2: In Array
const numbers = [1, 2, 3];
console.log(0 in numbers);  // true (index 0 exists)
console.log(5 in numbers);  // false
