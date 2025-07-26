// ✅ JavaScript Arrays Full Guide

// 🔹 What is an Array?
let fruits = ["apple", "banana", "orange"];

// 🔹 Accessing Array Elements
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "orange"

// 🔹 Updating Array Elements
fruits[1] = "mango";
console.log(fruits); // ["apple", "mango", "orange"]

// 🔹 Array Length
console.log(fruits.length); // 3

// 🔹 Adding Elements
fruits.push("grape"); // Add to end
fruits.unshift("kiwi"); // Add to start
console.log(fruits); // ["kiwi", "apple", "mango", "orange", "grape"]

// 🔹 Removing Elements
fruits.pop(); // Remove from end
fruits.shift(); // Remove from start
console.log(fruits); // ["apple", "mango", "orange"]

// 🔹 Looping Through Arrays
for (let i = 0; i < fruits.length; i++) {
  console.log("for loop:", fruits[i]);
}

for (let fruit of fruits) {
  console.log("for...of loop:", fruit);
}

// 🔹 Mixed Data Types in Array
let mixed = ["text", 42, true, { name: "A" }, [1, 2]];
console.log(mixed[3].name); // "A"
console.log(mixed[4][1]); // 2

// 🔹 Array Methods

// includes()
console.log(fruits.includes("apple")); // true

// indexOf()
console.log(fruits.indexOf("mango")); // 1

// concat()
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = arr1.concat(arr2);
console.log(combined); // [1,2,3,4,5]

// join()
console.log(fruits.join(", ")); // "apple, mango, orange"

// slice() – doesn't modify original
let newFruits = fruits.slice(1, 3);
console.log(newFruits); // ["mango", "orange"]

// splice() – modifies original
fruits.splice(1, 1, "lemon"); // Replace 1 element at index 1
console.log(fruits); // ["apple", "lemon", "orange"]

// reverse()
fruits.reverse();
console.log(fruits); // ["orange", "lemon", "apple"]

// sort()
fruits.sort();
console.log(fruits); // ["apple", "lemon", "orange"]

// 🔹 map(), filter(), reduce()
let numbers = [1, 2, 3, 4, 5];

// map()
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter()
let even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

// reduce()
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// 🔹 Nested Arrays
let matrix = [
  [1, 2],
  [3, 4]
];
console.log(matrix[1][0]); // 3


// 🔹 Array Methods in Detail

// Basic Array Methods

let names = ["Alice", "Bob", "Charlie"];
console.log("Original Array:", names);
// push() - Add to end
names.push("David");
console.log("After push:", names); // ["Alice", "Bob", "Charlie", "David"]
// pop() - Remove from end
names.pop();
console.log("After pop:", names); // ["Alice", "Bob", "Charlie"]
// unshift() - Add to start
names.unshift("Zara");
console.log("After unshift:", names); // ["Zara", "Alice", "Bob", "Charlie"]
// shift() - Remove from start  
names.shift();
console.log("After shift:", names); // ["Alice", "Bob", "Charlie"]
// indexOf() - Find index of element
console.log("Index of 'Bob':", names.indexOf("Bob")); // 1
// includes() - Check if element exists
console.log("Includes 'Charlie':", names.includes("Charlie")); // true
// join() - Convert array to string
console.log("Joined:", names.join(", ")); // "Alice, Bob, Charlie"
// slice() - Extract part of array
let sliced = names.slice(1, 3);
console.log("Sliced:", sliced); // ["Bob", "Charlie"]
// splice() - Modify array (remove/add elements)
let removed = names.splice(1, 1, "Eve");
console.log("After splice:", names); // ["Alice", "Eve", "Charlie"]
// reverse() - Reverse array
names.reverse();
console.log("Reversed:", names); // ["Charlie", "Eve", "Alice"] 
// sort() - Sort array
names.sort();
console.log("Sorted:", names); // ["Alice", "Charlie", "Eve"]
// concat() - Combine arrays
let moreNames = ["Frank", "Grace"];
let allNames = names.concat(moreNames);
console.log("Concatenated:", allNames); // ["Alice", "Charlie", "Eve", "Frank", "Grace"]
// map() - Transform array
let lengths = names.map(name => name.length);
console.log("Lengths:", lengths); // [5, 7, 5]
// filter() - Filter elements
let longNames = names.filter(name => name.length > 5);
console.log("Long Names:", longNames); // ["Charlie", "Eve"]
// reduce() - Reduce array to single value
let totalLength = names.reduce((total, name) => total + name.length, 0);
console.log("Total Length:", totalLength); // 17
// find() - Find first element that matches condition
let found = names.find(name => name.startsWith("C"));
console.log("Found:", found); // "Charlie"  
// findIndex() - Find index of first matching element
let foundIndex = names.findIndex(name => name.startsWith("E"));
console.log("Found Index:", foundIndex); // 1
// every() - Check if all elements match condition
let allLong = names.every(name => name.length > 3);
console.log("All Long Names:", allLong); // true
// some() - Check if any element matches condition
let anyLong = names.some(name => name.length > 6);
console.log("Any Long Names:", anyLong); // false
// fill() - Fill array with value
let filled = new Array(5).fill("X");
console.log("Filled Array:", filled); // ["X", "X", "X", "X", "X"]  
// flat() - Flatten nested arrays
let nested = [[1, 2], [3, 4]];
let flatArray = nested.flat();
console.log("Flattened Array:", flatArray); // [1, 2, 3, 4]
// flatMap() - Map and flatten in one step
let flatMapped = nested.flatMap(arr => arr.map(num => num * 2));
console.log("Flat Mapped:", flatMapped); // [2, 4, 6, 8]    
// from() - Create array from iterable
let iterable = "Hello";
let arrayFromIterable = Array.from(iterable);
console.log("Array from Iterable:", arrayFromIterable); // ["H", "e", "l", "l", "o"]
// isArray() - Check if value is an array
console.log("Is Array:", Array.isArray(names)); // true
// of() - Create array from arguments
let arrayOf = Array.of(1, 2, 3);
console.log("Array of:", arrayOf); // [1, 2, 3]
// toString() - Convert array to string
let arrayToString = names.toString();
console.log("Array to String:", arrayToString); // "Alice,Charlie,Eve"  
// toLocaleString() - Convert array to localized string
let localeString = names.toLocaleString();
console.log("Locale String:", localeString); // "Alice,Charlie,Eve"
// 🔹 Array Iteration Methods

// forEach() - Execute function for each element
names.forEach((name, index) => {
  console.log(`Name ${index}: ${name}`);
});
// for...of - Loop through elements
for (let name of names) {
  console.log("For...of:", name);
}   
// for...in - Loop through indices (not recommended for arrays)
for (let index in names) {
  console.log(`Index ${index}: ${names[index]}`);
}   
// entries() - Get iterator for key-value pairs
for (let [index, name] of names.entries()) {
  console.log(`Entry ${index}: ${name}`);
}
// keys() - Get iterator for keys (indices)
for (let index of names.keys()) {
  console.log("Key:", index);
}
// values() - Get iterator for values
for (let name of names.values()) {
  console.log("Value:", name);
}
// reduceRight() - Reduce array from right to left
let rightSum = names.reduceRight((total, name) => total + name.length, 0);
console.log("Right Sum:", rightSum); // 17
// findLast() - Find last element that matches condition
let lastFound = names.findLast(name => name.startsWith("C"));
console.log("Last Found:", lastFound); // "Charlie"
// findLastIndex() - Find index of last matching element
let lastFoundIndex = names.findLastIndex(name => name.startsWith("E"));
console.log("Last Found Index:", lastFoundIndex); // 2
// sort() with custom comparator
// let numbers = [10, 5, 3, 8];