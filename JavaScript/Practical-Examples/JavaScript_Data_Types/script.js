// to check datatypes in JavaScript
// use typeof

console.log(`Hello, World!
    system is starting...`);

// 1. Number (Integer & Floating-Point)
let age = 25;  // Integer number
let price = 99.99;  // Floating-point number


// 2. String (Single & Double Quotes)
let firstName = "Alice";  // Double quotes
let greeting = 'Hello, World!';  // Single quotes
let message = `I'm Alice`;  // Backticks

// 3. Boolean (True & False)
let isRaining = true;  
let hasLicense = false;

// 4. Undefined (Uninitialized Variable & Missing Object Property)
let notAssigned;  // Uninitialized variable
let person = {};  
console.log(person.age);  // Undefined property

// 5. Null (Explicitly Set & Null Object)
let emptyValue = null;  
let user = { name: null };  // Null as a property value

// 6. BigInt (Using n Suffix & BigInt() Constructor)
let bigNumber = 123456789012345678901234567890n;  
let anotherBig = BigInt("987654321098765432109876543210");

// 7. Symbol (Unique Symbols)
let id = Symbol("userID");  
let key = Symbol("secretKey");

console.log(age);
console.log(price);
console.log(firstName);
console.log(greeting);
console.log(message);
console.log(isRaining);
console.log(hasLicense);
console.log(notAssigned);
console.log(person.age);
console.log(emptyValue);
console.log(user.name);
console.log(bigNumber);
console.log(anotherBig);
console.log(id);
console.log(key);