// console.log('Program Started')

// // debugger

// // let i = 1
// // while(i <= 100) {
// //    console.log(i);
// //    i++
// // }

// const friends = ['Akash', 'Rahul', 'Adarsh', 'Arif', 'Gaurav', 'Anurag', 'Rakesh']

// let i = 0

// while(i < friends.length) {
//     console.log(`${i + 1}. ${friends[i]}`);
//     friends[i] += ' Procodrr'
//     i++
// }

// console.log('Program Ended')


// ✅ Basic While Loop Example: Print 1 to 5
let i = 1; // initialization
while (i <= 5) { // condition
  console.log(i); // code block
  i++; // increment
}

// 🧠 Infinite Loop Example (⚠️ Don't run this in real code)
/*
while (true) {
  console.log("This will run forever!");
}
*/

// 🔍 Use Case Example: Ask User Until They Type "yes"
// (Run in browser console only)
let userInput;
while (userInput !== "yes") {
  userInput = prompt("Type 'yes' to continue:");
}
console.log("Thank you!");
