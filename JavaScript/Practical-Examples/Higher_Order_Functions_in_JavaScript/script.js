//higher order function
// function a(b) {
//     // console.dir(b);
//     console.log('Hello');
//     console.log(b);
//     b()
// }



// // //callback function
// a(function() {
//     console.log('Hello');
//     console.log('Vikash');
// })


// console.log('Hello Vikash');    
// console.log('Hello Vikash 2');



// function a(b) {
//     console.log('Hello');
//     b()
// }


// a(function() {
//     console.log('Hiiiiiiiiiiiiiiiiiii');
//     console.log('Vikash');
// })


// ------------------------------
// 🔼 Higher-Order Function Examples
// ------------------------------

// Higher-order function and callback
function a(b) {
    console.log("Hello from Higher Order Function");
    b();
}

// Callback function
a(function () {
    console.log("Hello from Callback");
});

// Passing functions as arguments
function greet(name) {
    return `Hello, ${name}`;
}

function processUserInput(callback) {
    const name = "Vikash";
    console.log(callback(name));
}

processUserInput(greet);

// Returning function from another function
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // 10

// map(), filter(), reduce() examples
const numbers = [1, 2, 3, 4];

const squared = numbers.map(num => num * num);
console.log("Squared:", squared); // [1, 4, 9, 16]

const even = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", even); // [2, 4]

const sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum); // 10


// ------------------------------
// ⏱️ setTimeout() Examples
// ------------------------------

// Basic timeout
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

// Passing function reference
function greetTimeout() {
    console.log("Hello Vikash from setTimeout");
}
const id1 = setTimeout(greetTimeout, 3000); // runs after 3 seconds

// With arguments
function greetUser(name) {
    console.log("Hello, " + name);
}
setTimeout(greetUser, 2000, "Vikash");

// With arguments and clearing
function printArgs() {
    console.log("Arguments:", arguments);
    console.log("Hello Vikash (but was cancelled)");
}
const id4 = setTimeout(printArgs, 5000, 1, 2, 3, 4, 'extra');
clearTimeout(id4); // Cancels before running

// Avoid this — string-based call (unsafe)
setTimeout('console.log("Hello Vikash from string")', 4000);


// ------------------------------
// 🔁 setInterval() Examples
// ------------------------------

// Repeating message
const repeatId = setInterval(() => {
    console.log("This message repeats every 2 sec");
}, 2000);

// Function with arguments
function intervalWithArgs() {
    console.log("Interval Args:", arguments);
    console.log("Hello from interval");
}
const idIntervalArgs = setInterval(intervalWithArgs, 3000, "JS", 42);

// Stop after certain time
let counter = 0;
const intervalCounter = setInterval(() => {
    console.log("Counter:", counter);
    counter++;
    if (counter === 5) clearInterval(intervalCounter); // stop after 5 counts
}, 1000);

// Using clearInterval
const tickId = setInterval(() => console.log("Tick"), 1000);
setTimeout(() => clearInterval(tickId), 5000); // stops after 5 seconds


