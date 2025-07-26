// const message = 'Hello World!'
// const faltuMessage = '     Hi, I am Anurag.     '
// const finalMessage = faltuMessage.trim()
// const finalMessageLowerCase = faltuMessage.trim().toLocaleLowerCase()
// const replacedMessage = finalMessage.replace('Hi', 'Hello')

// const lastFourDigits = '9996'
// const maskedAccountNumber = lastFourDigits.padStart(16, '*')

// const capitalMessage = message.toUpperCase()
// const bankBalance = 9873

// const concatenatedString = `Last four digit of my account number is`.concat(' ', lastFourDigits)
// const templateString = `My account number is ${lastFourDigits}.`
// const templateString2 = `I have ₹${bankBalance} in my account.`

// const addedString = 'I have ₹' + bankBalance + ' in my account.'


// ------------------------------
// ✅ String Methods
// ------------------------------
console.log("\n🔹 String Methods Examples");

let str = "JavaScript";

// length
console.log("Length:", str.length); // 10

// toUpperCase & toLowerCase
console.log("Uppercase:", str.toUpperCase()); // JAVASCRIPT
console.log("Lowercase:", str.toLowerCase()); // javascript

// includes()
console.log("Includes 'Script':", str.includes("Script")); // true

// startsWith & endsWith
console.log("Starts with 'Java':", str.startsWith("Java")); // true
console.log("Ends with 'Script':", str.endsWith("Script")); // true

// indexOf & lastIndexOf
console.log("Index of 'a':", str.indexOf("a")); // 1
console.log("Last index of 'a':", str.lastIndexOf("a")); // 3

// slice()
console.log("Slice(0, 4):", str.slice(0, 4)); // Java

// substring()
console.log("Substring(0, 4):", str.substring(0, 4)); // Java

// replace() & replaceAll()
let msg = "Hello world! Hello again!";
console.log("Replace:", msg.replace("Hello", "Hi"));     // Hi world! Hello again!
console.log("ReplaceAll:", msg.replaceAll("Hello", "Hi")); // Hi world! Hi again!

// concat()
let str1 = "Hello ";
let str2 = "World!";
console.log("Concatenated:", str1.concat(str2)); // Hello World!

// padStart() & padEnd()
let num = "5";
console.log("Pad Start (3, '0'):", num.padStart(3, "0")); // 005
console.log("Pad End (3, '0'):", num.padEnd(3, "0"));     // 500

// trim(), trimStart(), trimEnd()
let messy = "   spaced text   ";
console.log("Trim:", `"${messy.trim()}"`);          // "spaced text"
console.log("Trim Start:", `"${messy.trimStart()}"`);  // "spaced text   "
console.log("Trim End:", `"${messy.trimEnd()}"`);      // "   spaced text"

// split()
let csv = "red,green,blue";
console.log("Split CSV:", csv.split(",")); // ["red", "green", "blue"]

// charAt() & charCodeAt()
console.log("Char at 0:", str.charAt(0));         // "J"
console.log("Char code at 0:", str.charCodeAt(0)); // 74


const message = ' Hello World! '
console.log(message.length)
console.log(message.trim().length)
console.log(message.trim().toLowerCase())       
console.log(message.trim().toUpperCase())
console.log(message.trim().replace('Hello', 'Hi'))
console.log(message.includes('Hello'))
console.log(message.startsWith('Hello'))
console.log(message.endsWith('World!'))
console.log(message.indexOf('World'))
console.log(message.slice(6, 11))
console.log(message.substring(6, 11))
console.log(message.substr(6, 5))
console.log(message.split(' '))
console.log(message.split(''))
console.log(message.repeat(3))
console.log(message.replace('Hello', 'Hi'))
console.log(message.replaceAll('Hello', 'Hi'))


console.log('9996'.padStart(16, '*'))
console.log('9996'.padEnd(16, '*'))
console.log(message.trim().concat(' ', 'Anurag'))
console.log(`My name is ${'Anurag'}`)


console.log(message.charAt(3))
console.log(message.charCodeAt(0))
console.log(String.fromCharCode(72))
console.log(message.codePointAt(0))
console.log(String.fromCodePoint(72))  
