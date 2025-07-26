// ✅ Math Properties
console.log("Math.PI:", Math.PI);       // 3.141592653589793
console.log("Math.E:", Math.E);         // 2.718281828459045
console.log("Math.SQRT2:", Math.SQRT2); // 1.4142135623730951
console.log("Math.LN2:", Math.LN2);     // 0.6931471805599453

// ✅ Common Math Methods
console.log("Math.round(4.5):", Math.round(4.5)); // 5
console.log("Math.round(4.4):", Math.round(4.4)); // 4

console.log("Math.ceil(4.1):", Math.ceil(4.1));   // 5
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4

console.log("Math.pow(2, 3):", Math.pow(2, 3));   // 8
console.log("Math.sqrt(25):", Math.sqrt(25));     // 5
console.log("Math.abs(-10):", Math.abs(-10));     // 10

console.log("Math.min(5, 3, 7):", Math.min(5, 3, 7)); // 3
console.log("Math.max(5, 3, 7):", Math.max(5, 3, 7)); // 7

console.log("Math.random():", Math.random());     // Random number between 0 and 1
console.log("Math.floor(Math.random() * 10):", Math.floor(Math.random() * 10)); // 0-9

// 🔢 Custom Random Range Function
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random between 1 and 100:", getRandom(1, 100));

// 📐 Trigonometric Methods
console.log("Math.sin(π / 2):", Math.sin(Math.PI / 2)); // 1
console.log("Math.cos(0):", Math.cos(0));               // 1
console.log("Math.tan(π / 4):", Math.tan(Math.PI / 4)); // 1

// 🧮 Logarithmic & Exponential Methods
console.log("Math.log(10):", Math.log(10));     // ~2.302
console.log("Math.log10(100):", Math.log10(100)); // 2
console.log("Math.exp(1):", Math.exp(1));       // ~2.718


// const width = +prompt("Please Enter Rectangle Width");
// const height = +prompt("Please Enter Rectangle Height");

// console.log(width * height);
// document.write(`Rectangle Area: ${width * height}`);


// for (let i = 0; i < 10; i++) {
//     console.log(i);
