// 1. 🔢 Arithmetic Operators
let a = 5, b = 2;
console.log("Addition:", a + b);         // 7
console.log("Subtraction:", a - b);      // 3
console.log("Multiplication:", a * b);   // 10
console.log("Division:", a / b);         // 2.5
console.log("Modulus:", a % b);          // 1
console.log("Exponentiation:", a ** b);  // 25
console.log("Increment:", ++a);          // 6
console.log("Decrement:", --b);          // 1

// 2. 🧮 Assignment Operators
let x = 10;
x += 5; console.log("x += 5:", x);       // 15
x -= 3; console.log("x -= 3:", x);       // 12
x *= 2; console.log("x *= 2:", x);       // 24
x /= 4; console.log("x /= 4:", x);       // 6
x %= 5; console.log("x %= 5:", x);       // 1
x **= 3; console.log("x **= 3:", x);     // 1

// 3. ⚖️ Comparison Operators
console.log("5 == '5':", 5 == '5');          // true
console.log("5 === '5':", 5 === '5');        // false
console.log("5 != '5':", 5 != '5');          // false
console.log("5 !== '5':", 5 !== '5');        // true
console.log("5 > 3:", 5 > 3);                // true
console.log("5 < 3:", 5 < 3);                // false
console.log("5 >= 5:", 5 >= 5);              // true
console.log("5 <= 4:", 5 <= 4);              // false

// 4. 🔗 Logical Operators
console.log("true && false:", true && false);    // false
console.log("true || false:", true || false);    // true
console.log("!true:", !true);                    // false

// 5. 🤏 Ternary Operator
let age = 20;
let message = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary:", message);               // Adult

// 6. 🔍 Type Operators
console.log("typeof 123:", typeof 123);         // number
console.log("typeof 'hello':", typeof 'hello'); // string
console.log("typeof true:", typeof true);       // boolean
console.log("typeof undefined:", typeof undefined); // undefined
console.log("typeof null:", typeof null);       // object (quirk in JS)
console.log("typeof []:", typeof []);           // object
console.log("[] instanceof Array:", [] instanceof Array); // true





const userAge = 22

const isSchoolStudent = (userAge >= 5) && (userAge <= 18)
const isCollegeStudent = (userAge >= 18) && (userAge <= 24)

const isStudent = isSchoolStudent || isCollegeStudent

const andResult = 0 && 2
const orResult = 0 || 2

const andResult2 = '' && 'Hello'
const orResult2 = '' || 'Hello'

const andResult3 = 'Hello' && null
const orResult3 = 'Hello' || null

const andResult4 = 'Hello' && -4 + 4
const orResult4 = undefined || 4 + 8 * 5

const andResult5 = 'Hello' && console.log('hello1')
const orResult5 = undefined || console.log('hello2')
console.log("isSchoolStudent:", isSchoolStudent); // true
console.log("isCollegeStudent:", isCollegeStudent); // false
console.log("isStudent:", isStudent); // true
console.log("andResult:", andResult); // 0  



const username = 5 > 2 ? 'Anurag' : 'Procodrr'

// const gender = 'F'

// debugger
// const userMessage = `${gender.toLocaleLowerCase() === 'f' ? 'She' : 'He'} is a college student.`

// console.log(userMessage);

const result = null ? 'Vicky' : '' ? '12' : 0

console.log(result)

null ? 'Vicky' : '' ? '12' : 0

"Hyy" ? '' ? '12' : 0 :'Vicky' 

"Hyy" ? '' ? '12' : 0 ? '12' : 3 ? 'Right': 'Wrong' :'Vicky' 
console.log("orResult:", orResult); // 2
console.log("andResult2:", andResult2); // ''
console.log("orResult2:", orResult2); // 'Hello'
console.log("andResult3:", andResult3); // null
console.log("orResult3:", orResult3); // 'Hello'


// const username = 'Anurag'

let num = 5

// debugger
// num = num + 5
// num = num + 5
// num = num + 5
// num = num + 5

// num += 5
// num += 5
// num += 5
// num += 5

// num = num * 2
// num = num * 2
// num = num * 2

// num *= 2
// num *= 2
// num *= 2

// const newNum = ++num
// const newNum = --num

// const newNum = num++
// const newNum = num--

// num = num + 1
// num += 1

num++