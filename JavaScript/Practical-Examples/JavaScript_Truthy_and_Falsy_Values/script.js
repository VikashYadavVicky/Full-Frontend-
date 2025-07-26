// 🔴 Falsy Values
if (false) console.log("false is truthy");          // won't run
if (0) console.log("0 is truthy");                  // won't run
if (-0) console.log("-0 is truthy");                // won't run
if (0n) console.log("0n is truthy");                // won't run
if ("") console.log("Empty string is truthy");      // won't run
if (null) console.log("null is truthy");            // won't run
if (undefined) console.log("undefined is truthy");  // won't run
if (NaN) console.log("NaN is truthy");              // won't run

console.log(false === null); // false

// 🟢 Truthy Values
if (true) console.log("true is truthy");
if ([]) console.log("Empty array is truthy");
if ({}) console.log("Empty object is truthy");
if ("0") console.log("String '0' is truthy");
if ("false") console.log("String 'false' is truthy");
if (Infinity) console.log("Infinity is truthy");
if (-Infinity) console.log("-Infinity is truthy");
if (function () {}) console.log("Function is truthy");

// ✅ Practical Usage in Conditions
const name = "";
if (name) {
  console.log("Name is", name);
} else {
  console.log("Name is empty or undefined");
}

const items = [];
if (items.length) {
  console.log("Array is not empty");
} else {
  console.log("Array is empty");
}
