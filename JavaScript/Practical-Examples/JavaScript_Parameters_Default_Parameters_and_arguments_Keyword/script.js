


const add1= function(){
    let sum=0
    for(let i=0; i<arguments.length; i++){
        sum+=arguments[i]

    }
    return sum
}   

console.log(add1(1,2,3,4,5,6,7,8,9,10));


const add2=function(){
    // const arr=[...arguments]
    // const arr=Array.from(arguments)
    // const arr=[...arguments]
    const arr=[]
    for(let i=0; i<arguments.length; i++){
        arr.push(arguments[i])
    }
    let sum=arr.reduce((acc, curr) => {
        return acc + curr
    }, 0)

    return sum
}

console.log(add2(1,2,3,4,5,6,7,8,9,10));

// Default Arguments
function multiply(a, b=1){
    return a*b
}
console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5

// Spread Operator
const nums=[1,2,3,4,5]
const nums2=[6,7,8,9,10]
const nums3=[...nums, ...nums2]
const nums6=[...nums, ...nums2,'City', 'Country']
const myname='Vikash'
const nums7=[...nums, ...nums2, ...myname]
console.log(nums6); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'City', 'Country']
console.log(nums); // [1, 2, 3, 4, 5]
console.log(nums3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(...nums3); // 1 2 3 4 5 6 7 8 9 10
console.log(nums3[0]); // 1


const nums4=[...nums, ...nums2, 11, 12, 13]
console.log(nums4); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const str='Hello'
const str2='World'
const str3=[...str, ...str2]
console.log(str3); // ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']
console.log(...str3); // H e l l o W o r l d

// Rest parameter


function add(...args){
    const sum=args.reduce((acc, curr) => acc + curr)
    return sum

}
console.log(add(1,2,3,4,5,6,7,8,9,10)); // 55
console.log(add(...nums3))




// ✅ 1. Parameter Example
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Vikash"); // Output: Hello, Vikash!

// ✅ 2. Default Parameter Examples
// Example 1: Single Default
function greetGuest(name = "Guest") {
  console.log("Hello, " + name + "!");
}
greetGuest();          // Output: Hello, Guest!
greetGuest("Vikash");  // Output: Hello, Vikash!

// Example 2: Multiple Defaults
function sum(a = 5, b = 10) {
  return a + b;
}
console.log(sum());       // Output: 15
console.log(sum(3));      // Output: 13
console.log(sum(3, 7));   // Output: 10

// ✅ 3. arguments Keyword Examples
// Example 1: Accessing All Arguments
function showArguments() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
showArguments("a", "b", "c");
// Output:
// a
// b
// c

// Example 2: Sum Using arguments
function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sumAll(1, 2, 3)); // Output: 6

// ✅ 4. Parameters vs Arguments
function info(name, age) {
  console.log(`${name} is ${age} years old.`);
}
info("Vikash", 24); // Output: Vikash is 24 years old.

// ✅ Bonus: Using ...rest with Parameters (Arrow Function)
const sumRest = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sumRest(1, 2, 3, 4)); // Output: 10
