// // const username1 = 'Anurag'
// // let username2 = username1
// // username2 = username2 + ' Singh'

// const fruits = ['Mango', 'Apple', 'Orange']

// // const myFruits = fruits

// // myFruits.push('Dates')
// // myFruits.push('Grapes')

// // Object.assign(myFruits, fruits)
// const myFruits = [...fruits]

// // const myFruits = [].concat(fruits)
// // const myFruits = fruits.slice()

// const user1 = {
//   firstName: 'Anurag',
//   lastName: 'Singh',
//   pata: {
//     city: 'Delhi',
//     pincode: 989888,
//   },
//   subject: ['Physics', 'CS', 'Maths']
// }

// // Shallow Copy

// // const user2 = {}
// // Object.assign(user2, user1)
// const user2 = { ...user1 }




// ✅ Original object
let original = {
  name: "Vikash",
  address: {
    city: "Delhi",
    zip: 110001
  }
};

// ===============================
// 🔹 Shallow Copy using spread operator
let shallowCopy = { ...original };

// Changing top-level property
shallowCopy.name = "Amit"; // Only shallowCopy is affected

// Changing nested property
shallowCopy.address.city = "Mumbai"; // Affects both shallowCopy and original!

console.log("Original (after shallow):", original);
// Output: { name: 'Vikash', address: { city: 'Mumbai', zip: 110001 } }
console.log("Shallow Copy:", shallowCopy);
// Output: { name: 'Amit', address: { city: 'Mumbai', zip: 110001 } }

// ===============================
// 🔹 Deep Copy using JSON methods
let original2 = {
  name: "Vikash",
  address: {
    city: "Delhi",
    zip: 110001
  }
};

let deepCopy = JSON.parse(JSON.stringify(original2));

// Changing nested property
deepCopy.address.city = "Kolkata";

console.log("Original (after deep):", original2);
// Output: { name: 'Vikash', address: { city: 'Delhi', zip: 110001 } }
console.log("Deep Copy:", deepCopy);
// Output: { name: 'Vikash', address: { city: 'Kolkata', zip: 110001 } }

// ===============================
// ✅ Deep Copy using structuredClone (modern browsers)
let deepCopy2 = structuredClone(original2);
deepCopy2.address.zip = 560001;

console.log("Original (structuredClone):", original2);
// Output: { name: 'Vikash', address: { city: 'Delhi', zip: 110001 } }
console.log("Structured Clone Deep Copy:", deepCopy2);
// Output: { name: 'Vikash', address: { city: 'Delhi', zip: 560001 } }
