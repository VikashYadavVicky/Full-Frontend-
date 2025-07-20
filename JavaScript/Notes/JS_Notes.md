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

### 2. 🧮 Assignment Operators

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



