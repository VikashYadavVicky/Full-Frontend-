'use strict'; // Enforce strict mode to avoid undeclared variables

console.log("🧾 JavaScript Variables — Demo\n");

// 1️⃣ Variable Declaration with var, let, const
var city = "Delhi";
let age = 25;
const name = "Vikash";

console.log("var city =", city);
console.log("let age =", age);
console.log("const name =", name);

// 2️⃣ var: function-scoped, can be redeclared and reassigned
var x = 10;
var x = 20; // ✅ re-declaration allowed
console.log("var x after redeclaration =", x);

// 3️⃣ let: block-scoped, cannot be redeclared in same scope
let y = 30;
y = 35; // ✅ reassignment allowed
console.log("let y after reassignment =", y);

// let y = 40; ❌ SyntaxError: Identifier 'y' has already been declared

// 4️⃣ const: block-scoped, cannot be reassigned or redeclared
const z = 50;
// z = 60; ❌ TypeError
console.log("const z =", z);

// 5️⃣ Implicit Global Variable (should throw error in strict mode)
// undeclaredVar = 100; // ❌ ReferenceError in strict mode

// 6️⃣ Memory Reference: Primitives vs Non-Primitives
let num = 10; // primitive - stores value directly
let arr = [1, 2, 3]; // non-primitive - stores reference
console.log("\n🧠 Memory Example:");
console.log("Primitive num:", num);
console.log("Reference arr:", arr);

// 7️⃣ Naming Rules
let userAge = 22;          // ✅ camelCase
let UserProfile = "Admin"; // ✅ PascalCase (usually for classes)
let user_name = "john";    // ✅ snake_case (not common in JS)
// let user-name = "John"; // ❌ SyntaxError (kebab-case not allowed)

console.log("\n📝 Naming Convention Examples:");
console.log("camelCase -> userAge =", userAge);
console.log("PascalCase -> UserProfile =", UserProfile);
console.log("snake_case -> user_name =", user_name);

// 8️⃣ Re-declaration and Re-assignment
var a = 10;
var a = 20; // ✅ allowed with var
console.log("\nvar a =", a);

let b = 30;
b = 40; // ✅ reassignment
console.log("let b =", b);

// let b = 50; // ❌ SyntaxError: Identifier 'b' has already been declared

const c = 60;
// c = 70; // ❌ TypeError: Assignment to constant variable.
console.log("const c =", c);

// 9️⃣ Best Practices in Action
const firstName = "Vikash";
let currentAge = 22;
var country = "India";

console.log(`\n✅ Best Practice Example:\n${firstName} is ${currentAge} years old and lives in ${country}`);

