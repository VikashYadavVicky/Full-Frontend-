
// // Destructuring
// const person={
//     name:'Vikash',
//     age:23,
//     city:'Delhi'
// }
// const {name, age, city}=person


// const {name:username, age:userage, city:usercity}=person
// console.log(username); // Vikash
// console.log(userage); // 23
// console.log(usercity); // Delhi
// console.log(name); // Vikash

// console.log(age); // 23
// console.log(city); // Delhi

// console.log(person); // { name: 'Vikash', age: 23, city: 'Delhi' }
// console.log(person.name); // Vikash

// const citys = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai']
// // const [first, second, ...rest]=citys 
// console.log(first); // Delhi
// console.log(second); // Mumbai
// console.log(rest); // [ 'Bangalore', 'Chennai' ]
// console.log(citys); // [ 'Delhi', 'Mumbai', 'Bangalore', 'Chennai' ]



// const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };

// console.log(a, b, rest); // 1 2 { c: 3, d: 4 }


// // Rest parameter with default value
// console.log(add(1,2,3,4,5,6,7,8,9,10)); // 55
// console.log("Hello Vikash How are you")
// console.log("There was a no problem in this program")





// ✅ for...of loop (Iterates values)
const fruits = ["apple", "banana", "mango"];
for (const fruit of fruits) {
  console.log(fruit); // apple, banana, mango
}

const name = "Vikash";
for (const letter of name) {
  console.log(letter); // V i k a s h
}

// 🔄 for...in loop (Iterates keys)
const user = {
  name: "Vikash",
  age: 24,
  city: "Delhi"
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
  // name: Vikash, age: 24, city: Delhi
}

// 🔍 in Keyword (Check existence)
const car = { brand: "Toyota", model: "Fortuner" };
console.log("brand" in car); // true
console.log("color" in car); // false

const numbers = [1, 2, 3];
console.log(0 in numbers); // true
console.log(5 in numbers); // false

// 📘 1. Array Destructuring
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);  // red
console.log(thirdColor);  // blue

// 🔄 Skip elements
const [, , third] = colors;
console.log(third); // blue

// ✅ Default Values in array
const [a, b, c = 'yellow'] = ['red', 'green'];
console.log(c); // yellow

// 📗 2. Object Destructuring
const person = {
  name: 'Vikash',
  age: 25,
  city: 'Delhi'
};

const { name: personName, age, city: myCity } = person;
console.log(personName); // Vikash
console.log(age);        // 25
console.log(myCity);     // Delhi

// ✅ Default in object
const { gender = 'Not specified' } = person;
console.log(gender); // Not specified

// 📙 3. Nested Object Destructuring
const student = {
  name: 'Vicky',
  marks: {
    math: 90,
    english: 85
  }
};

const {
  marks: { math, english }
} = student;

console.log(math);    // 90
console.log(english); // 85

// 📒 4. Destructuring in Function Parameters
function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
greet({ name: 'Vikash', age: 25 });

// 🔁 5. Mixed Example (Array + Object)
const users = [
  { id: 1, name: 'Vikash' },
  { id: 2, name: 'Vicky' }
];

const [{ name: firstUser }, { name: secondUser }] = users;
console.log(firstUser);  // Vikash
console.log(secondUser); // Vicky
