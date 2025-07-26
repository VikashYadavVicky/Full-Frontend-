## 🔰 100 Basic JavaScript Q\&A (Short/Long)

### 1. **What is JavaScript?**

* **Answer:** JavaScript is a lightweight, interpreted programming language primarily used to create dynamic and interactive content on websites.

### 2. **How do you include JavaScript in an HTML page?**

* **Answer:** Using the `<script>` tag:

```html
<script src="script.js"></script>
```

or inline:

```html
<script>
  alert("Hello, World!");
</script>
```

### 3. **What is a variable in JavaScript?**

* **Answer:** A variable is a container used to store data values. Declared using `var`, `let`, or `const`.

### 4. **What is the difference between `var`, `let`, and `const`?**

* **Answer:**

  * `var`: Function-scoped and can be redeclared.
  * `let`: Block-scoped and cannot be redeclared.
  * `const`: Block-scoped and cannot be redeclared or reassigned.

### 5. **How do you write a comment in JavaScript?**

* **Answer:**

```js
// This is a single-line comment
/* This is a
   multi-line comment */
```

### 6. **What are data types in JavaScript?**

* **Answer:** Primitive types include:

  * String
  * Number
  * Boolean
  * Null
  * Undefined
  * Symbol
  * BigInt
    Non-primitive: Object, Array, Function.

### 7. **What is the difference between `==` and `===`?**

* **Answer:**

  * `==` checks for equality **after type coercion**.
  * `===` checks for equality **without type coercion** (strict equality).

### 8. **What is the `typeof` operator?**

* **Answer:** It returns the data type of a variable.

```js
typeof "Hello"; // "string"
```

### 9. **How do you create a function in JavaScript?**

* **Answer:**

```js
function greet(name) {
  return "Hello " + name;
}
```

### 10. **What is the difference between function declaration and expression?**

* **Answer:**

  * **Declaration:**

  ```js
  function sayHi() { }
  ```

  * **Expression:**

  ```js
  const sayHi = function() { };
  ```

### 11. **What is an array in JavaScript?**

* **Answer:** An array is a special object used to store multiple values in a single variable.

```js
let fruits = ["Apple", "Banana", "Mango"];
```

### 12. **How do you access array elements?**

* **Answer:** Using indices, starting at 0.

```js
let fruit = fruits[0]; // "Apple"
```

### 13. **What is an object in JavaScript?**

* **Answer:** An object is a collection of key-value pairs.

```js
let person = { name: "John", age: 30 };
```

### 14. **What is a loop? Name types of loops.**

* **Answer:** A loop repeats a block of code.

  * `for`
  * `while`
  * `do...while`
  * `for...of`
  * `for...in`

### 15. **How does a `for` loop work?**

* **Answer:**

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 16. **What is the difference between `for...of` and `for...in`?**

* **Answer:**

  * `for...of`: Iterates over **values**.
  * `for...in`: Iterates over **keys (property names)**.

### 17. **How do you write a conditional statement in JavaScript?**

* **Answer:**

```js
if (score > 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}
```

### 18. **What are truthy and falsy values?**

* **Answer:**

  * **Truthy:** Values evaluated as `true` in a boolean context (e.g., `"0"`, `1`, `[]`, `{}`)
  * **Falsy:** Values like `false`, `0`, `""`, `null`, `undefined`, `NaN`.

### 19. **What is a ternary operator?**

* **Answer:** A shorthand for `if...else`.

```js
let result = score >= 50 ? "Pass" : "Fail";
```

### 20. **How do you convert a string to a number in JavaScript?**

* **Answer:**

```js
let num = Number("123");
let num2 = parseInt("123");
```

### 21. **What is an event in JavaScript?**

* **Answer:** An event is an action that occurs in the browser, like clicking a button or loading a page. JavaScript can listen and respond to these events using event listeners.

### 22. **How do you add an event listener to an element?**

* **Answer:**

```js
document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked");
});
```

### 23. **What is the DOM in JavaScript?**

* **Answer:** The DOM (Document Object Model) is a programming interface that allows JavaScript to access and manipulate HTML and CSS of a webpage.

### 24. **What is the difference between `null` and `undefined`?**

* **Answer:**

  * `null`: An assigned value representing no value.
  * `undefined`: A variable declared but not assigned any value.

### 25. **What are template literals?**

* **Answer:** Strings that allow embedded expressions using backticks (`` ` ``).

```js
let name = `John`;
let greeting = `Hello, ${name}`;
```

### 26. **What is string interpolation?**

* **Answer:** It’s the process of embedding variables or expressions into strings using `${}` inside template literals.

### 27. **What is type coercion in JavaScript?**

* **Answer:** Automatic or implicit conversion of values from one data type to another (e.g., string to number).

### 28. **What are arrow functions?**

* **Answer:** A shorter syntax for writing functions:

```js
const add = (a, b) => a + b;
```

### 29. **What is `this` keyword in JavaScript?**

* **Answer:** Refers to the object from which the function was called. In global scope, it refers to the `window` object.

### 30. **What is the use of `setTimeout()`?**

* **Answer:** Delays the execution of a function by a given number of milliseconds.

```js
setTimeout(() => alert("Hi"), 1000);
```

### 31. **What does `NaN` mean?**

* **Answer:** Stands for "Not a Number". It's a value returned when a mathematical operation fails.

```js
parseInt("abc"); // NaN
```

### 32. **How do you check if a value is an array?**

* **Answer:**

```js
Array.isArray(myValue);
```

### 33. **What is JSON?**

* **Answer:** JSON (JavaScript Object Notation) is a lightweight data format for storing and transporting data.

### 34. **How do you convert an object to JSON?**

* **Answer:**

```js
let jsonString = JSON.stringify(obj);
```

### 35. **How do you parse a JSON string to an object?**

* **Answer:**

```js
let obj = JSON.parse(jsonString);
```

### 36. **What is hoisting in JavaScript?**

* **Answer:** JavaScript moves variable and function declarations to the top of their scope during compilation.

### 37. **What is scope in JavaScript?**

* **Answer:** Scope defines the access level of variables — global, function/local, or block.

### 38. **What is a closure?**

* **Answer:** A closure is a function that remembers its outer scope even after the outer function has executed.

### 39. **What is the difference between synchronous and asynchronous code?**

* **Answer:**

  * **Synchronous:** Runs line by line.
  * **Asynchronous:** Can execute tasks independently (e.g., setTimeout, API calls).

### 40. **What is the event loop in JavaScript?**

* **Answer:** The event loop handles asynchronous operations by pushing callbacks to the message queue and executing them when the call stack is clear.

### 41. **What is the difference between `==` and `===` in JavaScript?**

* **Answer:** `==` compares values after type coercion, while `===` checks for both value and type without coercion.

### 42. **What is the difference between `null` and `undefined`?**

* **Answer:** `null` is an assigned value indicating no value, whereas `undefined` means a variable has been declared but not assigned a value.

### 43. **What is an Immediately Invoked Function Expression (IIFE)?**

* **Answer:** An IIFE is a function that runs immediately after it's defined:

```js
(function() {
  console.log("IIFE");
})();
```

### 44. **How do you prevent default behavior in an event?**

* **Answer:** Use `event.preventDefault()` inside the event handler.

### 45. **What is event bubbling in JavaScript?**

* **Answer:** Event bubbling is the process where an event starts at the most specific element and flows upward to the least specific (the root).

### 46. **How do you stop event propagation?**

* **Answer:** Use `event.stopPropagation()` in the event handler.

### 47. **What is a callback function?**

* **Answer:** A function passed as an argument to another function and executed later.

```js
function greet(name, callback) {
  callback("Hello " + name);
}
```

### 48. **What are template literals in JavaScript?**

* **Answer:** Strings that support interpolation using backticks and `${}`.

```js
let name = `John`;
let msg = `Hello, ${name}`;
```

### 49. **What is a promise in JavaScript?**

* **Answer:** A Promise is an object representing the eventual completion or failure of an asynchronous operation.

```js
let promise = new Promise((resolve, reject) => {
  resolve("Success");
});
```

### 50. **How do you consume a promise?**

* **Answer:** Using `.then()` and `.catch()`

```js
promise
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

### 51. **What is the `async`/`await` syntax in JavaScript?**

* **Answer:** A cleaner way to work with promises:

```js
async function fetchData() {
  let data = await fetch(url);
}
```

### 52. **What is the spread operator (`...`) in JavaScript?**

* **Answer:** It expands an iterable (like array or object) into individual elements.

```js
let arr = [1, 2, 3];
let newArr = [...arr];
```

### 53. **What is the rest parameter syntax?**

* **Answer:** It allows a function to accept an indefinite number of arguments as an array.

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
```

### 54. **What is destructuring in JavaScript?**

* **Answer:** A syntax to unpack values from arrays or properties from objects into distinct variables.

```js
const { name, age } = { name: "John", age: 30 };
```

### 55. **What is a Map in JavaScript?**

* **Answer:** A Map is a collection of keyed data items, like an object, but keys can be of any type.

```js
let map = new Map();
map.set("name", "John");
```

### 56. **What is a Set in JavaScript?**

* **Answer:** A Set is a collection of unique values.

```js
let set = new Set([1, 2, 3, 3]); // [1, 2, 3]
```

### 57. **What is optional chaining (`?.`) in JavaScript?**

* **Answer:** Allows safe access to deeply nested object properties without throwing errors.

```js
let name = user?.profile?.name;
```

### 58. **What is nullish coalescing (`??`) operator?**

* **Answer:** Returns the right-hand operand if the left is `null` or `undefined`.

```js
let result = value ?? "Default";
```

### 59. **What are JavaScript modules?**

* **Answer:** Modules allow you to break code into reusable files. Use `export` and `import`.

```js
// math.js
export function add(a, b) { return a + b; }

// main.js
import { add } from './math.js';
```

### 60. **What are the different ways to loop through an array?**

* **Answer:**

  * `for`
  * `for...of`
  * `forEach()`
  * `map()`
  * `while`
  * `do...while`

### 61. **What is the difference between `slice()` and `splice()` in arrays?**

* **Answer:**

  * `slice()`: Returns a shallow copy of a portion of an array without modifying the original.
  * `splice()`: Changes the contents of an array by removing or replacing elements.

### 62. **What does `Array.prototype.map()` do?**

* **Answer:** Creates a new array by applying a function to each element of the original array.

```js
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2);
```

### 63. **How do you remove duplicates from an array?**

* **Answer:**

```js
let unique = [...new Set([1, 2, 2, 3])];
```

### 64. **What is the difference between `call()`, `apply()`, and `bind()`?**

* **Answer:**

  * `call()`: Calls a function with a given `this` and arguments.
  * `apply()`: Same as `call()`, but arguments are provided as an array.
  * `bind()`: Returns a new function with a bound `this`.

### 65. **What are higher-order functions?**

* **Answer:** Functions that take other functions as arguments or return functions.

```js
function greet(fn) {
  fn();
}
```

### 66. **What is the `reduce()` method?**

* **Answer:** Applies a function against an accumulator and each element to reduce it to a single value.

```js
let sum = [1, 2, 3].reduce((acc, val) => acc + val, 0);
```

### 67. **How do you clone an object in JavaScript?**

* **Answer:**

```js
let clone = { ...original };
```

Or:

```js
let clone = Object.assign({}, original);
```

### 68. **What is the difference between deep and shallow copy?**

* **Answer:**

  * **Shallow copy** copies only one level.
  * **Deep copy** recursively copies all nested objects.

### 69. **What is event delegation?**

* **Answer:** A technique of attaching a single event listener to a parent element that handles events for child elements.

### 70. **What is debouncing in JavaScript?**

* **Answer:** Limits the rate at which a function is fired by delaying execution until after a certain period of inactivity.

### 71. **What is throttling in JavaScript?**

* **Answer:** Ensures a function is only called at most once in a given time interval.

### 72. **What is the difference between `innerText`, `textContent`, and `innerHTML`?**

* **Answer:**

  * `innerText`: Gets/sets visible text content.
  * `textContent`: Gets/sets all text.
  * `innerHTML`: Gets/sets HTML content.

### 73. **What is the difference between `localStorage` and `sessionStorage`?**

* **Answer:**

  * `localStorage`: Stores data with no expiration.
  * `sessionStorage`: Data persists only during the session.

### 74. **How do you redirect a page in JavaScript?**

* **Answer:**

```js
window.location.href = "https://example.com";
```

### 75. **What is `typeof null` in JavaScript?**

* **Answer:** It's an object (this is a known bug in JavaScript).

### 76. **What are the falsy values in JavaScript?**

* **Answer:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

### 77. **How do you convert a number to a string?**

* **Answer:**

```js
let str = String(123);
let str2 = (123).toString();
```

### 78. **How do you find the maximum value in an array?**

* **Answer:**

```js
Math.max(...[1, 2, 3]);
```

### 79. **What are template strings in JavaScript?**

* **Answer:** Strings that allow embedded expressions using backticks.

```js
let name = "John";
let greet = `Hello ${name}`;
```

### 80. **What are default parameters in JavaScript?**

* **Answer:** Allow setting default values for function parameters.

```js
function greet(name = "Guest") {
  return `Hello ${name}`;
}
```

### 81. **What is the difference between `let` and `var` in terms of hoisting?**

* **Answer:** Both are hoisted, but `var` is initialized with `undefined`, while `let` is not initialized and remains in the Temporal Dead Zone until declared.

### 82. **What is optional chaining (`?.`) used for?**

* **Answer:** It allows safe access to deeply nested properties without causing an error if an intermediate property is `null` or `undefined`.

```js
let name = user?.profile?.name;
```

### 83. **What is the purpose of `Object.keys()` and `Object.values()`?**

* **Answer:**

  * `Object.keys(obj)`: Returns an array of the object's keys.
  * `Object.values(obj)`: Returns an array of the object's values.

### 84. **What does `Object.entries()` do?**

* **Answer:** Returns an array of key-value pairs of the object.

```js
Object.entries({a: 1, b: 2}); // [['a', 1], ['b', 2]]
```

### 85. **What is a symbol in JavaScript?**

* **Answer:** A symbol is a unique and immutable primitive value used as object keys to avoid property name conflicts.

```js
let sym = Symbol('id');
```

### 86. **What is BigInt?**

* **Answer:** BigInt is a numeric primitive to represent large integers beyond the safe range of Number.

```js
let big = 1234567890123456789012345678901234567890n;
```

### 87. **How do you make an object immutable?**

* **Answer:** Use `Object.freeze(obj)` to make an object immutable.

### 88. **What are pure functions?**

* **Answer:** Functions that do not modify external state and always return the same output for the same input.

### 89. **What is the difference between shallow copy and deep copy?**

* **Answer:**

  * **Shallow copy:** Copies only top-level properties.
  * **Deep copy:** Recursively copies nested properties.

### 90. **How do you deep clone an object?**

* **Answer:**

```js
let clone = JSON.parse(JSON.stringify(obj));
```

Or use libraries like Lodash.

### 91. **What is `Math.random()`?**

* **Answer:** Returns a random number between 0 (inclusive) and 1 (exclusive).

### 92. **What is `Math.floor()` and `Math.ceil()`?**

* **Answer:**

  * `Math.floor()`: Rounds down.
  * `Math.ceil()`: Rounds up.

### 93. **What is `parseFloat()` and `parseInt()`?**

* **Answer:**

  * `parseFloat()`: Converts string to a floating-point number.
  * `parseInt()`: Converts string to an integer.

### 94. **What are ES6 modules?**

* **Answer:** JavaScript files that export and import variables, functions, or classes using `export` and `import`.

### 95. **What is a generator function?**

* **Answer:** A special function that can pause and resume execution using the `function*` syntax and `yield` keyword.

```js
function* gen() {
  yield 1;
  yield 2;
}
```

### 96. **How do you make a string uppercase or lowercase?**

* **Answer:**

```js
let upper = str.toUpperCase();
let lower = str.toLowerCase();
```

### 97. **What is the difference between `push()` and `unshift()`?**

* **Answer:**

  * `push()`: Adds item(s) to the end of the array.
  * `unshift()`: Adds item(s) to the beginning.

### 98. **What is a regular expression?**

* **Answer:** A pattern used to match character combinations in strings.

```js
let regex = /hello/i;
```

### 99. **How do you test if a string matches a regex pattern?**

* **Answer:**

```js
regex.test("Hello");
```

### 100. **How do you trim whitespace from a string?**

* **Answer:**

```js
let str = " Hello ".trim(); // "Hello"
```


---
# ✅ 100 Basic JavaScript MCQs

### 1. **Which of the following is a correct JavaScript syntax to write "Hello World"?**

* A. println("Hello World")
* B. echo("Hello World")
* C. document.write("Hello World")
* D. response.write("Hello World")
* ✅ **Answer: C**

### 2. **What is the correct way to create a function in JavaScript?**

* A. function\:myFunction()
* B. function = myFunction()
* C. function myFunction()
* D. create.myFunction()
* ✅ **Answer: C**

### 3. **Inside which HTML element do we put the JavaScript?**

* A. <js>
* B. <script>
* C. <javascript>
* D. <code>
* ✅ **Answer: B**

### 4. **How do you write a comment in JavaScript?**

* A. <!-- This is a comment -->
* B. // This is a comment
* C. ## This is a comment
* D. \*\* This is a comment
* ✅ **Answer: B**

### 5. **Which of the following is NOT a JavaScript data type?**

* A. String
* B. Boolean
* C. Float
* D. Undefined
* ✅ **Answer: C**

### 6. **Which keyword is used to declare a variable in JavaScript?**

* A. for
* B. int
* C. var
* D. letvar
* ✅ **Answer: C**

### 7. **Which operator is used to assign a value to a variable?**

* A. \*
* B. -
* C. =
* D. ==
* ✅ **Answer: C**

### 8. **How do you create an array in JavaScript?**

* A. let arr = "1, 2, 3"
* B. let arr = (1, 2, 3)
* C. let arr = \[1, 2, 3]
* D. let arr = {1, 2, 3}
* ✅ **Answer: C**

### 9. **How can you detect the type of a variable?**

* A. typeof()
* B. detect()
* C. type()
* D. typeof
* ✅ **Answer: D**

### 10. **Which method is used to round a number to the nearest integer?**

* A. Math.round()
* B. Math.rnd()
* C. Math.ceil()
* D. Math.floor()
* ✅ **Answer: A**

### 11. **Which symbol is used for comments in JavaScript?**

* A. <!-- -->
* B. ##
* C. //
* D. \*\*
* ✅ **Answer: C**

### 12. **Which of these is used to define a variable in ES6?**

* A. int
* B. let
* C. var
* D. define
* ✅ **Answer: B**

### 13. **Which of the following methods adds an element at the end of an array?**

* A. push()
* B. pop()
* C. shift()
* D. unshift()
* ✅ **Answer: A**

### 14. **What does `isNaN()` function do?**

* A. Checks if a variable is a string
* B. Checks if a variable is null
* C. Checks if a value is not a number
* D. Checks if a value is a number
* ✅ **Answer: C**

### 15. **How do you write an IF statement in JavaScript?**

* A. if i = 5 then
* B. if i == 5 then
* C. if (i == 5)
* D. if i = 5
* ✅ **Answer: C**

### 16. **Which JavaScript keyword is used to return a value from a function?**

* A. return
* B. break
* C. continue
* D. exit
* ✅ **Answer: A**

### 17. **Which function converts a JSON text into a JavaScript object?**

* A. JSON.stringify()
* B. JSON.parse()
* C. parse.JSON()
* D. toJSON()
* ✅ **Answer: B**

### 18. **What does `typeof null` return?**

* A. null
* B. undefined
* C. object
* D. boolean
* ✅ **Answer: C**

### 19. **Which of the following is a looping structure in JavaScript?**

* A. for
* B. while
* C. do...while
* D. All of the above
* ✅ **Answer: D**

### 20. **Which method joins all elements of an array into a string?**

* A. concat()
* B. join()
* C. push()
* D. split()
* ✅ **Answer: B**

### 21. **Which of the following is a JavaScript event?**
- A. onclick  
- B. onhover  
- C. onpressed  
- D. onselect  
- ✅ **Answer: A**

### 22. **Which method removes the last element from an array?**
- A. pop()  
- B. shift()  
- C. unshift()  
- D. remove()  
- ✅ **Answer: A**

### 23. **What is the output of `typeof []`?**
- A. array  
- B. object  
- C. list  
- D. undefined  
- ✅ **Answer: B**

### 24. **How do you declare a JavaScript object?**
- A. let obj = [ ]  
- B. let obj = ( )  
- C. let obj = { }  
- D. let obj = < >  
- ✅ **Answer: C**

### 25. **Which method returns the index of the first occurrence of a specified value in an array?**
- A. findIndex()  
- B. indexOf()  
- C. search()  
- D. getIndex()  
- ✅ **Answer: B**

### 26. **How do you access the third element of an array `arr`?**
- A. arr[2]  
- B. arr[3]  
- C. arr[1]  
- D. arr[0]  
- ✅ **Answer: A**

### 27. **What is the value of `"5" + 2` in JavaScript?**
- A. 7  
- B. 52  
- C. "7"  
- D. Error  
- ✅ **Answer: B**

### 28. **What does the `break` statement do in JavaScript?**
- A. Exits the current loop  
- B. Skips one iteration  
- C. Returns from a function  
- D. Throws an error  
- ✅ **Answer: A**

### 29. **Which function converts a JavaScript object to JSON text?**
- A. JSON.stringify()  
- B. JSON.parse()  
- C. toJSON()  
- D. convertJSON()  
- ✅ **Answer: A**

### 30. **Which statement is used to check multiple conditions?**
- A. if...then  
- B. switch  
- C. else if  
- D. select  
- ✅ **Answer: B**


### 31. **Which loop will execute at least once, even if the condition is false?**

* A. for
* B. while
* C. do...while
* D. foreach
* ✅ **Answer: C**

### 32. **Which operator is used to compare both value and type in JavaScript?**

* A. =
* B. ==
* C. ===
* D. !==
* ✅ **Answer: C**

### 33. **Which keyword is used to define a constant in JavaScript?**

* A. var
* B. let
* C. const
* D. constant
* ✅ **Answer: C**

### 34. **Which method is used to convert a string to a number?**

* A. parseInt()
* B. Number()
* C. parseFloat()
* D. All of the above
* ✅ **Answer: D**

### 35. **Which event occurs when the user clicks on an HTML element?**

* A. onmouseclick
* B. onclick
* C. onmouseover
* D. onfocus
* ✅ **Answer: B**

### 36. **Which symbol is used to denote template literals in JavaScript?**

* A. " "
* B. ' '
* C. ` `
* D. \~ \~
* ✅ **Answer: C**

### 37. **What does `===` mean in JavaScript?**

* A. Assigns a value
* B. Compares only value
* C. Compares value and type
* D. None of the above
* ✅ **Answer: C**

### 38. **What is the default value of an uninitialized variable?**

* A. null
* B. NaN
* C. undefined
* D. 0
* ✅ **Answer: C**

### 39. **Which method removes the first item of an array?**

* A. pop()
* B. shift()
* C. unshift()
* D. slice()
* ✅ **Answer: B**

### 40. **Which of these is used for strict equality check?**

* A. ==
* B. =
* C. ===
* D. !===
* ✅ **Answer: C**


### 41. **What will the following code output? `console.log(typeof null)`**
- A. null  
- B. object  
- C. undefined  
- D. boolean  
- ✅ **Answer: B**

### 42. **What does `NaN` stand for in JavaScript?**
- A. Not a Number  
- B. Not a Name  
- C. Name and Number  
- D. None at Now  
- ✅ **Answer: A**

### 43. **What will be the output of `Boolean(0)`?**
- A. true  
- B. false  
- C. 0  
- D. null  
- ✅ **Answer: B**

### 44. **What does `Array.isArray([])` return?**
- A. false  
- B. true  
- C. undefined  
- D. null  
- ✅ **Answer: B**

### 45. **Which of the following is a falsy value in JavaScript?**
- A. 0  
- B. ""  
- C. null  
- D. All of the above  
- ✅ **Answer: D**

### 46. **What is the purpose of `setTimeout()`?**
- A. Runs a function once after a delay  
- B. Repeats a function continuously  
- C. Immediately executes a function  
- D. Stops the execution  
- ✅ **Answer: A**

### 47. **Which method is used to merge two arrays?**
- A. merge()  
- B. concat()  
- C. combine()  
- D. push()  
- ✅ **Answer: B**

### 48. **Which keyword is used to stop a loop?**
- A. stop  
- B. exit  
- C. break  
- D. return  
- ✅ **Answer: C**

### 49. **Which method is used to convert a string to uppercase?**
- A. toUpper()  
- B. upper()  
- C. toUpperCase()  
- D. makeUpperCase()  
- ✅ **Answer: C**

### 50. **Which of the following represents a function expression?**
- A. `function foo() {}`  
- B. `let foo = function() {}`  
- C. `function = foo()`  
- D. `foo: function() {}`  
- ✅ **Answer: B**


### 51. **Which method removes whitespace from both ends of a string?**
- A. strip()  
- B. trim()  
- C. clean()  
- D. removeWhiteSpace()  
- ✅ **Answer: B**

### 52. **What will `typeof NaN` return?**
- A. number  
- B. NaN  
- C. undefined  
- D. string  
- ✅ **Answer: A**

### 53. **What does `event.preventDefault()` do in JavaScript?**
- A. Submits a form  
- B. Stops the browser’s default behavior  
- C. Prevents an event from occurring  
- D. Stops JavaScript execution  
- ✅ **Answer: B**

### 54. **Which object is the parent of all JavaScript objects?**
- A. Object  
- B. Window  
- C. Global  
- D. Root  
- ✅ **Answer: A**

### 55. **What will `\"10\" - 2` output?**
- A. 8  
- B. 102  
- C. NaN  
- D. \"8\"  
- ✅ **Answer: A**

### 56. **Which JavaScript method returns the character at a specific index in a string?**
- A. getChar()  
- B. indexChar()  
- C. charAt()  
- D. getCharacter()  
- ✅ **Answer: C**

### 57. **Which of these is a valid way to write an arrow function?**
- A. `function => ()`  
- B. `() => {}`  
- C. `=> function () {}`  
- D. `(=>) {}`  
- ✅ **Answer: B**

### 58. **What will `true + true` return in JavaScript?**
- A. true  
- B. false  
- C. 2  
- D. NaN  
- ✅ **Answer: C**

### 59. **What does `splice()` do to an array?**
- A. Removes or replaces existing elements  
- B. Returns a shallow copy  
- C. Sorts the array  
- D. Filters the array  
- ✅ **Answer: A**

### 60. **What is the scope of a variable declared with `let` inside a block?**
- A. Global  
- B. Function  
- C. Block  
- D. Script  
- ✅ **Answer: C**


### 61. **Which operator checks for both value and type?**
- A. ==  
- B. ===  
- C. !=  
- D. =  
- ✅ **Answer: B**

### 62. **Which loop is best when the number of iterations is known?**
- A. while  
- B. for  
- C. do...while  
- D. if  
- ✅ **Answer: B**

### 63. **What does `localStorage` store data as?**
- A. Array  
- B. String  
- C. Object  
- D. JSON  
- ✅ **Answer: B**

### 64. **What is the output of `typeof function() {}`?**
- A. function  
- B. object  
- C. method  
- D. string  
- ✅ **Answer: A**

### 65. **Which keyword is used to declare asynchronous functions?**
- A. await  
- B. defer  
- C. async  
- D. promise  
- ✅ **Answer: C**

### 66. **Which method executes a function on every array element?**
- A. each()  
- B. every()  
- C. forEach()  
- D. loop()  
- ✅ **Answer: C**

### 67. **Which symbol is used to access object properties?**
- A. . (dot)  
- B. #  
- C. @  
- D. *  
- ✅ **Answer: A**

### 68. **Which keyword declares a block-scoped variable?**
- A. var  
- B. static  
- C. const  
- D. global  
- ✅ **Answer: C**

### 69. **Which built-in object handles dates and times?**
- A. Clock  
- B. Calendar  
- C. Time  
- D. Date  
- ✅ **Answer: D**

### 70. **Which function parses a string and returns a number?**
- A. toNumber()  
- B. parseInt()  
- C. convert()  
- D. Integer()  
- ✅ **Answer: B**

### 71. **Which of the following creates a Promise in JavaScript?**
- A. new Promise()  
- B. Promise.create()  
- C. makePromise()  
- D. async.Promise()  
- ✅ **Answer: A**

### 72. **What will `\"20\" * 2` return in JavaScript?**
- A. 202  
- B. \"40\"  
- C. 40  
- D. NaN  
- ✅ **Answer: C**

### 73. **Which array method checks if at least one element meets a condition?**
- A. every()  
- B. includes()  
- C. filter()  
- D. some()  
- ✅ **Answer: D**

### 74. **What is the correct syntax to import a module in JavaScript (ES6)?**
- A. include module from \"module\"  
- B. import \"module\"  
- C. require(\"module\")  
- D. import module from \"module\"  
- ✅ **Answer: D**

### 75. **What will be the output of `[] == false`?**
- A. true  
- B. false  
- C. undefined  
- D. Error  
- ✅ **Answer: A**

### 76. **What is the correct way to write an async arrow function?**
- A. async () => {}  
- B. () async => {}  
- C. () => async {}  
- D. await () => {}  
- ✅ **Answer: A**

### 77. **Which method adds one or more elements to the beginning of an array?**
- A. push()  
- B. unshift()  
- C. addFirst()  
- D. prepend()  
- ✅ **Answer: B**

### 78. **Which method sorts the elements of an array?**
- A. order()  
- B. sort()  
- C. arrange()  
- D. orderBy()  
- ✅ **Answer: B**

### 79. **Which of these is not a JavaScript error type?**
- A. ReferenceError  
- B. SyntaxError  
- C. TypeError  
- D. CodeError  
- ✅ **Answer: D**

### 80. **How can you write a multiline string in JavaScript?**
- A. Use double quotes  
- B. Use + operator  
- C. Use backticks (` `)  
- D. Use \\ at the end of each line  
- ✅ **Answer: C**

### 81. **Which function is used to delay code execution in JavaScript?**
- A. delay()  
- B. timeout()  
- C. setTimeout()  
- D. wait()  
- ✅ **Answer: C**

### 82. **Which method converts a number to a string?**
- A. toString()  
- B. String()  
- C. Both A and B  
- D. stringify()  
- ✅ **Answer: C**

### 83. **Which method creates a new array by applying a function to every element?**
- A. map()  
- B. filter()  
- C. reduce()  
- D. forEach()  
- ✅ **Answer: A**

### 84. **Which symbol is used for the spread operator?**
- A. ...  
- B. **  
- C. ++  
- D. ~~  
- ✅ **Answer: A**

### 85. **Which object represents the browser window in JavaScript?**
- A. browser  
- B. window  
- C. document  
- D. screen  
- ✅ **Answer: B**

### 86. **What is `null` in JavaScript?**
- A. A type of undefined  
- B. A number  
- C. An object  
- D. A function  
- ✅ **Answer: C**

### 87. **Which of the following is not a looping statement in JavaScript?**
- A. for  
- B. while  
- C. foreach  
- D. loop  
- ✅ **Answer: D**

### 88. **Which function returns the largest of zero or more numbers?**
- A. Math.max()  
- B. Math.large()  
- C. Math.big()  
- D. Math.high()  
- ✅ **Answer: A**

### 89. **How do you create a new Set in JavaScript?**
- A. new Set[]  
- B. Set()  
- C. new Set()  
- D. createSet()  
- ✅ **Answer: C**

### 90. **Which keyword is used to handle exceptions in JavaScript?**
- A. try  
- B. catch  
- C. throw  
- D. All of the above  
- ✅ **Answer: D**

### 91. **Which method is used to extract a section of a string?**
- A. slice()  
- B. split()  
- C. splice()  
- D. substr()  
- ✅ **Answer: A**

### 92. **What is the output of `typeof undefined`?**
- A. null  
- B. undefined  
- C. object  
- D. string  
- ✅ **Answer: B**

### 93. **Which built-in object has methods like `setDate()` and `getFullYear()`?**
- A. Date  
- B. Calendar  
- C. Time  
- D. Event  
- ✅ **Answer: A**

### 94. **Which method combines all elements of an array into a string?**
- A. combine()  
- B. join()  
- C. concat()  
- D. string()  
- ✅ **Answer: B**

### 95. **Which symbol is used for logical AND?**
- A. &&  
- B. ||  
- C. &  
- D. ^^  
- ✅ **Answer: A**

### 96. **Which keyword stops the execution of a function and returns a value?**
- A. break  
- B. exit  
- C. stop  
- D. return  
- ✅ **Answer: D**

### 97. **Which method returns the number of elements in an array?**
- A. count()  
- B. total()  
- C. length  
- D. size()  
- ✅ **Answer: C**

### 98. **What does `console.log()` do?**
- A. Opens the console  
- B. Logs output to the browser console  
- C. Saves data  
- D. Executes code  
- ✅ **Answer: B**

### 99. **What will `typeof NaN` return?**
- A. NaN  
- B. number  
- C. string  
- D. undefined  
- ✅ **Answer: B**

### 100. **Which method removes all elements from an array?**
- A. clear()  
- B. empty()  
- C. arr = []  
- D. delete()  
- ✅ **Answer: C**
