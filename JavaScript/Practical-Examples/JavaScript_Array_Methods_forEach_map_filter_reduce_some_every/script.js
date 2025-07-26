// const months = ['January', 'February', 'March', 'April', 'May', 'December']

// // const capitalMonths = months.forEach((month, index) => {
// //     console.log(index + 1, month)
// //     return month.toUpperCase()
// //   })

// const capitalMonths = months.map((month, index, array) => {
//     // console.log(index + 1, month)
//     // console.log(array);
//     return month.toUpperCase()
//   })

// // const filteredMonths = months.filter((month, index, array) => {
// //     console.log(month.toLocaleLowerCase().includes('m'))
// //     // console.log(array);
// //     return month.toLocaleLowerCase().includes('m')
// //   })

// const filteredMonths = months.filter((month, index, array) => {
//     // console.log(month.toLocaleLowerCase().includes('m'))
//     // console.log(array);
//     return false
//   })

// const students = [
//     {
//         name: 'Akash',
//         age: 21,
//     },
//     {
//         name: 'Adarsh',
//         age: 17,
//     },
//     {
//         name: 'Amir',
//         age: 18,
//     },
//     {
//         name: 'Raman',
//         age: 23,
//     },
//     {
//         name: 'Nidhi',
//         age: 16,
//     },
// ]

// const adultStudents = students.filter((student) => {
//     return student.age >= 18
// }).map((student) => {
//     return student.name
// }).filter((student) => {
//     return student.includes('A')
// })


// const students = ['Vikash', 'Amit', 'Ravi', 'Ajay', 'Vikram']

// const studentFilter= students.filter((student) => {
//     return student.includes('A')
// })

// console.log(studentFilter);

// const studentMap = students.map((student) => {
//     return student.includes('A')
    
// })

// console.log(studentMap);

// const studentForEach = students.forEach((student) => {
//     console.log(student);
//     return student.includes('A')
// })
// console.log(studentForEach);

// const studentReduce = students.reduce((acc, student) => {
//     return acc + student.includes('A')
// }, 0)
// console.log(studentReduce);

// const nums = [1, 2, 3, 4, 5]

// const sum = nums.reduce((accumulator, current, i) => {
//     // console.log(i, current);
//     // console.log(accumulator);
//     return accumulator * current
// }, 0)

// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const countFruits = (arr) => {
//   const result = {};
  
//   arr.forEach(fruit => {
//     result[fruit] = (result[fruit] || 0) + 1;
//   });
  
//   return result;
// };

// const output = countFruits(fruits);
// console.log(output);


// 🔄 forEach()
const items = ['pen', 'pencil', 'eraser'];
items.forEach(item => console.log(item)); // logs each item

const result1 = items.forEach(item => item.toUpperCase());
console.log(result1); // undefined

const numbers = [1, 2, 3];
let doubled = [];
numbers.forEach(num => doubled.push(num * 2));
console.log(doubled); // [2, 4, 6]

// 🔁 map()
const nums = [1, 2, 3];
const mapped1 = nums.map(n => n * 2);
console.log(mapped1); // [2, 4, 6]

const names = ['alice', 'bob'];
const upper = names.map(name => name.toUpperCase());
console.log(upper); // ['ALICE', 'BOB']

const values1 = [10, 20, 30];
const labelValues = values1.map(v => 'Value: ' + v);
console.log(labelValues); // ['Value: 10', 'Value: 20', 'Value: 30']

// 🔍 filter()
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2]

const fruits = ['apple', 'kiwi', 'banana'];
const long = fruits.filter(fruit => fruit.length > 4);
console.log(long); // ['apple', 'banana']

const mixed = [0, 1, false, 2, '', 3];
const truthy = mixed.filter(Boolean);
console.log(truthy); // [1, 2, 3]

// 🔗 reduce()
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6

const chars = ['a', 'b', 'a', 'c', 'b', 'a'];
const count = chars.reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});
console.log(count); // { a: 3, b: 2, c: 1 }

const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // [1, 2, 3, 4, 5]

const values2 = [5, 12, 8, 20];
const max = values2.reduce((acc, curr) => (curr > acc ? curr : acc), 0);
console.log(max); // 20

// ✅ some()
const someNumbers = [1, 3, 5, 8];
console.log(someNumbers.some(num => num % 2 === 0)); // true

console.log(fruits.some(fruit => fruit.length > 5)); // true

const values3 = [2, -3, 7, 0];
console.log(values3.some(n => n < 0)); // true

const users1 = [
  { name: 'Vikash', active: false },
  { name: 'Yadav', active: true }
];
console.log(users1.some(user => user.active)); // true

console.log([].some(x => x > 0)); // false

// ✅ every()
const nums2 = [1, 5, 8];
console.log(nums2.every(n => n > 0)); // true

const values4 = ['a', 'b', 'c'];
console.log(values4.every(v => typeof v === 'string')); // true

const users2 = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: true }
];
console.log(users2.every(user => user.active)); // true

const scores = [90, 80, 45, 70];
console.log(scores.every(score => score >= 50)); // false

console.log([].every(() => false)); // true

// 🔁 Comparison Table Summary (in comments)
/*
Method     | Purpose                       | Returns     | Stops On       | Use Case
-----------|-------------------------------|-------------|----------------|----------------------------
forEach()  | Perform side-effects          | undefined   | N/A            | Logging, side effects
map()      | Transform elements            | New Array   | N/A            | Transform data
filter()   | Select elements conditionally | New Array   | N/A            | Conditional selection
reduce()   | Combine into one value        | One Value   | Full traversal | Sum, max, flatten, etc.
some()     | At least one true             | Boolean     | First true     | Check presence
every()    | All must be true              | Boolean     | First false    | Validate all items
*/
