// console.log('Program Start')

// debugger
// for(let i = 0; i <= 10; i++) {
//     if(i % 2 === 0) {
//         console.log(i); 
//     }
// }

// console.log('Program Ended')
// let sum = 0
// let i = 1
// while(i<=1000){

// sum +=i
// i++

// }

// let num = 1000

// sum= (num*(num+1))/2


// ✅ Basic for loop from 1 to 3
for (let i = 1; i <= 3; i++) {
    console.log("Count:", i);
}

// 🧪 Practical Example: Iterating an array
const fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 🔄 Nested for Loop Example
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
