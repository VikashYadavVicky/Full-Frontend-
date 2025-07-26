// Example 1: Spread in function call
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3

// Example 2: Copying an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // [1, 2, 3]

// Example 3: Merging arrays
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]

// Example 4: Spread in object
const user = { name: "Vikash", age: 24 };
const updated = { ...user, city: "Jaipur" };
console.log(updated); // { name: "Vikash", age: 24, city: "Jaipur" }

// Example 5: Array destructuring
const nums = [1, 2, 3, 4, 5];
const [first, ...rest] = nums;
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]

// Example 6: Spread for strings
const word = "hello";
const letters = [...word];
console.log(letters); // ['h', 'e', 'l', 'l', 'o']

// Example 7: Avoid reference copy
const arr = [1, 2, 3];
const copy = [...arr];
copy.push(4);
console.log(arr);  // [1, 2, 3]
console.log(copy); // [1, 2, 3, 4]
