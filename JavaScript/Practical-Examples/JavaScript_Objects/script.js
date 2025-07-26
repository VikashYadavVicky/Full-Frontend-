// const myName = 'Anurag'

// const username1 = ''
// const username2 = ''

// const user1 = {
//     firstName: 'Akash'
// }


// const user2 = {
//     firstName: 'Adarsh',
//     'last-Name': 'Singh',
//     Anurag: 'Developer'
// }        


// console.log(user2.firstName);
// console.log(user2["last-Name"]);
// console.log(user2[myName]);
// console.log(user2["first" + "Name"]);

// const user2 = {
//     firstName: 'Adarsh',
//     lastName: 'Singh',
//     pata: {
//         city: 'Bangalore',
//         pinCode: 876876,
//         state: 'Karnataka',
//         moreDetails: {
//             population: 9798897897,
//             area: '787 sq km',
//         }
//     }
// }

// user2.age = 26
// user2["is-student"] = true



// 🔹 What is an Object?
let person = {
  name: "John",
  age: 30,
  isStudent: false
};

// 🔹 Accessing Object Properties
console.log(person.name);        // Dot Notation: John
console.log(person["age"]);      // Bracket Notation: 30

let user2 = {
  firstName: "Rahul",
  lastName: "Kumar"
};
console.log(user2["first" + "Name"]); // Rahul

// 🔹 Adding & Updating Properties
person.city = "Delhi";           // Adding
person.age = 31;                 // Updating
user2["middleName"] = "Singh";   // Adding using bracket
user2.lastName = "Verma";        // Updating

// 🔹 Deleting a Property
delete person.isStudent;

// 🔹 Nested Objects
let student = {
  name: "Vikash",
  address: {
    city: "Patna",
    zip: 800001
  }
};
console.log(student.address.city); // Patna

// 🔹 Object Methods
let car = {
  brand: "Tata",
  start: function () {
    return "Car Started";
  }
};
console.log(car.start());

// Shorthand syntax
let bike = {
  brand: "Hero",
  start() {
    return "Bike Started";
  }
};
console.log(bike.start());

// 🔹 this Keyword
let user = {
  name: "Vikash",
  greet() {
    return `Hello, ${this.name}`;
  }
};
console.log(user.greet()); // Hello, Vikash

// 🔹 Check if Property Exists
console.log("name" in person);             // true
console.log(person.hasOwnProperty("age")); // true

// 🔹 Looping Through Objects
for (let key in person) {
  console.log(key, person[key]);
}

// 🔹 Object.keys, Object.values, Object.entries
console.log(Object.keys(person));    // ["name", "age", "city"]
console.log(Object.values(person));  // ["John", 31, "Delhi"]
console.log(Object.entries(person)); // [["name","John"],["age",31],["city","Delhi"]]

// 🔹 Copying Objects
let newPerson = { ...person };
let clone = Object.assign({}, person);

// 🔹 Object Destructuring
let { name, age } = person;
console.log(name); // John
console.log(age);  // 31

// 🔹 Object Freezing
Object.freeze(person);
person.age = 40;           // won't change
console.log(person.age);   // 31

// 🔹 Object Sealing
Object.seal(person);
person.age = 40;           // will work
person.gender = "Male";    // won't add
console.log(person.age);   // 40
console.log(person.gender); // undefined
