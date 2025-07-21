# 📘 Introduction to JavaScript

JavaScript is a **programming language** that allows us to add interactivity, behavior, and logic to websites.

When you visit a modern website and see things like:
- Image sliders,
- Form validation,
- Pop-up alerts,
- Drop-down menus,
- Dynamic content loading...

All of this is done using **JavaScript**!

## 🧠 What is JavaScript?

JavaScript is:
- A **client-side** (runs in the browser) scripting language.
- **Lightweight** and easy to learn.
- Used to **create dynamic and interactive** web pages.
- Supported by all major **web browsers**.
- Also used in **server-side development** using Node.js.

### ✅ Features of JavaScript

| Feature | Description |
|--------|-------------|
| 💻 Client-Side | Runs inside the user's browser without server interaction |
| 🚀 Fast | Runs quickly because it executes directly in the browser |
| 🔗 Interoperable | Works well with HTML & CSS |
| 🌐 Platform Independent | Can run on any device with a browser |
| 📚 Lightweight | Minimal syntax; easy to learn and write |
| 🔁 Dynamic | Handles real-time updates and user events |

## 📜 History of JavaScript

Let’s look at the background of this powerful language:

### 📅 1995 – Birth of JavaScript
- Created by **Brendan Eich** in just **10 days** at **Netscape**.
- First name: **Mocha**
- Then renamed to: **LiveScript**
- Final name: **JavaScript** (to ride on Java's popularity)

> 🔹 **Note**: Java and JavaScript are different languages.  
> The name similarity is just branding — they are NOT the same.

### 🌍 Evolution Timeline

| Year | Event |
|------|-------|
| 1995 | JavaScript created by Brendan Eich at Netscape |
| 1996 | Renamed to JavaScript |
| 1997 | Standardized by ECMA — first version called **ECMAScript 1 (ES1)** |
| 2009 | **ES5** released (important version, added many features) |
| 2015 | **ES6 / ECMAScript 2015** — major upgrade (let, const, arrow functions, etc.) |
| Now  | Yearly updates (ES7, ES8, ES9...) adding modern features |

### 🤔 Why Learn JavaScript?

- It’s one of the **core technologies** of the web (along with HTML & CSS)
- Used in:
  - Web apps
  - Mobile apps (React Native)
  - Server-side apps (Node.js)
  - Desktop apps (Electron)
  - Game development


### 🧪 Where Can JavaScript Be Used?

| Area | Examples |
|------|----------|
| Frontend | Form validation, sliders, animations |
| Backend | Server apps with Node.js |
| Mobile Apps | Android/iOS apps using React Native |
| Desktop Apps | Tools like VS Code, Slack using Electron |
| Games | 2D/3D browser games |

### ✅ Summary

- JavaScript is the **language of the web** 🌐
- It makes websites **interactive** and **dynamic**
- Created in 1995 by **Brendan Eich**
- Grown into a **powerful and universal language**

> ✨ “JavaScript is the brush that paints interactivity on the canvas of the web.”


---
# 📘 How to Use JavaScript in HTML

JavaScript can be added to an HTML document in **three main ways**:  
1. ✅ Inline  
2. ✅ Internal  
3. ✅ External  

Let’s look at each method in detail with examples, pros, and cons.

## 1️⃣ Inline JavaScript

Inline JavaScript is written directly within an HTML element using the `onclick`, `onmouseover`, etc. attributes.

#### 🧪 Example:
```html
<button onclick="alert('Hello!')">Click Me</button>
```

#### ✅ Pros:
- Simple and quick for small actions
- Good for testing or debugging one-liners

#### ❌ Cons:
- Not suitable for large or complex code
- Hard to maintain and debug
- Violates separation of concerns (HTML & JS mixed)

## 2️⃣ Internal JavaScript

Internal JS is placed within `<script>` tags inside the `<head>` or `<body>` of the HTML file.

#### 🧪 Example:
```html
<!DOCTYPE html>
<html>
<head>
  <script>
    function showMessage() {
      alert("Welcome!");
    }
  </script>
</head>
<body>
  <button onclick="showMessage()">Click</button>
</body>
</html>
```

#### ✅ Pros:
- Better structure than inline
- Good for small projects or single-page applications

#### ❌ Cons:
- Still couples HTML and JavaScript
- Not reusable across multiple pages

## 3️⃣ External JavaScript

External JS is written in a `.js` file and linked to the HTML using the `<script src="...">` tag.

#### 🧪 Example:
**HTML File:**
```html
<!DOCTYPE html>
<html>
<head>
  <script src="script.js"></script>
</head>
<body>
  <button onclick="showMessage()">Click</button>
</body>
</html>
```

**script.js File:**
```javascript
function showMessage() {
  alert("External JS File Loaded!");
}
```

#### ✅ Pros:
- Clean separation of HTML and JavaScript
- Reusable and maintainable
- Cached by browsers (better performance)

#### ❌ Cons:
- Slightly more complex setup
- File must be loaded before it can be used (may need `defer` or `async`)

### 🧠 Best Practice

> ✅ **Use external JavaScript** for all real projects.  
> 🚫 Avoid inline scripts for anything beyond quick demos.

### 📌 Summary Table

| Type      | Location                     | Best For            | Pros                          | Cons                          |
|-----------|------------------------------|---------------------|-------------------------------|-------------------------------|
| Inline    | Inside HTML element          | Tiny scripts        | Easy & quick                  | Not maintainable              |
| Internal  | `<script>` in HTML file      | Small projects      | Organized but limited scope   | Not reusable across pages     |
| External  | Separate `.js` file          | Large applications  | Clean, reusable, maintainable | Setup slightly more complex   |

---
# 🧾 JavaScript Syntax and Statements

This section covers the **basic structure**, **syntax rules**, and **types of statements** used in JavaScript.

## 📌 What is JavaScript Syntax?

JavaScript syntax is the set of rules that define a **valid JavaScript program**.

Just like grammar in a language, **JavaScript syntax** tells the interpreter how to read and execute code.

### 🧱 Basic Syntax Rules

| Syntax Component   | Example                          | Description                                |
|--------------------|----------------------------------|--------------------------------------------|
| Statements         | `let x = 10;`                    | Instructions that the browser can execute. |
| Semicolons         | `let y = 20;`                    | Ends most statements (optional, but best practice). |
| Comments           | `// single-line` or `/* multi-line */` | Explain or disable code.           |
| Case Sensitivity   | `var num` ≠ `VAR num`            | JavaScript is case-sensitive.              |
| Whitespace         | `let x = 5;` vs `let    x=5;`    | Ignored by JS (used for readability).      |

### ✍️ Writing Statements

#### 🔹 Declaration Statement
```js
let a = 5;
const name = "Vikash";
```
Declares variables using `let`, `const`, or `var`.

#### 🔹 Assignment Statement
```js
a = 10;
```
Assigns or updates the value of a variable.

#### 🔹 Function Call Statement
```js
alert("Hello!");
console.log("Debug message");
```
Invokes a built-in or user-defined function.

#### 🔹 Control Statements
```js
if (a > 0) {
  console.log("Positive");
}
```
Handles decisions, loops, and branches (`if`, `else`, `while`, `for`, etc).

#### 🔹 Block Statements
```js
{
  let x = 10;
  let y = 20;
}
```
Used to group statements together.

### ⚖️ Statement vs Expression

| Term         | Description                                         | Example             |
|--------------|-----------------------------------------------------|---------------------|
| Statement    | Complete instruction to be executed                 | `let x = 10;`       |
| Expression   | Produces a value and can be part of a statement     | `x + 5` or `"Hi"`   |

### 🔄 Best Practices

✅ Always end statements with semicolons (to avoid automatic semicolon insertion bugs).  
✅ Use meaningful variable and function names.  
✅ Indent and space your code for better readability.  
✅ Keep one statement per line.


### 📘 Summary

- JavaScript is case-sensitive and syntax-based.
- It is good practice to use **semicolons**, even though they’re optional.
- Statements are individual commands; expressions are values or calculations.
- Comments help explain your code and make it easier to maintain.

### ✅ Example Code:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JS Syntax Example</title>
    <script>
      // This is a single-line comment
      let name = "Vikash";
      let age = 22;

      if (age > 18) {
        console.log(name + " is an adult.");
      }
    </script>
  </head>
  <body>
    <h1>Check the Console!</h1>
  </body>
</html>
```
- If you don't understand some syntax like if else and some more don't worry we discuss this topics in very detailed in this JS notes.

---
# 🔢 FUNDAMENTALS Of JavaScripts
---
# 🔢 JavaScript Data Types

JavaScript provides different types of values that can be stored in variables. These types are divided into **primitive** and **non-primitive (reference)** types.

## ✅ 1. Primitive Data Types

Primitive data types are immutable and stored directly in the variable.

| Type         | Description                              | Example               |
|--------------|------------------------------------------|-----------------------|
| `String`     | Textual data                             | `"Hello"`             |
| `Number`     | Integers or floating-point numbers        | `42`, `3.14`          |
| `Boolean`    | Represents `true` or `false`             | `true`, `false`       |
| `undefined`  | Variable declared but not assigned       | `let a; // undefined` |
| `null`       | Explicitly set to no value               | `let b = null;`       |
| `BigInt`     | Large integers beyond `Number` limits     | `12345678901234567890n` |
| `Symbol`     | Unique identifiers                       | `Symbol("id")`        |

## ✅ 2. Non-Primitive (Reference) Data Types

These are objects and are stored by reference.

| Type      | Description                    | Example                        |
|-----------|--------------------------------|--------------------------------|
| Object    | Key-value pairs                | `{ name: "Vikash", age: 22 }`  |
| Array     | Ordered list of items          | `[1, 2, 3]`                     |
| Function  | A block of reusable code       | `function greet() {}`          |
| Date      | Date and time                  | `new Date()`                   |

- .
- This guide focuses **only** on Primitive Data Types with detailed explanation and minimum **3–4 examples** each.
- .

## ✅ What are Primitive Data Types?

Primitive data types are the **most basic types of data**. They are:

* **Immutable** (cannot be changed after creation)
* **Stored directly by value**

There are **7 primitive types** in JavaScript:

### 🔹 1. String

- Used to store **textual data** (sequence of characters).
- String are indexable/Iteratable. Means We can access with index and we can use loop also.

#### Syntax:

```js
let name = "Alice";
```

#### Examples:

```js
let city = "Delhi";
let greeting = 'Hello, world!';
let message = `Welcome, ${city}!`;
let emptyString = "";     // Empty string
let quote = 'She said "Hi"';
```


### 🔹 2. Number

Used for all kinds of **numerical values**: integers, floats, etc.

#### Examples:

```js
let age = 25;
let temperature = -4;
let price = 99.99;
let pi = 3.14159;
let distance = 1.6e5; // Scientific notation (160000)
```


### 🔹 3. Boolean

Represents a **logical value**: either `true` or `false`.

#### Examples:

```js
let isLoggedIn = true;
let hasPermission = false;
let isAdult = age >= 18; // true
let isRainy = false;
```

### 🔹 4. Undefined

A variable that is declared but **not assigned** any value.

#### Examples:

```js
let data;
console.log(data); // undefined

let result = undefined;
console.log(typeof result); // "undefined"
```

### 🔹 5. Null

Used to explicitly assign **"no value"** to a variable.

#### Examples:

```js
let user = null;
let selectedColor = null;
let currentTask = null;
```

> 🔸 `null` is often used to indicate intentional absence of any object value.

### 🔹 6. Symbol (Introduced in ES6)

Represents a **unique and immutable** identifier.

#### Examples:

```js
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false

let userID = Symbol("user");
let obj = {};
obj[userID] = 101;
```

### 🔹 7. BigInt (Introduced in ES2020)

Used to represent **very large integers** beyond the limit of Number type.

#### Examples:

```js
let bigNumber = 9007199254740991n;      // With 'n' suffix
let anotherBig = BigInt("123456789012345678901234567890");
console.log(bigNumber + 10n);           // 9007199254741001n
```

> 🔸 Use `n` suffix or `BigInt()` constructor to declare BigInt values.


### 📊 Summary Table – Primitive Types Only

| Data Type | Description                  | Example                        |
| --------- | ---------------------------- | ------------------------------ |
| String    | Textual data                 | "Hello", 'Hi', `Hello ${name}` |
| Number    | Integers and decimals        | 42, 3.14, -10, 1.5e3           |
| Boolean   | Logical true/false           | true, false                    |
| Undefined | Declared, not assigned       | let x;                         |
| Null      | No value (intentional)       | let x = null;                  |
| Symbol    | Unique, immutable identifier | Symbol("id")                   |
| BigInt    | Very large integers          | 1234567890123n                 |

### 🔍 Type Checking – Primitive Types

Use the `typeof` operator:

```js
console.log(typeof "Hello");    // string
console.log(typeof 42);         // number
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object (known bug)
console.log(typeof Symbol());   // symbol
console.log(typeof 123n);       // bigint
```

- ✅ **Note:** `typeof null === "object"` is a known JavaScript bug.

- ✅ JavaScript is a **dynamically typed** language — types are assigned at runtime.

- ✅ We can check the type of any type useing 'typepof'.

- ✅ Also we have a type NaN Not a Number. We Dicuss in this topic in upcoming topics.

---
# 📘 JavaScript Type Conversion 

JavaScript is a **dynamically typed language**, which means variables can hold values of any type and can change type at runtime.

There are **two main types of type conversion**:

* ✅ **Implicit Type Conversion (Type Coercion)**
* ✅ **Explicit Type Conversion (Type Casting)**

## 🔹 Implicit Type Conversion (Type Coercion)

JavaScript automatically converts data types when needed.

### ✅ Examples:

```js
// Number + String = String
let result1 = 10 + "";      // "10"
let result2 = 10 + "5";     // "105"

// Boolean to Number
let result3 = true + 1;     // 2
let result4 = false + 10;   // 10

// String - Number = Number
let result5 = "10" - 2;     // 8

// null to Number
let result6 = null + 5;     // 5

// undefined to Number results in NaN
let result7 = undefined + 1; // NaN
```

> ✅ JavaScript converts values to the appropriate type automatically **based on the operator**.

## 🔹 Special Cases – Coercion by Adding String

JavaScript coerces the type when one of the operands is a string in a `+` operation.

### ✅ Examples:

```js
let a = 10 + "";         // "10"
let b = 10 + " apples";  // "10 apples"
let c = "5" + 5;         // "55"
let d = 5 + 5 + "5";     // "105"
let e = "" + true;       // "true"
```

> ✅ When using the `+` operator, **if any operand is a string**, JavaScript converts the other operand to a string and performs **string concatenation**.

## 🔹 Special Case – Convert String to Number using `+` Operator

JavaScript allows converting strings into numbers by prefixing them with the `+` operator.

### ✅ Examples:

```js
let str1 = "100";
let num1 = +str1;        // 100 (number)

let str2 = "3.14";
let num2 = +str2;        // 3.14

let str3 = "abc";
let num3 = +str3;        // NaN

let str4 = "";
let num4 = +str4;        // 0
```

> 🔸 The unary `+` operator attempts to convert its operand to a number.

## 🔹 Explicit Type Conversion (Type Casting)

You manually convert values using functions or constructors.

### ✅ String Conversion:

```js
String(123);         // "123"
String(true);        // "true"
String(null);        // "null"

let num = 100;
let str = num.toString(); // "100"
```

### ✅ Number Conversion:

```js
Number("123");       // 123
Number(true);         // 1
Number(false);        // 0
Number("abc");       // NaN
parseInt("42");       // 42
parseFloat("3.14");   // 3.14
```

### ✅ Boolean Conversion:

```js
Boolean(0);           // false
Boolean(1);           // true
Boolean("");          // false
Boolean("hello");    // true
Boolean(null);        // false
```

> 🔸 Use `Boolean()`, `Number()`, `String()` for explicit conversions.

### 📊 Summary Table – Type Conversion

| Expression        | Result | Type    |
| ----------------- | ------ | ------- |
| `10 + ""`         | "10"   | String  |
| `true + 1`        | 2      | Number  |
| `"5" - 2`         | 3      | Number  |
| `"10 apples" - 5` | NaN    | Number  |
| `String(123)`     | "123"  | String  |
| `Number("abc")`   | NaN    | Number  |
| `Boolean("")`     | false  | Boolean |
| `+"100"`          | 100    | Number  |
| `+"abc"`          | NaN    | Number  |
| `+""`             | 0      | Number  |

## 🧠 typeof vs instanceof vs constructor

### ✅ typeof

Returns a string indicating the type.

```js
typeof 123;           // "number"
typeof "abc";        // "string"
typeof true;          // "boolean"
typeof null;          // "object" (known bug)
typeof undefined;     // "undefined"
```

### ✅ instanceof

Checks if an object is an instance of a constructor.

```js
[] instanceof Array;      // true
{} instanceof Object;     // true
new Date() instanceof Date; // true
```

### ✅ constructor

Returns the constructor function of the object.

```js
"hello".constructor;     // String()
(123).constructor;       // Number()
(true).constructor;      // Boolean()
```

## ⚠️ Common Pitfalls

```js
Number(" ");        // 0 (empty string is treated as 0)
Number(null);       // 0
Number(undefined);  // NaN

true + true;        // 2
false + true;       // 1
"10" + 1;           // "101" (string + number = string)
"10" - 1;           // 9     (string - number = number)
+"100";             // 100 (string to number)
```

---

# 🧾 JavaScript Variables

This section covers how to declare and use variables in JavaScript using `var`, `let`, and `const` — including rules, best practices, and common pitfalls.

## 🧠 What are Variables?

Variables are containers for storing data values. In JavaScript, you can declare variables using:

* `var` – Old way (function-scoped)
* `let` – Modern way (block-scoped)
* `const` – Block-scoped, but cannot be reassigned

### 🧪 Syntax:

```js
let age = 25;
const name = "Vikash";
var city = "Delhi";
```

## 📦 Types of Variable Declarations

### 🔹 var

```js
var x = 10;
```

* Function-scoped
* Can be re-declared and updated
* Avoid in modern JS

### 🔹 let

```js
let y = 20;
```

* Block-scoped
* Can be updated but not re-declared in the same scope

### 🔹 const

```js
const z = 30;
```

* Block-scoped
* Cannot be updated or re-declared
* Must be initialized at declaration

## ⚠️ What if we don’t use var, let, or const?

```js
a = 10;
```

* This creates an **implicit global variable**, even if written inside a function.
* It is considered **bad practice** because:

  * It pollutes the global scope.
  * It can cause **unintended side effects**.
  * It makes debugging harder.
  * Use 'use strict' in top of the js file for avoiding this type error. Use srtict ensure that the all variables are decleare in correct way.

✅ **Avoid this pattern**. Always declare variables using `let`, `const`, or `var` to keep your code safe and predictable.


## 🧠 Storing Type Behind the Scenes

When you write:

```js
let a = 10;
```

* JavaScript creates a variable `a` that stores a **reference** (or memory address) to the value `10` in memory.
* For **primitive types** (numbers, strings, booleans, null, undefined, symbol, bigint), the value itself is stored.
* For **non-primitive types** (like objects, arrays, functions), the variable stores a **reference** to the memory location.

📌 In essence, variables are **pointers** to values stored in memory — either directly (for primitives) or indirectly (for objects).

Example:

```js
let x = 10;           // x points directly to 10
let arr = [1, 2, 3];  // arr holds reference to the array in memory
```

## 📏 Naming Rules

* Can include letters, digits, underscores, `$`
* Must begin with a letter, `_`, or `$`
* **Case-sensitive** (`myVar` ≠ `myvar`)
* Should not use reserved words (like `return`, `function`, etc.)

✅ Prefer camelCase (`userAge`, `totalAmount`)

## 🔤 Variable Naming Cases

### 🔹 camelCase

* Most common in JavaScript

```js
let firstName = "John";
```

### 🔹 PascalCase

* Common in class names

```js
class UserProfile {
  constructor() {}
}
```

### 🔹 snake\_case

* Rare in JS (used in other languages like Python)

```js
let user_name = "john_doe";
```

### 🔹 kebab-case

* ❌ **Not allowed in variable names** (used in file names, CSS classes)

```js
// let user-name = "John"; ❌ SyntaxError
```

## 🔄 Re-declaration and Re-assignment

```js
var a = 10;
var a = 20; // allowed

let b = 30;
b = 40;     // allowed
// let b = 50; ❌ SyntaxError

const c = 60;
c = 70;     // ❌ TypeError
```

## 💡 Best Practices

* Use `const` by default.
* Use `let` when reassignment is needed.
* Avoid `var` in modern JavaScript.
* Declare all variables at the top of their scope.


### ✅ Example:

```js
const firstName = "Vikash";
let age = 22;
var country = "India";

console.log(`${firstName} is ${age} years old and lives in ${country}`);
```

### 📘 Summary

* Always declare variables using `let` or `const`.
* Avoid undeclared variables (like `x = 5`).
* Prefer `const` unless reassignment is necessary.
* Use meaningful variable names for better readability.
* Use `camelCase` for variable names and `PascalCase` for class names.
* Understand the memory model: primitives store values directly, non-primitives store references.

---
# ⚙️ JavaScript Code Execution Process 

JavaScript executes code in two main phases whenever it runs a script:
(JavaScript jab bhi code chalata hai, woh do main phases mein kaam karta hai:)


## 🔹 1. **Memory Creation Phase** (a.k.a. **Creation Phase** or **Hoisting Phase**)

(Phase 1: Memory Creation Phase ya Creation Phase ya Hoisting Phase ke naam se bhi jana jata hai)

### ✅ What Happens in This Phase:

(Is phase mein kya hota hai:)

* A **global execution context** is created.
  (Ek global execution context create hota hai.)
* A **`this` binding** is set (refers to the global object like `window` in browsers).
  (`this` keyword global object ko point karta hai, browser mein `window` hota hai.)
* **Memory is allocated** for:
  (Memory allocate hoti hai:)

  * **Variables** → Initialized with `undefined`
    (Variables ko memory milti hai aur unka value `undefined` set hota hai.)
  * **Functions** → Entire function definitions are stored
    (Functions ka pura definition memory mein store ho jata hai.)
* **Hoisting** occurs:
  (Hoisting hoti hai:)

  * Variables declared with `var` are hoisted and initialized with `undefined`
    (`var` se declare kiye gaye variables upar uth jaate hain aur `undefined` set hote hain.)
  * Functions declared using the `function` keyword are hoisted completely (including the body)
    (`function` keyword se declared functions puri tarah se upar uth jaate hain, body ke saath.)
  * Variables declared with `let` and `const` are hoisted but not initialized
    (`let` aur `const` se declare kiye gaye variables bhi hoist hote hain, lekin unhe initialize nahi kiya jata — Temporal Dead Zone hoti hai.)

### 🧠 Example with `var`, `let`, `const`, and `function`:

```js
console.log(a);      // undefined (var hoisting - undefined)
// console.log(b);   // ReferenceError (let hoisted but not initialized)
// console.log(c);   // ReferenceError (const hoisted but not initialized)
console.log(foo());  // "Hello" (function hoisted)

var a = 10;
let b = 20;
const c = 30;

function foo() {
  return "Hello";
}
```

#### 💡 Behind the scenes: (Peeche kya hota hai memory mein)

```js
// Memory Creation Phase:
a => undefined          // (var ke liye undefined set hota hai)
b => uninitialized      // (let ke liye value set nahi hoti)
c => uninitialized      // (const ke liye bhi value set nahi hoti)
foo => function foo() { return "Hello"; }  // (poora function memory mein aata hai)
```

## 🔹 2. **Code Execution Phase**

(Phase 2: Code Execution Phase)

This is the **second phase** where the code actually runs **line-by-line**.
(Yeh doosra phase hota hai jahan JavaScript code ko line-by-line execute karta hai.)

### ✅ What Happens in This Phase:

(Is phase mein kya hota hai:)

* JavaScript starts **executing** the code from top to bottom.
  (JavaScript upar se neeche tak code ko execute karta hai.)
* Variables are **assigned values** (from right-hand side of `=`)
  (Variables ko unke actual values diye jaate hain `=` ke right side se.)
* Functions are **invoked** when called
  (Jab functions call hote hain tab woh execute hote hain.)
* Control structures like loops, if-else, and logical conditions are evaluated
  (Loops, if-else, aur conditions evaluate ki jaati hain.)

### 🧠 Example:

```js
var a = 10;          // a mein 10 assign hota hai
let b = 20;          // b mein 20 assign hota hai
const c = 30;        // c mein 30 assign hota hai

function add(x, y) {
  return x + y;
}

console.log(add(a, b));  // 30
```

#### 💡 Execution Flow:

(Kaise step-by-step chalta hai):

* `a = 10` → `a` now holds `10`
  (`a` variable ko ab 10 assign ho gaya hai.)
* `b = 20` → `b` now holds `20`
  (`b` variable ko ab 20 assign ho gaya hai.)
* `c = 30` → `c` now holds `30`
  (`c` variable ko ab 30 assign ho gaya hai.)
* `add()` is called → returns `30`
  (`add()` function call hota hai aur yeh 30 return karta hai.)
* `console.log()` outputs `30`
  (`console.log()` 30 output karega.)


### 📌 Summary:

(Summary ya Saaransh:)

| Phase             | Actions Performed                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| Memory Creation   | - Allocate memory for variables and functions<br>- Set up `this` binding<br>- Hoisting happens |
| (Memory Creation) | (Variables/functions ke liye memory allocate hoti hai, `this` set hota hai, hoisting hoti hai) |
| Code Execution    | - Assign values<br>- Execute functions<br>- Control flow statements are processed              |
| (Code Execution)  | (Values assign hoti hain, functions execute hote hain, control flow statements run karte hain) |

---
# 🛈 JavaScript Dialog Boxes

JavaScript provides built-in dialog boxes to interact with the user. These are simple UI pop-ups used for messages, inputs, or confirmations.

## 1️⃣ `alert()` – Show Message Only

Displays a message box with an **OK** button.

### ✅ Syntax:

```js
alert("Your message here");
```

### ✅ Examples:

```js
alert("Welcome to our website!");
alert("This is a warning!");
let name = "Vikash";
alert("Hello " + name);
```

> ℹ️ Used for informational messages. You **cannot get user input** using `alert()`.


## 2️⃣ `prompt()` – Take Input from User

Displays a dialog with an **input field**, OK and Cancel buttons.
Returns the **string value** entered by user, or `null` if Cancel is pressed.

### ✅ Syntax:

```js
let result = prompt("Your message", "default value");
```

### ✅ Examples:

```js
let age = prompt("What is your age?", "18");
alert("You entered: " + age);
```

```js
let name = prompt("Enter your name:");
if (name !== null) {
  alert("Hello, " + name + "!");
}
```

## 3️⃣ `confirm()` – Ask User to Confirm

Displays a dialog box with **OK** and **Cancel** buttons.
Returns a **boolean**: `true` if OK is pressed, `false` if Cancel.

### ✅ Syntax:

```js
let result = confirm("Do you want to continue?");
```

### ✅ Examples:

```js
let response = confirm("Are you sure you want to delete this file?");
if (response) {
  alert("File deleted!");
} else {
  alert("Operation canceled.");
}
```

### 📌 Summary Table

| Dialog Box  | Description                 | Returns       | Use Case                     |
| ----------- | --------------------------- | ------------- | ---------------------------- |
| `alert()`   | Show message with OK button | `undefined`   | Notify user                  |
| `prompt()`  | Ask input with OK/Cancel    | `string/null` | Get user input               |
| `confirm()` | Confirm with OK/Cancel      | `true/false`  | Ask Yes/No or Confirm action |


📝 These dialog boxes are useful in small interactions, testing, or learning — but are rarely used in modern UI-heavy web apps due to limited styling and blocking behavior.

---
# 📌 JavaScript Template Literals & String Methods

## ✅ Template Literals

Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation using backticks (`` ` ``).

### 🔹 Syntax

```js
`string text`
`string text ${expression} string text`
```

### 🔹 Features

1. **Multi-line strings**
2. **String interpolation**
3. **Embedded expressions**

### 🔹 Examples

```js
// Example 1: Multi-line string
let multiLine = `Hello,
This is a multi-line string.`;
console.log(multiLine);

// Example 2: Interpolation
let name = "Vikash";
let greeting = `Hello, ${name}!`;
console.log(greeting);

// Example 3: Expressions inside template
let a = 10, b = 20;
console.log(`The sum of a and b is: ${a + b}`);

// Example 4: Calling functions inside template
function getAge() {
  return 25;
}
console.log(`My age is ${getAge()}`);
```

## ✅ String Methods in JavaScript

JavaScript provides several built-in string methods.

### 🔹 `length`

📏 Get the total number of characters.

```js
let str = "JavaScript";
console.log(str.length); // 10
```
- Length is a property of string they have only one property that is length this is not a method.

### 🔹 `toUpperCase()` / `toLowerCase()`

🔠 Convert string to uppercase or lowercase.

```js
console.log(str.toUpperCase()); // "JAVASCRIPT"
console.log(str.toLowerCase()); // "javascript"
```

### 🔹 `includes()`

🔍 Check if a substring is present.

```js
console.log(str.includes("Script")); // true
```

### 🔹 `startsWith()` / `endsWith()`

✅ Check string start/end.

```js
console.log(str.startsWith("Java")); // true
console.log(str.endsWith("Script")); // true
```

### 🔹 `indexOf()` / `lastIndexOf()`

🔢 Find first or last occurrence index.

```js
console.log(str.indexOf("a")); // 1
console.log(str.lastIndexOf("a")); // 3
```

### 🔹 `slice(start, end)`

✂️ Extract portion of string.

```js
console.log(str.slice(0, 4)); // "Java"
```

### 🔹 `substring(start, end)`

Same as `slice`, but doesn't allow negative values.

```js
console.log(str.substring(0, 4)); // "Java"
```

### 🔹 `replace()` / `replaceAll()`

♻️ Replace text in a string.

```js
let msg = "Hello world! Hello again!";
console.log(msg.replace("Hello", "Hi"));     // "Hi world! Hello again!"
console.log(msg.replaceAll("Hello", "Hi"));  // "Hi world! Hi again!"
```

### 🔹 `concat()`

➕ Join strings together.

```js
let str1 = "Hello ";
let str2 = "World!";
console.log(str1.concat(str2)); // "Hello World!"
```

### 🔹 `padStart()` / `padEnd()`

🔢 Pad with characters from left or right.

```js
let num = "5";
console.log(num.padStart(3, "0")); // "005"
console.log(num.padEnd(3, "0"));   // "500"
```

### 🔹 `trim()` / `trimStart()` / `trimEnd()`

🧹 Remove extra spaces.

```js
let messy = "   spaced text   ";
console.log(messy.trim());       // "spaced text"
console.log(messy.trimStart());  // "spaced text   "
console.log(messy.trimEnd());    // "   spaced text"
```

### 🔹 `split(separator)`

🔗 Convert string to array.

```js
let csv = "red,green,blue";
console.log(csv.split(",")); // ["red", "green", "blue"]
```

### 🔹 `charAt(index)` / `charCodeAt(index)`

🔤 Get specific character or Unicode.

```js
console.log(str.charAt(0));      // "J"
console.log(str.charCodeAt(0));  // 74
```
---

# 📐 JavaScript Math Object

The `Math` object in JavaScript is a built-in object that provides properties and methods for mathematical constants and functions. Unlike other objects, `Math` is not a constructor — all its methods and properties are static.


## ✅ Commonly Used Math Properties

| Property     | Description                          |
| ------------ | ------------------------------------ |
| `Math.PI`    | Returns the value of PI (3.14159...) |
| `Math.E`     | Returns Euler's number (2.718...)    |
| `Math.SQRT2` | Returns the square root of 2         |
| `Math.LN2`   | Returns the natural logarithm of 2   |

```js
console.log(Math.PI);     // 3.141592653589793
console.log(Math.E);      // 2.718281828459045
```

## ✅ Common Math Methods

### 🔹 `Math.round(x)`

Rounds `x` to the nearest integer.

```js
Math.round(4.5); // 5
Math.round(4.4); // 4
```

### 🔹 `Math.ceil(x)`

Returns the smallest integer greater than or equal to `x`.

```js
Math.ceil(4.1); // 5
```

### 🔹 `Math.floor(x)`

Returns the largest integer less than or equal to `x`.

```js
Math.floor(4.9); // 4
```

### 🔹 `Math.trunc(x)`

Returns the integer part of `x` (removes decimals).

```js
Math.trunc(4.9); // 4
```

### 🔹 `Math.pow(x, y)`

Returns the value of `x` raised to the power `y`.

```js
Math.pow(2, 3); // 8
```

### 🔹 `Math.sqrt(x)`

Returns the square root of `x`.

```js
Math.sqrt(25); // 5
```

### 🔹 `Math.abs(x)`

Returns the absolute (positive) value of `x`.

```js
Math.abs(-10); // 10
```

### 🔹 `Math.min()` / `Math.max()`

Returns the lowest or highest value from the arguments.

```js
Math.min(5, 3, 7); // 3
Math.max(5, 3, 7); // 7
```

### 🔹 `Math.random()`

Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).

```js
Math.random(); // Example: 0.237345...
```

### 🔹 `Math.floor(Math.random() * N)`

Generates a random integer between 0 and N-1.

```js
// Random number between 0 and 9
Math.floor(Math.random() * 10);
```

## 🔢 Bonus: Custom Random Range Function

```js
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(1, 100)); // Random number from 1 to 100
```

## 📐 Trigonometric Methods

### 🔹 `Math.sin(x)` – Sine of angle in radians

### 🔹 `Math.cos(x)` – Cosine of angle in radians

### 🔹 `Math.tan(x)` – Tangent of angle in radians

```js
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0));           // 1
console.log(Math.tan(Math.PI / 4)); // 1
```

## 🧮 Logarithmic & Exponential Methods

### 🔹 `Math.log(x)` – Natural log (base e)

### 🔹 `Math.log10(x)` – Base 10 logarithm

### 🔹 `Math.exp(x)` – Returns e^x

```js
console.log(Math.log(10));     // 2.302...
console.log(Math.log10(100));  // 2
console.log(Math.exp(1));      // 2.718...
```

---
# ✅ JavaScript Truthy and Falsy Values

In JavaScript, every value has an inherent Boolean value, generally known as either **truthy** or **falsy**.
These values are used when JavaScript expects a Boolean — such as in conditionals (`if`, `while`, etc.).

## 🔴 Falsy Values

These values evaluate to `false` in a Boolean context.

| Value        | Description     |
| ------------ | --------------- |
| `false`      | Boolean false   |
| `0`          | Number zero     |
| `-0`         | Negative zero   |
| `0n`         | BigInt zero     |
| `""` or `''` | Empty string    |
| `null`       | Null value      |
| `undefined`  | Undefined value |
| `NaN`        | Not-a-Number    |

```js
if (0) console.log("Won't run");
if ("") console.log("Won't run");
if (null) console.log("Won't run");
false === null  // false
```

## 🟢 Truthy Values

All values **not** listed above are considered **truthy**. A few common examples:

| Example         | Description       |
| --------------- | ----------------- |
| `true`          | Boolean true      |
| `{}`            | Empty object      |
| `[]`            | Empty array       |
| `"0"`           | Non-empty string  |
| `"false"`       | Non-empty string  |
| `Infinity`      | Positive infinity |
| `-Infinity`     | Negative infinity |
| `function() {}` | Any function      |

```js
if ([]) console.log("Array is truthy");
if ({}) console.log("Object is truthy");
if ("0") console.log("String '0' is truthy");
```

## ✅ Practical Use in Conditions

```js
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
```
---
# ⚙️ JavaScript Operators

JavaScript **operators** are special symbols used to perform operations on operands (values and variables). Operators are a core part of conditional logic, calculations, and data manipulation in JavaScript.

## ✅ Types of JavaScript Operators

### 1. 🔢 Arithmetic Operators

Used to perform mathematical operations like addition, subtraction, etc.

| Operator | Description         | Example      | Result |
| -------- | ------------------- | ------------ | ------ |
| `+`      | Addition            | `5 + 2`      | `7`    |
| `-`      | Subtraction         | `5 - 2`      | `3`    |
| `*`      | Multiplication      | `5 * 2`      | `10`   |
| `/`      | Division            | `5 / 2`      | `2.5`  |
| `%`      | Modulus (Remainder) | `5 % 2`      | `1`    |
| `**`     | Exponentiation      | `2 ** 3`     | `8`    |
| `++`     | Increment           | `a = 5; a++` | `6`    |
| `--`     | Decrement           | `a = 5; a--` | `4`    |

### 2. 🧮 Assignment Operators(Compound Operators)

Used to assign values to variables.

| Operator | Description         | Example   | Same As      |
| -------- | ------------------- | --------- | ------------ |
| `=`      | Assign              | `x = 5`   |              |
| `+=`     | Add and assign      | `x += 2`  | `x = x + 2`  |
| `-=`     | Subtract and assign | `x -= 2`  | `x = x - 2`  |
| `*=`     | Multiply and assign | `x *= 2`  | `x = x * 2`  |
| `/=`     | Divide and assign   | `x /= 2`  | `x = x / 2`  |
| `%=`     | Modulus and assign  | `x %= 2`  | `x = x % 2`  |
| `**=`    | Exponent and assign | `x **= 2` | `x = x ** 2` |


### 3. ⚖️ Comparison Operators

Used to compare two values. These operators return a Boolean value (`true` or `false`).

| Operator | Description           | Example     | Result  |
| -------- | --------------------- | ----------- | ------- |
| `==`     | Equal to              | `5 == '5'`  | `true`  |
| `===`    | Equal (value + type)  | `5 === '5'` | `false` |
| `!=`     | Not equal             | `5 != '5'`  | `false` |
| `!==`    | Not equal (strict)    | `5 !== '5'` | `true`  |
| `>`      | Greater than          | `5 > 3`     | `true`  |
| `<`      | Less than             | `5 < 3`     | `false` |
| `>=`     | Greater than or equal | `5 >= 5`    | `true`  |
| `<=`     | Less than or equal    | `5 <= 4`    | `false` |

📌 **Note:** Use `===` and `!==` for strict comparisons (including type).


### 4. 🔗 Logical Operators

Used in **logical or conditional programming** to combine or invert Boolean values.

| Operator | Description | Example         | Result     |        |   |         |        |
| -------- | ----------- | --------------- | ---------- | ------ | - | ------- | ------ |
| `&&`     | Logical AND | `true && false` | `false`    |        |   |         |        |
| \`       |             | \`              | Logical OR | \`true |   | false\` | `true` |
| `!`      | Logical NOT | `!true`         | `false`    |        |   |         |        |

✅ Used in `if`, `while`, `ternary`, or other conditional statements.


### 5. 🤏 Ternary Operator

A shorthand for `if...else` condition.

```js
let age = 20;
let message = (age >= 18) ? "Adult" : "Minor";
console.log(message); // Adult
```

### 6. 🔍 Type Operators

Used to check the type of a variable or instance.

| Operator     | Description                                   | Example                         |
| ------------ | --------------------------------------------- | ------------------------------- |
| `typeof`     | Returns the type of a variable                | `typeof 123` → "number"         |
| `instanceof` | Checks if object is instance of a constructor | `arr instanceof Array` → `true` |

---

# 🧠 JavaScript Decision Making (Conditional Statements)

Decision-making in JavaScript allows your program to take different paths based on different conditions. These are commonly referred to as **conditional statements** and they play a vital role in logic building and control flow.

## ✅ Types of Decision-Making Statements in JavaScript

JavaScript provides several ways to perform decision making. These are:

1. `if` statement
2. `if...else` statement
3. `if...else if...else` statement
4. `switch` statement
5. Ternary operator (short-hand `if...else`)

Each one has its ideal use case depending on the complexity of the condition and readability needs.

## 🔹 1. `if` Statement

### 🔸 Purpose

Used to execute a block of code **only if** a specified condition evaluates to `true`.

### 🔸 Syntax

```js
if (condition) {
  // code to be executed if condition is true
}
```

### 🔸 Example

```js
let age = 18;
if (age >= 18) {
  console.log("You're eligible to vote.");
}
```

### 🔸 Nested Example

```js
let age = 20;
if (age >= 18) {
  console.log("Adult");
  if (age >= 65) {
    console.log("Senior citizen");
  }
}
```

### 🔸 Use Case

When you only need to run code for a single condition.


## 🔹 2. `if...else` Statement

### 🔸 Purpose

Executes one block of code if the condition is `true`, and another block if it is `false`.

### 🔸 Syntax

```js
if (condition) {
  // code if true
} else {
  // code if false
}
```

### 🔸 Example

```js
let age = 16;
if (age >= 18) {
  console.log("You're eligible to vote.");
} else {
  console.log("You're not eligible to vote.");
}
```

### 🔸 Nested Example

```js
let age = 16;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  if (age >= 13) {
    console.log("Teenager but not eligible to vote");
  } else {
    console.log("Child");
  }
}
```

### 🔸 Use Case

When you want to choose between two paths.

## 🔹 3. `if...else if...else` Statement

### 🔸 Purpose

Allows checking of multiple conditions in a structured way.

### 🔸 Syntax

```js
if (condition1) {
  // block 1
} else if (condition2) {
  // block 2
} else {
  // default block
}
```

### 🔸 Example

```js
let score = 75;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
```

### 🔸 Nested Example

```js
let score = 92;
if (score >= 90) {
  console.log("Grade A");
  if (score > 95) {
    console.log("Excellent performance!");
  }
} else if (score >= 75) {
  console.log("Grade B");
} else {
  console.log("Keep improving");
}
```

### 🔸 Use Case

When multiple outcomes are possible, and you want the first matching block to execute.

## 🔹 4. `switch` Statement

### 🔸 Purpose

Performs different actions based on the value of a variable or expression.

### 🔸 Syntax

```js
switch(expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // default code block
}
```

### 🔸 Example

```js
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Midweek day");
}
```

### 🔸 Nested Example

```js
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    let mood = "tired";
    switch (mood) {
      case "happy":
        console.log("Great energy!");
        break;
      case "tired":
        console.log("Get some rest!");
        break;
    }
    break;
  default:
    console.log("Another day");
}
```

### 🔸 Use Case

Better alternative to long `if...else if` chains when comparing the same variable to different values.

📝 Don't forget to use `break;` to stop fall-through behavior.

## 🔹 5. Ternary Operator (Conditional Operator)

### 🔸 Purpose

A compact syntax to execute one of two expressions based on a condition.

### 🔸 Syntax

```js
condition ? expressionIfTrue : expressionIfFalse;
```

### 🔸 Example

```js
let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);
```

### 🔸 Nested Example

```js
let age = 20;
let category = (age >= 18)
  ? (age >= 65 ? "Senior" : "Adult")
  : "Minor";
console.log(category);
```

### 🔸 Use Case

When you want to write a short and simple `if...else` decision in a single line.

### 🔍 Summary Table

| Statement Type        | Syntax Example                | Use Case                                    |
| --------------------- | ----------------------------- | ------------------------------------------- |
| `if`                  | `if (a > b)`                  | When you want to check one condition        |
| `if...else`           | `if (a > b) {...} else {...}` | Two possible paths                          |
| `if...else if...else` | Multiple `else if` branches   | Multiple conditions to test                 |
| `switch`              | `switch(expression)`          | Match one value from many cases             |
| Ternary               | `condition ? val1 : val2`     | Short `if...else` decisions, compact syntax |

---

# 🧠 How to See JavaScript Variable Address in Chrome DevTools

> Inspecting how and where variables live in memory is useful for debugging references, memory leaks, and object tracking.


### ✅ Step-by-Step Guide to Track Variable Address via DevTools

#### 1. **Create a Sample JavaScript Object**

Use your Console or a test script:

```js
let user = { name: "Vicky", age: 23 };
let username = 'Vikash'
window.myUser = user; // ✅ Make it global
```

#### 2. **Open Chrome DevTools**

* Right-click anywhere on the webpage > **Inspect**
* OR press `Ctrl + Shift + I` (Windows) / `Cmd + Option + I` (Mac)

### 3. **Go to the "Memory" Tab**

* At the top of DevTools, find and click the **Memory** tab.

#### 4. **Take a Heap Snapshot**

* On the left sidebar, select `Heap snapshot`.
* Click **"Take snapshot"**.

#### 5. **Search for Your Variable or Value**

* Use the top-right search bar.
* Search for `myUser` or a unique value like `"Vicky"` For objects.
* Same as for string search value like `'Vikash'`.
* Look for entries in the snapshot that match your object.
* When you find your variable then copy the context address like `@375931`.
* Then search this context address you find your context and see all variables and objects address.

#### 6. **Inspect the Object**

* Click the object to expand it.
* You'll see:

  * Object **type** (e.g., Object)
  * **Properties**
  * **Memory address ID** (like `@123456`)

#### 7. **Trace References (Retainers)**

* In the object view, check the **Retainers** tab:

  * Shows which object is holding the reference.
  * E.g., `window.myUser → Object`


### 🔎 Notes:

* 🧱 Primitive types (string, number, boolean) won't appear with reference chains.
* 🧠 Objects, arrays, and functions are trackable via memory snapshot.


### 💡 Best Practices:

* Always attach to `window` for global access: `window.obj = yourObj`
* Name your variables clearly to find them quickly in memory.
* Use `console.log(obj)` and **right-click → Store as Global Variable** for inspection too.

---

# 🧱 JavaScript Objects Full Guide

JavaScript Objects allow us to store multiple values in a single variable using a key-value pair structure.

### 🔹 What is an Object?

An object is a standalone entity, with properties and type. It's similar to real-life objects like a car or a book.

```js
let person = {
  name: "John",
  age: 30,
  isStudent: false
};
```

Here `person` is an object with 3 properties: `name`, `age`, and `isStudent`.


### 🔹 Object Syntax

```js
let objectName = {
  key1: value1,
  key2: value2,
  ...
};
```

* **Keys** are strings (or symbols)
* **Values** can be any data type: string, number, array, object, function, etc.

### 🔹 Accessing Object Properties

#### Dot Notation

```js
console.log(person.name); // John
```

#### Bracket Notation

```js
console.log(person["age"]); // 30
```

Use bracket notation when:

* The property name contains spaces or special characters
* You use variables as property keys

Example:

```js
let user2 = {
  firstName: "Rahul",
  lastName: "Kumar"
};
console.log(user2["first" + "Name"]); // Rahul
```


### 🔹 Adding & Updating Properties

```js
person.city = "Delhi";           // Adding
person.age = 31;                 // Updating
user2["middleName"] = "Singh";   // Adding using bracket notation
user2.lastName = "Verma";        // Updating
```

### 🔹 Deleting a Property

```js
delete person.isStudent;
```


### 🔹 Nested Objects

```js
let student = {
  name: "Vikash",
  address: {
    city: "Patna",
    zip: 800001
  }
};
console.log(student.address.city); // Patna
```

### 🔹 Object Methods

Objects can contain functions known as **methods**.

```js
let car = {
  brand: "Tata",
  start: function () {
    return "Car Started";
  }
};
console.log(car.start());
```

Shorthand:

```js
let car = {
  brand: "Tata",
  start() {
    return "Car Started";
  }
};
```

### 🔹 `this` Keyword

Inside methods, `this` refers to the object calling it.

```js
let user = {
  name: "Vikash",
  greet() {
    return `Hello, ${this.name}`;
  }
};
```

### 🔹 Check if Property Exists

```js
"name" in person;           // true
person.hasOwnProperty("age"); // true
```

### 🔹 Looping Through Objects

```js
for (let key in person) {
  console.log(key, person[key]);
}
```

### 🔹 Object.keys, Object.values, Object.entries

```js
Object.keys(person);    // ["name", "age", "city"]
Object.values(person);  // ["John", 31, "Delhi"]
Object.entries(person); // [["name", "John"], ["age", 31], ["city", "Delhi"]]
```

### 🔹 Copying Objects

#### Using Spread Operator

```js
let newPerson = { ...person };
```

#### Using Object.assign()

```js
let clone = Object.assign({}, person);
```

Note: This is a **shallow copy** — nested objects will still refer to the same memory.

## 🔹 Object Destructuring

```js
let { name, age } = person;
console.log(name); // John
```

### 🔹 Object Freezing & Sealing

#### Object.freeze(obj)

Prevents any change (add/update/delete):

```js
Object.freeze(person);
person.age = 40; // won't change
```

#### Object.seal(obj)

Allows changing existing properties but blocks new ones:

```js
Object.seal(person);
person.age = 40; // works
person.gender = "Male"; // won't add
```

---

# 📚 JavaScript Arrays Full Guide

JavaScript Arrays are used to store multiple values in a single variable, organized by index.

### 🔹 What is an Array?

An array is a special type of object used to store ordered collections.

```js
let fruits = ["apple", "banana", "orange"];
```

Each value is accessible by its **index** (starting from `0`).


### 🔹 Array Syntax

```js
let arrayName = [item1, item2, item3, ...];
```

* Can store any data type: string, number, boolean, objects, functions, even other arrays.

Example:

```js
let mixed = ["text", 42, true, {name: "A"}, [1, 2]];
```


### 🔹 Accessing Array Elements

```js
console.log(fruits[0]); // apple
console.log(fruits[2]); // orange
```


### 🔹 Updating Array Elements

```js
fruits[1] = "mango";
console.log(fruits); // ["apple", "mango", "orange"]
```


### 🔹 Array Length

```js
console.log(fruits.length); // 3
```


### 🔹 Adding Elements

#### Push (to end)

```js
fruits.push("grape");
```

#### Unshift (to start)

```js
fruits.unshift("kiwi");
```


### 🔹 Removing Elements

#### Pop (from end)

```js
fruits.pop();
```

#### Shift (from start)

```js
fruits.shift();
```


### 🔹 Looping Through Arrays

#### Using `for`

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

#### Using `for...of`

```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

### 🔹 Array Methods

#### `includes()`

Check if value exists:

```js
fruits.includes("apple"); // true
```

#### `indexOf()`

```js
fruits.indexOf("banana"); // 1
```

#### `concat()`
Add two or more array.
```js
const arr1=[1,2,3,4,5]
const arr2=[1,2,3,4,5]

const arr3 = arr1.concat(arr2)

```

#### `join()`

```js
fruits.join(", "); // "apple, banana, orange"
```

#### `slice(start, end)` – doesn't modify original

```js
let newFruits = fruits.slice(1, 3); // ["banana", "orange"]
```

#### `splice(start, deleteCount, item1, item2)` – modifies original

```js
fruits.splice(1, 1, "lemon"); // replaces 1 item at index 1
```

#### `reverse()`

```js
fruits.reverse();
```

#### `sort()`

```js
fruits.sort();
```

### 🔹 `map()`, `filter()`, `reduce()`

#### `map()` – transform each element

```js
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
```

#### `filter()` – filter elements based on condition

```js
let even = numbers.filter(num => num % 2 === 0);
```

#### `reduce()` – reduce array to a single value

```js
let sum = numbers.reduce((total, num) => total + num, 0);
```

### 🔹 Nested Arrays(Multidimensional Array)

```js
let matrix = [
  [1, 2],
  [3, 4]
];
console.log(matrix[1][0]); // 3
```

---

# 🔄 JavaScript Shallow Copy vs Deep Copy

In JavaScript, when copying objects or arrays, it's important to understand the difference between **shallow copy** and **deep copy**. This helps prevent unexpected changes due to **shared references**.

## 🧪 What is a Shallow Copy?

A **shallow copy** creates a new object or array, but **copies references of nested objects** instead of duplicating them.

### 🔹 Example:

```js
let original = {
  name: "Vikash",
  address: {
    city: "Delhi",
    zip: 110001
  }
};

let shallowCopy = { ...original };
shallowCopy.name = "Amit";             // ✅ Changes only in shallowCopy
shallowCopy.address.city = "Mumbai";   // ⚠️ Affects original too!

console.log(original.address.city);     // Mumbai
```

### ✅ Common Shallow Copy Methods:

* **Objects**: `Object.assign({}, obj)`, `{ ...obj }`
* **Arrays**: `array.slice()`, `[...array]`

### 🔥 Problem:

Shallow copy does **not** clone nested objects — both original and copied object still reference the **same inner object**.

## 🧬 What is a Deep Copy?

A **deep copy** creates a new object or array **recursively**, so that **all nested objects** are also copied.

### 🔹 Example:

```js
let original = {
  name: "Vikash",
  address: {
    city: "Delhi",
    zip: 110001
  }
};

let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "Mumbai";

console.log(original.address.city); // Delhi (✅ Unchanged)
```

### ✅ Common Deep Copy Techniques:

#### 1. `JSON.parse(JSON.stringify())`

```js
let deepCopy = JSON.parse(JSON.stringify(original));
```

* ✅ Simple & fast
* ⚠️ Fails for `undefined`, `functions`, `Date`, `Map`, `Set`, `RegExp`

#### 2. `structuredClone()` (✅ Modern Browsers)

```js
let deepCopy = structuredClone(original);
```

* ✅ Safely copies almost all types
* ❌ Not supported in older environments

#### 3. Using Lodash Library

```js
import cloneDeep from 'lodash/cloneDeep';
let deepCopy = cloneDeep(original);
```

* ✅ Accurate deep cloning
* ❌ Requires lodash package


### 🆚 Comparison Table

| Feature                | Shallow Copy            | Deep Copy                           |
| ---------------------- | ----------------------- | ----------------------------------- |
| Copies nested objects? | ❌ References shared     | ✅ Fully copies recursively          |
| Performance            | ✅ Fast                  | ⚠️ Slightly Slower                  |
| Common Tools           | `Object.assign`, spread | `JSON.stringify`, `structuredClone` |
| Ideal For              | Flat structures         | Complex nested objects              |


### 🧠 Summary

* Use **shallow copy** when your object/array is flat.
* Use **deep copy** when you want full independence from the original, especially with nested structures.

---
# 🔁 JavaScript While Loop

The `while` loop in JavaScript is a control flow statement that allows code to be executed repeatedly based on a given boolean condition.

### ✅ Syntax:

```javascript
while (condition) {
  // code block to execute
}
```

* The loop **continues to run** as long as the condition is `true`.
* The condition is evaluated **before** executing the code block (entry-controlled loop).

### 🧠 Step-by-Step Execution:

1. The condition is **evaluated**.
2. If it is `true`, the code block runs.
3. After executing the block, the condition is **evaluated again**.
4. This repeats until the condition becomes `false`.
5. Once false, the loop exits.

### ⚠️ Infinite Loop Warning:

If the condition **never becomes false**, the loop will run forever (infinite loop).

```javascript
while (true) {
  console.log("This will run forever!");
}
```

### 🧪 Practical Example:

Let's print numbers from 1 to 5 using a `while` loop.

```javascript
let i = 1; // initialization
while (i <= 5) { // condition
  console.log(i); // code block
  i++; // increment
}
```

#### 🧩 Output:

```
1
2
3
4
5
```

### 🔍 Use Case Example: User Input Until Valid

```javascript
let userInput;
while (userInput !== "yes") {
  userInput = prompt("Type 'yes' to continue:");
}
console.log("Thank you!");
```

This will repeatedly ask the user until they type `yes`.

### 🔄 Dry Run (Trace Table) of Loop:

For the loop:

```javascript
let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}
```

| Iteration | i Value | Condition `i <= 3` | Output |
| --------- | ------- | ------------------ | ------ |
| 1         | 1       | true               | 1      |
| 2         | 2       | true               | 2      |
| 3         | 3       | true               | 3      |
| 4         | 4       | false              | -      |

### ❗ Common Mistakes

* Forgetting to update the variable inside the loop → leads to infinite loop
* Using `=` instead of `==` or `===` in the condition

### ✅ When to Use While Loop:

* When the number of iterations is **not known in advance**.
* When we want to repeat something until a **specific condition** is met.

---
# 🔁 JavaScript for Loop

The `for` loop in JavaScript is used to execute a block of code a specific number of times. It is one of the most commonly used loops when the number of iterations is known.

### 📘 Syntax:

```js
for (initialization; condition; increment/decrement) {
    // code block to be executed
}
```

### 🔍 Explanation of Syntax:

| Part                | Description                                                           |
| ------------------- | --------------------------------------------------------------------- |
| Initialization      | Runs once before the loop starts. Usually used to define the counter. |
| Condition           | Checked before each iteration. If true, the loop body runs.           |
| Increment/Decrement | Runs after each iteration. Used to update the loop control variable.  |


### ✅ Step-by-Step Dry Run:

```js
for (let i = 1; i <= 3; i++) {
    console.log("Count: ", i);
}
```

**Execution Flow:**

1. `let i = 1` (Initialization, runs once)
2. `i <= 3` → true → executes loop body
3. Prints: Count: 1
4. `i++` → `i = 2`
5. `i <= 3` → true → executes loop body
6. Prints: Count: 2
7. `i++` → `i = 3`
8. `i <= 3` → true → executes loop body
9. Prints: Count: 3
10. `i++` → `i = 4`
11. `i <= 3` → false → loop ends

### 💡 Use Cases:

* Iterating over arrays or collections
* Running code a specific number of times
* Generating HTML dynamically

### ⚠️ Common Mistakes:

* Forgetting to update the loop variable → infinite loop
* Using incorrect condition (e.g., `i >= 3` with `i++`) → never enters

### 🧪 Practical Example:

```js
const fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

**Output:**
apple
banana
mango

### 🔄 Nested `for` Loop:

```js
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
```

**Output:**
i = 1, j = 1
i = 1, j = 2
i = 2, j = 1
i = 2, j = 2
i = 3, j = 1
i = 3, j = 2


### 📌 Summary:

* `for` loop is ideal when number of iterations is known.
* Control comes from its 3 expressions (init, condition, increment).
* Can be nested, and commonly used with arrays.


---

# 🔁 JavaScript `do...while` Loop

The `do...while` loop is a control flow statement that executes a block of code **at least once**, and then repeats the loop **as long as the specified condition evaluates to true**.

### 🔹 Syntax

```js
let i = 0;
do {
  // block of code to be executed
  i++;
} while (condition);
```

🧠 The key difference between `do...while` and `while` loop is that `do...while` **executes the code block first**, then checks the condition.

### 🔸 Step-by-Step Working

1. The block of code inside `do` executes **once** before the condition is checked.
2. The condition is evaluated.
3. If `true` ➝ loop runs again.
4. If `false` ➝ loop stops.

### 🔍 Dry Run Example

```js
let count = 1;
do {
  console.log("Count is:", count);
  count++;
} while (count <= 3);
```

#### 🔸 Dry Run Table:

| Iteration | count | Output      | Condition (`count <= 3`) |
| --------- | ----- | ----------- | ------------------------ |
| 1         | 1     | Count is: 1 | ✅ true                   |
| 2         | 2     | Count is: 2 | ✅ true                   |
| 3         | 3     | Count is: 3 | ✅ true                   |
| 4         | 4     | -           | ❌ false (loop stops)     |

### 🔄 Infinite Loop Warning ⚠️

If you forget to update the loop variable or give a condition that always remains true:

```js
do {
  console.log("I run forever!");
} while (true); // ⚠️ Infinite loop
```

### 🔁 Nested `do...while` Loop

```js
let i = 1;
do {
  let j = 1;
  do {
    console.log(`i = ${i}, j = ${j}`);
    j++;
  } while (j <= 2);
  i++;
} while (i <= 2);
```

#### Output:

```
i = 1, j = 1
i = 1, j = 2
i = 2, j = 1
i = 2, j = 2
```


## ✅ Practical Example: Asking User Input Until Valid

```js
let number;
do {
  number = prompt("Enter a number greater than 100:");
} while (number <= 100 && number !== null);
```

✅ This ensures user is prompted at least once.


### ❌ Common Mistakes

* Forgetting to update the loop variable ➝ infinite loop.
* Using `=` instead of `==` or `===` in condition.
* Expecting the condition to check **before** first run (it doesn’t).


### 🧠 Key Takeaways

* `do...while` runs the code block at least **once**.
* Useful when you want the loop body to execute before checking the condition.
* Great for user inputs, menus, retries, etc.

---






