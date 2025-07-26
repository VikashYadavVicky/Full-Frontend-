// 🔹 Basic Syntax Example
let i = 0;
do {
  console.log("i is:", i);
  i++;
} while (i < 3);


// 🔍 Dry Run Example
let count = 1;
do {
  console.log("Count is:", count);
  count++;
} while (count <= 3);


// 🔄 Infinite Loop Warning Example (⚠️ Don't run this)
/*
do {
  console.log("I run forever!");
} while (true);
*/


// 🔁 Nested do...while Loop
let x = 1;
do {
  let y = 1;
  do {
    console.log(`x = ${x}, y = ${y}`);
    y++;
  } while (y <= 2);
  x++;
} while (x <= 2);


// ✅ Practical Example: Asking User Input Until Valid
let number;
do {
  number = prompt("Enter a number greater than 100:");
} while (number <= 100 && number !== null);


// ❌ Common Mistake Example (⚠️ Don't run this)
/*
let n = 0;
do {
  console.log("Infinite mistake!");
  // forgot to update n
} while (n < 3);
*/
