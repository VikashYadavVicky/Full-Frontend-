## 🚀 100 Intermediate JavaScript Q\&A (Short/Long)

### 1. **What is the difference between `==` and `===` in JavaScript?**

* **Answer:**

  * `==` checks for value equality with type coercion.
  * `===` checks for both value and type equality (strict equality).

### 2. **Explain closures in JavaScript.**

* **Answer:**

  * A closure is created when an inner function has access to the outer function's variables, even after the outer function has returned. Closures preserve the scope chain.

### 3. **What is hoisting in JavaScript?**

* **Answer:**

  * Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope before execution.

### 4. **What is the difference between `var`, `let`, and `const`?**

* **Answer:**

  * `var` is function-scoped and can be redeclared.
  * `let` is block-scoped and can be updated but not redeclared.
  * `const` is block-scoped and cannot be updated or redeclared.

### 5. **What is the 'this' keyword in JavaScript?**

* **Answer:**

  * `this` refers to the context in which a function is executed. In global scope, it's the window object (in browsers). In objects, it refers to the object itself.

### 6. **What are arrow functions and how are they different from regular functions?**

* **Answer:**

  * Arrow functions are a concise syntax for writing functions. They do not have their own `this`, arguments, super, or new\.target.

### 7. **What is the event loop in JavaScript?**

* **Answer:**

  * The event loop is a mechanism that handles asynchronous callbacks by pushing them from the message queue to the call stack when it’s empty.

### 8. **What are promises and why are they used?**

* **Answer:**

  * Promises are used for handling asynchronous operations. They represent a value that may be available now, later, or never.

### 9. **What is the difference between synchronous and asynchronous code?**

* **Answer:**

  * Synchronous code runs sequentially. Asynchronous code runs independently and doesn't block subsequent code execution.

### 10. **What is the purpose of `async` and `await`?**

* **Answer:**

  * `async` defines a function that returns a promise. `await` pauses the execution until the promise resolves, making asynchronous code look synchronous.

### 11. **What is the difference between `null` and `undefined`?**

* **Answer:**

  * `undefined` means a variable has been declared but not assigned. `null` is an assignment value that represents no value.

### 12. **What is a callback function in JavaScript?**

* **Answer:**

  * A callback is a function passed into another function as an argument and is executed after the parent function completes.

### 13. **What are template literals in JavaScript?**

* **Answer:**

  * Template literals are string literals allowing embedded expressions using backticks (\`\`) and `${}` for interpolation.

### 14. **What are JavaScript data types?**

* **Answer:**

  * Primitive types: String, Number, BigInt, Boolean, Undefined, Symbol, Null. Reference types: Object, Array, Function.

### 15. **What is destructuring in JavaScript?**

* **Answer:**

  * Destructuring allows unpacking values from arrays or properties from objects into distinct variables.

### 16. **How does the `spread` operator work?**

* **Answer:**

  * The spread operator (`...`) expands iterable elements like arrays or strings into individual elements.

### 17. **What is an IIFE (Immediately Invoked Function Expression)?**

* **Answer:**

  * An IIFE is a function that runs as soon as it is defined, typically wrapped in `()` and followed by another `()`.

### 18. **What is the purpose of `try...catch` in JavaScript?**

* **Answer:**

  * It handles errors gracefully during execution. `try` contains code to run, and `catch` handles exceptions.

### 19. **What are higher-order functions in JavaScript?**

* **Answer:**

  * Functions that take other functions as arguments or return them as results.

### 20. **What is the difference between `map()`, `filter()`, and `reduce()`?**

* **Answer:**

  * `map()` transforms each array element.
  * `filter()` selects elements based on a condition.
  * `reduce()` reduces the array to a single value based on logic.


### 21. **What is the purpose of `setTimeout()` and `setInterval()`?**

* **Answer:**

  * `setTimeout()` executes a function after a specified delay once.
  * `setInterval()` executes a function repeatedly at fixed intervals.

### 22. **What are the different ways to define a function in JavaScript?**

* **Answer:**

  * Function Declaration
  * Function Expression
  * Arrow Function
  * Constructor Function (`new Function()`)

### 23. **What is function currying?**

* **Answer:**

  * Currying is the process of breaking down a function that takes multiple arguments into a series of functions that each take one argument.

### 24. **Explain the concept of prototypal inheritance.**

* **Answer:**

  * In JavaScript, objects inherit properties and methods from their prototype chain. This allows shared behavior through the prototype object.

### 25. **What is the difference between `Object.freeze()` and `Object.seal()`?**

* **Answer:**

  * `Object.freeze()` makes an object immutable.
  * `Object.seal()` prevents adding/removing properties but allows changing existing ones.

### 26. **What is the use of the `bind()` method?**

* **Answer:**

  * `bind()` creates a new function with `this` bound to a specific object, useful in callbacks and event handlers.

### 27. **What is event delegation in JavaScript?**

* **Answer:**

  * Event delegation allows handling events at a higher-level parent element instead of attaching listeners to individual children.

### 28. **How can you deep clone an object in JavaScript?**

* **Answer:**

  * Methods: `structuredClone(obj)` (modern), `JSON.parse(JSON.stringify(obj))` (basic), or using libraries like Lodash's `cloneDeep()`.

### 29. **What are the falsy values in JavaScript?**

* **Answer:**

  * `false`, `0`, `-0`, `""`, `null`, `undefined`, and `NaN`.

### 30. **How does `Object.assign()` work?**

* **Answer:**

  * It copies properties from one or more source objects to a target object. It performs a shallow copy.

### 31. **What is the difference between shallow copy and deep copy?**

* **Answer:**

  * Shallow copy copies only references of nested objects.
  * Deep copy recursively copies all levels of data, ensuring independence.

### 32. **What is the difference between `call()` and `apply()`?**

* **Answer:**

  * Both invoke functions with a specified `this` value.
  * `call()` passes arguments individually, `apply()` passes them as an array.

### 33. **What is a generator function?**

* **Answer:**

  * A generator is a special function that can pause execution (`yield`) and resume later. Defined with `function*`.

### 34. **How do you detect an array in JavaScript?**

* **Answer:**

  * Use `Array.isArray(value)` to check if a value is an array.

### 35. **What is the difference between `slice()` and `splice()`?**

* **Answer:**

  * `slice()` returns a shallow copy of a portion of an array.
  * `splice()` changes the original array by removing or adding elements.

### 36. **What is memoization?**

* **Answer:**

  * Memoization is a performance optimization where function results are cached based on arguments to avoid redundant calculations.

### 37. **What is a pure function?**

* **Answer:**

  * A function that has no side effects and returns the same output for the same input.

### 38. **What is NaN in JavaScript?**

* **Answer:**

  * `NaN` stands for "Not-a-Number" and is returned when a mathematical operation fails.

### 39. **What is the use of `encodeURIComponent()`?**

* **Answer:**

  * It encodes a URI component by escaping special characters for safe transmission in a URL.

### 40. **How do modules work in JavaScript?**

* **Answer:**

  * Modules let you import and export reusable code. ES6 uses `import/export` syntax, while CommonJS uses `require/module.exports`.

### 41. **What are the differences between `for...in` and `for...of` loops?**

* **Answer:**

  * `for...in` iterates over enumerable properties (keys) of an object.
  * `for...of` iterates over iterable values like arrays, strings, maps, etc.

### 42. **What is the temporal dead zone (TDZ) in JavaScript?**

* **Answer:**

  * TDZ is the period between entering a block and initializing `let`/`const` where accessing them throws a ReferenceError.

### 43. **How does JavaScript handle asynchronous operations under the hood?**

* **Answer:**

  * JavaScript uses an event loop, call stack, and callback queue to manage async tasks, with Web APIs handling operations like setTimeout.

### 44. **What is the difference between rest and spread operators?**

* **Answer:**

  * Rest (`...`) collects remaining elements into an array.
  * Spread (`...`) expands elements from an array or object.

### 45. **How does JavaScript handle memory management?**

* **Answer:**

  * JavaScript uses automatic garbage collection. It tracks memory allocation and frees memory that's no longer reachable.

### 46. **What are weak references in JavaScript?**

* **Answer:**

  * Weak references (like in `WeakMap` and `WeakSet`) allow referencing objects without preventing garbage collection.

### 47. **What is the call stack in JavaScript?**

* **Answer:**

  * The call stack is a data structure used by the JS engine to track function calls. Functions are pushed and popped as they are called and returned.

### 48. **Explain the concept of throttling and debouncing.**

* **Answer:**

  * Throttling limits the execution of a function to once every X ms.
  * Debouncing delays execution until X ms have passed since the last invocation.

### 49. **What is the role of the `new` keyword in JavaScript?**

* **Answer:**

  * The `new` keyword creates a new instance of a constructor function, setting up inheritance and `this` context.

### 50. **What is the difference between class and prototype inheritance?**

* **Answer:**

  * Class inheritance uses ES6 `class` syntax and is syntactic sugar over prototype inheritance, which uses objects linked via prototypes.

### 51. **What are Symbols in JavaScript?**

* **Answer:**

  * Symbols are a primitive data type used to create unique and non-enumerable object keys.

### 52. **What is a service worker?**

* **Answer:**

  * A service worker is a script that runs in the background of a web app, enabling features like offline access and background sync.

### 53. **What are the main differences between ES5 and ES6?**

* **Answer:**

  * ES6 introduced `let`, `const`, arrow functions, classes, template literals, destructuring, promises, and modules.

### 54. **What is tail call optimization?**

* **Answer:**

  * It's a technique where the JavaScript engine reuses the stack frame for tail-recursive functions to avoid stack overflow.

### 55. **What is a module bundler?**

* **Answer:**

  * A module bundler combines multiple JavaScript files into a single file (bundle) for easier deployment. Examples include Webpack, Rollup, and Parcel.

### 56. **What is the purpose of `use strict` in JavaScript?**

* **Answer:**

  * It enforces stricter parsing and error handling in your code, preventing some silent errors and unsafe actions.

### 57. **What is an event loop tick?**

* **Answer:**

  * A tick is one cycle of the event loop. During each tick, the loop checks the queue and executes callbacks if the call stack is empty.

### 58. **How does JavaScript handle blocking and non-blocking code?**

* **Answer:**

  * Blocking code prevents further execution until it finishes. Non-blocking (async) code uses callbacks/promises to execute later.

### 59. **What is dynamic typing in JavaScript?**

* **Answer:**

  * JavaScript is dynamically typed, meaning variables can hold any type, and types can change at runtime.

### 60. **What is the difference between a function declaration and a function expression?**

* **Answer:**

  * Function declarations are hoisted, while expressions are not. Declarations define a named function; expressions can be anonymous and assigned to variables.

### 61. **What is the difference between `undefined` and not defined in JavaScript?**

* **Answer:**

  * `undefined` means a variable has been declared but not assigned a value.
  * Not defined means a variable hasn’t been declared at all, and accessing it causes a ReferenceError.

### 62. **How does the `typeof` operator work in JavaScript?**

* **Answer:**

  * `typeof` returns a string indicating the type of the operand. E.g., `typeof 42` returns "number".

### 63. **What is the event bubbling and capturing in the DOM?**

* **Answer:**

  * Bubbling: Event propagates from target element up to the root.
  * Capturing: Event propagates from root down to the target.

### 64. **What are the different ways to handle events in JavaScript?**

* **Answer:**

  * Using `addEventListener()`, setting `onclick`, inline HTML handlers, and jQuery (if used).

### 65. **What is the difference between `innerHTML`, `innerText`, and `textContent`?**

* **Answer:**

  * `innerHTML`: Gets/sets HTML markup.
  * `innerText`: Gets/sets visible text (respecting styling).
  * `textContent`: Gets/sets all text, regardless of style.

### 66. **What is the DOM?**

* **Answer:**

  * DOM (Document Object Model) is a tree-like structure representing the content of a web page as objects.

### 67. **How do you prevent event propagation in JavaScript?**

* **Answer:**

  * Use `event.stopPropagation()` to stop bubbling and `event.stopImmediatePropagation()` to stop all further listeners.

### 68. **What are the differences between `==` and `Object.is()`?**

* **Answer:**

  * `Object.is()` is more strict than `===`; it treats `NaN === NaN` as true and `+0 !== -0`.

### 69. **What is the purpose of `Promise.all()`?**

* **Answer:**

  * `Promise.all()` executes multiple promises in parallel and resolves when all are resolved or rejects if any fail.

### 70. **What is the purpose of `Promise.race()`?**

* **Answer:**

  * `Promise.race()` resolves or rejects as soon as one of the promises in the iterable resolves or rejects.

### 71. **How do you handle errors in Promises?**

* **Answer:**

  * Use `.catch()` for error handling or wrap with `try...catch` in async/await.

### 72. **What is `nullish coalescing operator (??)`?**

* **Answer:**

  * Returns the right-hand operand if the left-hand operand is `null` or `undefined`.

### 73. **What is optional chaining (`?.`) in JavaScript?**

* **Answer:**

  * Optional chaining safely accesses nested object properties, preventing errors if a reference is null or undefined.

### 74. **What are tagged template literals?**

* **Answer:**

  * They allow customizing string interpolation using a tag function that processes the template.

### 75. **What is the difference between `Array.from()` and `Array.of()`?**

* **Answer:**

  * `Array.from()` creates an array from iterable or array-like objects.
  * `Array.of()` creates an array from the given arguments.

### 76. **What is destructuring with default values?**

* **Answer:**

  * You can assign default values during destructuring to avoid `undefined`. E.g., `const [a = 1] = []`.

### 77. **What is the difference between a shallow copy and a deep copy of an object?**

* **Answer:**

  * Shallow copy duplicates top-level properties. Deep copy duplicates all nested objects recursively.

### 78. **What is the difference between `Math.floor()`, `Math.ceil()`, and `Math.round()`?**

* **Answer:**

  * `floor()` rounds down, `ceil()` rounds up, and `round()` rounds to the nearest integer.

### 79. **How can you create private variables in JavaScript?**

* **Answer:**

  * Use closures, ES6 WeakMaps, or the `#` syntax for private fields in classes.

### 80. **What are the benefits of using `const` over `let` or `var`?**

* **Answer:**

  * `const` prevents reassignment, making code more predictable and reducing bugs due to unintentional variable changes.

### 81. **What is the difference between `window.onload` and `DOMContentLoaded`?**

* **Answer:**

  * `window.onload` fires when the entire page, including all resources, is loaded.
  * `DOMContentLoaded` fires when only the DOM is fully loaded and parsed.

### 82. **What is the purpose of the `fetch()` API in JavaScript?**

* **Answer:**

  * `fetch()` is used to make network requests. It returns a Promise that resolves to the response of the request.

### 83. **What is CORS and how does it affect JavaScript requests?**

* **Answer:**

  * CORS (Cross-Origin Resource Sharing) is a security feature that restricts cross-origin HTTP requests unless permitted by the server.

### 84. **What are the advantages of using `async/await` over Promises?**

* **Answer:**

  * `async/await` makes asynchronous code look and behave more like synchronous code, improving readability and error handling.

### 85. **What is the difference between `localStorage`, `sessionStorage`, and `cookies`?**

* **Answer:**

  * `localStorage`: Stores data with no expiration.
  * `sessionStorage`: Stores data for the session.
  * `cookies`: Stores small data, sent with every HTTP request.

### 86. **What is a factory function in JavaScript?**

* **Answer:**

  * A function that returns a new object every time it’s called, commonly used to create object instances without `new`.

### 87. **What is the event.target and event.currentTarget in event handling?**

* **Answer:**

  * `event.target`: The element that triggered the event.
  * `event.currentTarget`: The element on which the event listener is attached.

### 88. **What are mixins in JavaScript?**

* **Answer:**

  * Mixins are a way to include reusable functionality into multiple classes or objects without inheritance.

### 89. **What is the global object in JavaScript?**

* **Answer:**

  * It’s the top-level object that contains global functions, variables, and built-in objects. In browsers, it's `window`.

### 90. **What is the purpose of `Object.create()`?**

* **Answer:**

  * `Object.create()` creates a new object with the specified prototype object and optional properties.

### 91. **What is the difference between `Object.keys()`, `Object.values()`, and `Object.entries()`?**

* **Answer:**

  * `Object.keys()`: Returns an array of property names.
  * `Object.values()`: Returns an array of property values.
  * `Object.entries()`: Returns an array of key-value pairs.

### 92. **What is the purpose of the `super` keyword in classes?**

* **Answer:**

  * `super` is used to call the constructor or methods of a parent class in subclasses.

### 93. **What are static methods in JavaScript classes?**

* **Answer:**

  * Static methods are defined on the class itself and not on instances. They are called using the class name.

### 94. **What is the `instanceof` operator used for?**

* **Answer:**

  * It checks whether an object is an instance of a specific constructor or class.

### 95. **What are the different types of scopes in JavaScript?**

* **Answer:**

  * Global scope, Function scope, Block scope, Module scope, and Lexical scope.

### 96. **What is lexical scoping in JavaScript?**

* **Answer:**

  * Lexical scoping means that a variable's scope is determined by its location in the source code.

### 97. **What are the common memory leaks in JavaScript?**

* **Answer:**

  * Unreferenced DOM nodes, closures holding large data, forgotten timers or intervals, and global variables.

### 98. **What is tail recursion?**

* **Answer:**

  * A recursion where the recursive call is the last operation in the function, allowing some engines to optimize the call.

### 99. **What is the purpose of `Symbol.iterator`?**

* **Answer:**

  * It defines the default iterator for an object, making it compatible with `for...of` and spread syntax.

### 100. **What is the purpose of the `Reflect` API?**

* **Answer:**

  * The `Reflect` object provides methods for interceptable JavaScript operations, useful in conjunction with proxies.


---
# ✅ 100 Intermediate JavaScript MCQs

### 1. **Which keyword is used to define a block-scoped variable in JavaScript?**

* A. var
* B. let
* C. const
* D. Both B and C
* **Correct Answer:** D

### 2. **What is the output of the following code?**

```js
console.log(typeof null);
```

* A. "null"
* B. "undefined"
* C. "object"
* D. "function"
* **Correct Answer:** C

### 3. **Which method converts a JSON string into a JavaScript object?**

* A. JSON.parse()
* B. JSON.stringify()
* C. JSON.toObject()
* D. parse.JSON()
* **Correct Answer:** A

### 4. **Which statement is true about arrow functions?**

* A. They have their own `this` context.
* B. They do not bind their own `this`.
* C. They can be used as constructors.
* D. They always return a string.
* **Correct Answer:** B

### 5. **What will the following code return?**

```js
[...'abc']
```

* A. \['abc']
* B. \['a', 'b', 'c']
* C. undefined
* D. Syntax Error
* **Correct Answer:** B

### 6. **Which array method creates a new array with all elements that pass the test?**

* A. map()
* B. filter()
* C. forEach()
* D. reduce()
* **Correct Answer:** B

### 7. **What is the result of the expression `NaN === NaN`?**

* A. true
* B. false
* C. NaN
* D. Error
* **Correct Answer:** B

### 8. **Which of the following is a primitive data type in JavaScript?**

* A. Object
* B. Array
* C. Function
* D. Boolean
* **Correct Answer:** D

### 9. **What is a closure in JavaScript?**

* A. A function that is called recursively
* B. A function having access to its own scope only
* C. A function that retains access to its lexical scope
* D. A block of code that runs immediately
* **Correct Answer:** C

### 10. **Which of the following is NOT a falsy value in JavaScript?**

* A. 0
* B. ""
* C. \[]
* D. null
* **Correct Answer:** C

### 11. **What is the purpose of the `bind()` method in JavaScript?**
- A. It immediately invokes the function  
- B. It changes the scope of `this` inside the function  
- C. It executes a function after a delay  
- D. It loops through an array  
- **Correct Answer:** B

### 12. **Which of the following is a valid way to define a class in JavaScript (ES6)?**
- A. `function MyClass() {}`  
- B. `class MyClass {}`  
- C. `var MyClass = new Class()`  
- D. `let MyClass = define class()`  
- **Correct Answer:** B

### 13. **Which method is used to combine all values of an array into a single value?**
- A. reduce()  
- B. map()  
- C. filter()  
- D. concat()  
- **Correct Answer:** A

### 14. **What is the use of the `await` keyword in JavaScript?**
- A. Declares an asynchronous function  
- B. Suspends function execution until a Promise resolves  
- C. Executes immediately  
- D. Waits for a function to finish loading  
- **Correct Answer:** B

### 15. **How can you make an object immutable in JavaScript?**
- A. Object.define()  
- B. Object.freeze()  
- C. const obj = {}  
- D. Object.lock()  
- **Correct Answer:** B

### 16. **Which operator can be used to copy all enumerable properties from one object to another?**
- A. =  
- B. ... (spread)  
- C. clone  
- D. map  
- **Correct Answer:** B

### 17. **Which of the following is used to handle errors in JavaScript?**
- A. try/catch  
- B. if/else  
- C. switch  
- D. for/while  
- **Correct Answer:** A

### 18. **How do you define a default parameter in a JavaScript function?**
- A. `function test(x = 1)`  
- B. `function test(x: 1)`  
- C. `function test(x default 1)`  
- D. `function test(default x = 1)`  
- **Correct Answer:** A

### 19. **Which of the following array methods does NOT modify the original array?**
- A. pop()  
- B. push()  
- C. slice()  
- D. splice()  
- **Correct Answer:** C

### 20. **What does the `finally` block do in JavaScript error handling?**
- A. Executes only if there's no error  
- B. Executes only if there's an error  
- C. Always executes regardless of try/catch outcome  
- D. Defines the error thrown  
- **Correct Answer:** C

### 21. **What is the output of: `typeof function() {}`**
- A. "object"  
- B. "method"  
- C. "function"  
- D. "undefined"  
- **Correct Answer:** C

### 22. **Which method is used to parse a JSON string in JavaScript?**
- A. JSON.stringify()  
- B. parseJSON()  
- C. JSON.parse()  
- D. JSON.toObject()  
- **Correct Answer:** C

### 23. **Which keyword is used to create a constant in JavaScript?**
- A. let  
- B. const  
- C. var  
- D. static  
- **Correct Answer:** B

### 24. **What will `typeof NaN` return?**
- A. "NaN"  
- B. "number"  
- C. "undefined"  
- D. "object"  
- **Correct Answer:** B

### 25. **Which method returns the keys of an object as an array?**
- A. Object.values()  
- B. Object.keys()  
- C. Object.get()  
- D. Object.list()  
- **Correct Answer:** B

### 26. **Which loop is guaranteed to run at least once?**
- A. for  
- B. while  
- C. forEach  
- D. do...while  
- **Correct Answer:** D

### 27. **What is a Promise in JavaScript?**
- A. A callback  
- B. A function  
- C. An object representing future completion or failure of an async task  
- D. A special keyword  
- **Correct Answer:** C

### 28. **Which method returns a shallow copy of a portion of an array?**
- A. splice()  
- B. copy()  
- C. slice()  
- D. filter()  
- **Correct Answer:** C

### 29. **Which method is used to determine if a string contains a specified substring?**
- A. includes()  
- B. find()  
- C. has()  
- D. match()  
- **Correct Answer:** A

### 30. **Which operator is used for exponentiation in JavaScript?**
- A. ^  
- B. **  
- C. exp()  
- D. pow()  
- **Correct Answer:** B

### 31. **What is the output of `typeof []`?**
- A. \"object\"  
- B. \"array\"  
- C. \"list\"  
- D. \"undefined\"  
- **Correct Answer:** A

### 32. **Which keyword is used to inherit a class in JavaScript?**
- A. inherit  
- B. extends  
- C. implements  
- D. super  
- **Correct Answer:** B

### 33. **Which method is used to return the primitive value of an object?**
- A. toString()  
- B. value()  
- C. valueOf()  
- D. getValue()  
- **Correct Answer:** C

### 34. **How do you create a new Set in JavaScript?**
- A. `new Set([])`  
- B. `Set.create()`  
- C. `Set.new()`  
- D. `new Set{}`  
- **Correct Answer:** A

### 35. **What will `Array.isArray([])` return?**
- A. false  
- B. true  
- C. \"array\"  
- D. error  
- **Correct Answer:** B

### 36. **Which function is used to delay code execution in JavaScript?**
- A. delay()  
- B. setTimeout()  
- C. wait()  
- D. defer()  
- **Correct Answer:** B

### 37. **What does the `map()` method return?**
- A. Boolean  
- B. Object  
- C. New array  
- D. Number  
- **Correct Answer:** C

### 38. **Which symbol is used for comments in JavaScript?**
- A. // or /* */  
- B. # or <!-- -->  
- C. % or /* */  
- D. < !-- -->  
- **Correct Answer:** A

### 39. **What is the default value of `this` in the global scope (non-strict mode)?**
- A. null  
- B. window  
- C. global  
- D. undefined  
- **Correct Answer:** B

### 40. **Which built-in method sorts the elements of an array?**
- A. order()  
- B. arrange()  
- C. sort()  
- D. organize()  
- **Correct Answer:** C

### 41. **Which of the following creates a deep copy of an object in JavaScript?**
- A. Object.assign({}, obj)  
- B. JSON.parse(JSON.stringify(obj))  
- C. spread operator  
- D. obj.clone()  
- **Correct Answer:** B

### 42. **Which method is used to execute a function on each array element?**
- A. forEach()  
- B. map()  
- C. reduce()  
- D. every()  
- **Correct Answer:** A

### 43. **What does the `every()` method do in an array?**
- A. Checks if all elements pass a condition  
- B. Removes duplicates  
- C. Returns true if at least one passes  
- D. Iterates without return  
- **Correct Answer:** A

### 44. **What is the result of `'5' + 3`?**
- A. 8  
- B. \"8\"  
- C. \"53\"  
- D. Error  
- **Correct Answer:** C

### 45. **Which method would you use to convert a number to a string?**
- A. parseInt()  
- B. Number()  
- C. toString()  
- D. toNumber()  
- **Correct Answer:** C

### 46. **What does `Object.entries(obj)` return?**
- A. Array of keys  
- B. Array of values  
- C. Array of key-value pairs  
- D. JSON string  
- **Correct Answer:** C

### 47. **Which operator checks both value and type?**
- A. ==  
- B. !=  
- C. ===  
- D. !==  
- **Correct Answer:** C

### 48. **Which method converts an array to a string with a custom separator?**
- A. join()  
- B. toString()  
- C. concat()  
- D. push()  
- **Correct Answer:** A

### 49. **What will `"5" * "2"` return?**
- A. 52  
- B. \"10\"  
- C. 10  
- D. NaN  
- **Correct Answer:** C

### 50. **What is the purpose of the `super` keyword in JavaScript?**
- A. Calls a static method  
- B. Declares inheritance  
- C. Accesses parent class methods  
- D. Declares private variable  
- **Correct Answer:** C

### 51. **Which keyword is used to define a function in JavaScript?**
- A. func  
- B. function  
- C. def  
- D. method  
- **Correct Answer:** B

### 52. **What does the `includes()` method do in JavaScript arrays?**
- A. Finds the index of an element  
- B. Filters the array  
- C. Checks if an element exists  
- D. Converts to a string  
- **Correct Answer:** C

### 53. **Which method is used to remove the last element of an array?**
- A. shift()  
- B. slice()  
- C. pop()  
- D. splice()  
- **Correct Answer:** C

### 54. **What is the output of `true + true`?**
- A. 1  
- B. 2  
- C. true  
- D. NaN  
- **Correct Answer:** B

### 55. **What does the `setInterval()` function do?**
- A. Executes a function repeatedly at a given interval  
- B. Delays function execution once  
- C. Stops a running process  
- D. Loops an array  
- **Correct Answer:** A

### 56. **Which of the following is not a loop in JavaScript?**
- A. for  
- B. while  
- C. until  
- D. do...while  
- **Correct Answer:** C

### 57. **What is a callback function in JavaScript?**
- A. A function that returns another function  
- B. A function passed into another function as an argument  
- C. A function that executes immediately  
- D. A function stored in localStorage  
- **Correct Answer:** B

### 58. **How can you check if a variable is `NaN`?**
- A. `isNan()`  
- B. `Number.NaN()`  
- C. `isNaN()`  
- D. `typeof NaN`  
- **Correct Answer:** C

### 59. **Which method can be used to merge two or more arrays?**
- A. merge()  
- B. combine()  
- C. concat()  
- D. join()  
- **Correct Answer:** C

### 60. **What will `typeof undefined` return?**
- A. \"null\"  
- B. \"object\"  
- C. \"undefined\"  
- D. \"boolean\"  
- **Correct Answer:** C

### 61. **What does the `reverse()` method do?**
- A. Reverses characters in a string  
- B. Sorts the array  
- C. Reverses the order of an array in place  
- D. Returns the last item  
- **Correct Answer:** C

### 62. **Which value is not considered a falsy value in JavaScript?**
- A. 0  
- B. null  
- C. \"false\"  
- D. undefined  
- **Correct Answer:** C

### 63. **What will `Boolean([])` return?**
- A. false  
- B. true  
- C. NaN  
- D. Error  
- **Correct Answer:** B

### 64. **What is the output of `typeof NaN`?**
- A. \"NaN\"  
- B. \"undefined\"  
- C. \"object\"  
- D. \"number\"  
- **Correct Answer:** D

### 65. **How can you clone an object in JavaScript?**
- A. Object.clone()  
- B. spread operator {...obj}  
- C. obj.clone()  
- D. object.copy()  
- **Correct Answer:** B

### 66. **Which keyword is used to exit a loop?**
- A. exit  
- B. return  
- C. break  
- D. stop  
- **Correct Answer:** C

### 67. **Which method executes a reducer function on each array element?**
- A. reduce()  
- B. map()  
- C. filter()  
- D. slice()  
- **Correct Answer:** A

### 68. **Which method returns a new array with transformed elements?**
- A. map()  
- B. reduce()  
- C. filter()  
- D. concat()  
- **Correct Answer:** A

### 69. **Which method checks if at least one element in an array passes a test?**
- A. every()  
- B. some()  
- C. includes()  
- D. match()  
- **Correct Answer:** B

### 70. **What is returned by `typeof Infinity`?**
- A. \"number\"  
- B. \"object\"  
- C. \"Infinity\"  
- D. \"undefined\"  
- **Correct Answer:** A


### 71. **What is the purpose of the `Promise.all()` method?**
- A. Executes promises sequentially  
- B. Returns the fastest promise  
- C. Waits for all promises to resolve or reject  
- D. Rejects if the first promise fails  
- **Correct Answer:** C

### 72. **Which statement is true about the `this` keyword in arrow functions?**
- A. It always refers to the global object  
- B. It is dynamic  
- C. It refers to the enclosing lexical scope  
- D. It can be changed with `bind()`  
- **Correct Answer:** C

### 73. **How do you prevent event bubbling in JavaScript?**
- A. event.preventDefault()  
- B. event.stopPropagation()  
- C. return false  
- D. event.cancelBubble()  
- **Correct Answer:** B

### 74. **What is the difference between `==` and `===`?**
- A. No difference  
- B. `==` checks value, `===` checks value and type  
- C. `===` checks only type  
- D. `==` checks type  
- **Correct Answer:** B

### 75. **What is the correct way to create a class method in JavaScript?**
- A. `method = function() {}`  
- B. `function method() {}`  
- C. `method() {}`  
- D. `const method = () => {}`  
- **Correct Answer:** C

### 76. **What will `Math.max()` return when no arguments are passed?**
- A. 0  
- B. undefined  
- C. NaN  
- D. -Infinity  
- **Correct Answer:** D

### 77. **Which object is used for regular expressions in JavaScript?**
- A. RegExp  
- B. Regex  
- C. Pattern  
- D. Match  
- **Correct Answer:** A

### 78. **What does the `instanceof` operator do?**
- A. Checks the prototype chain  
- B. Compares object keys  
- C. Converts objects  
- D. Returns constructor name  
- **Correct Answer:** A

### 79. **What will `"2" * 3` evaluate to?**
- A. "6"  
- B. 6  
- C. NaN  
- D. "23"  
- **Correct Answer:** B

### 80. **Which function is used to stop a repeating `setInterval`?**
- A. clearTimeout()  
- B. stopInterval()  
- C. clearInterval()  
- D. stopTimeout()  
- **Correct Answer:** C

### 81. **Which keyword is used to handle exceptions in JavaScript?**
- A. catch  
- B. exception  
- C. throw  
- D. try  
- **Correct Answer:** A

### 82. **How do you convert a string to a number in JavaScript?**
- A. Number()  
- B. parseInt()  
- C. parseFloat()  
- D. All of the above  
- **Correct Answer:** D

### 83. **Which loop is best for iterating over object keys?**
- A. for  
- B. for...in  
- C. for...of  
- D. while  
- **Correct Answer:** B

### 84. **Which loop is best for arrays with async/await?**
- A. forEach  
- B. for  
- C. while  
- D. for...in  
- **Correct Answer:** B

### 85. **Which keyword is used to throw a user-defined exception?**
- A. throw  
- B. catch  
- C. raise  
- D. alert  
- **Correct Answer:** A

### 86. **What will `parseInt(\"08\")` return?**
- A. 8  
- B. 0  
- C. NaN  
- D. 10  
- **Correct Answer:** A

### 87. **Which global function decodes a URI?**
- A. encodeURI()  
- B. escape()  
- C. decodeURI()  
- D. unescape()  
- **Correct Answer:** C

### 88. **Which operator is used for optional chaining?**
- A. `??`  
- B. `?.`  
- C. `::`  
- D. `&&`  
- **Correct Answer:** B

### 89. **What is the purpose of `Object.seal()`?**
- A. Makes object immutable  
- B. Prevents adding/removing properties  
- C. Deletes all keys  
- D. Copies an object  
- **Correct Answer:** B

### 90. **Which method would you use to flatten nested arrays?**
- A. flat()  
- B. reduce()  
- C. spread operator  
- D. concat()  
- **Correct Answer:** A

### 91. **What is a WeakMap in JavaScript?**
- A. Map with weak keys  
- B. Map with no size  
- C. Map that can't use objects  
- D. Immutable map  
- **Correct Answer:** A

### 92. **What does `Object.assign()` do?**
- A. Duplicates an object  
- B. Copies properties to a target object  
- C. Deletes properties  
- D. Merges arrays  
- **Correct Answer:** B

### 93. **How do you define a generator function?**
- A. `function* gen()`  
- B. `gen function()`  
- C. `function.gen()`  
- D. `function->()`  
- **Correct Answer:** A

### 94. **What is a Symbol in JavaScript?**
- A. A string alias  
- B. A unique and immutable primitive value  
- C. A global variable  
- D. A number representation  
- **Correct Answer:** B

### 95. **Which of these is not an async pattern?**
- A. Callback  
- B. Promise  
- C. async/await  
- D. eval()  
- **Correct Answer:** D

### 96. **Which feature allows you to group multiple values in one variable?**
- A. Set  
- B. Array  
- C. Object  
- D. All of the above  
- **Correct Answer:** D

### 97. **Which of the following is used to create modules in JS (ES6)?**
- A. require()  
- B. include()  
- C. import/export  
- D. fetch()  
- **Correct Answer:** C

### 98. **Which object method copies enumerable properties from source to target?**
- A. Object.create()  
- B. Object.assign()  
- C. Object.freeze()  
- D. Object.merge()  
- **Correct Answer:** B

### 99. **Which property holds the number of milliseconds since 1970?**
- A. Date.time  
- B. Date.now()  
- C. time()  
- D. getTime()  
- **Correct Answer:** B

### 100. **What does the `await` keyword require to be used?**
- A. A Promise  
- B. A normal function  
- C. An async function  
- D. A setTimeout call  
- **Correct Answer:** C
