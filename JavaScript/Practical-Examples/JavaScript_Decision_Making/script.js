// Only if for decision making in JavaScript
const username = prompt('Please Enter Your Name.');
const userAge = parseInt(prompt('Please Enter Your Age.'));

debugger
console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);

if (userAge >= 0 && userAge <= 4) {
    console.log(`${username} is a kid.`);
    console.log('And he/she is playing.');
}

if (userAge >= 5 && userAge <= 17) {
    console.log(`${username} is a school student.`);
    console.log('And he/she is learning science and maths.');
}

if (userAge >= 18 && userAge <= 24) {
    console.log(`${username} is a college student.`);
    console.log('And he/she is learning computer science.');
}

if (userAge >= 25 && userAge <= 45) {
    console.log(`${username} is a working professional.`);
    console.log('And he/she is a web developer.');
}

if (userAge > 45) {
    console.log(`${username} is retired.`);
    console.log('And he/she reads newspaper.');
}

console.log('Program Ended!!');

// else if example

// if (userAge >= 0 && userAge <= 4) {
//     console.log(`${username} is a kid.`);
//     console.log('And he/she is playing.');
// } else if (userAge >= 5 && userAge <= 17) {
//     console.log(`${username} is a school student.`);
//     console.log('And he/she is learning science and maths.');
// } else if (userAge >= 18 && userAge <= 24) {
//     console.log(`${username} is a college student.`);
//     console.log('And he/she is learning computer science.');
// } else if (userAge >= 25 && userAge <= 45) {
//     console.log(`${username} is a working professional.`);
//     console.log('And he/she is a web developer.');
// } else if (userAge > 45 && userAge < 121) {
//     console.log(`${username} is retired.`);
//     console.log('And he/she reads newspaper.');
// } else if (userAge >= 121) {
//     console.log(`${username} is immortal.`);
//     console.log('And he/she reads newspaper.');
// } else {
//     console.log('Please Enter a Valid Age');
// }


// Switch case example
// const username = 'Anurag'
// const userAge = 24

// if (dayNumber === 0) {
//   console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//   console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//   console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//   console.log('It is Saturday Today')
// } else {
//   console.log('Please Enter a Valid Day Number')
// }

// const dayNumber = 14

// switch (dayNumber) {
//   case 0:
//     console.log('It is Sunday Today')
//     break
//   case 1:
//     console.log('It is Monday Today')
//     break
//   case 2:
//     console.log('It is Tuesday Today')
//     break
//   case 3:
//     console.log('It is Wednesday Today')
//     break
//   case 4:
//     console.log('It is Thursday Today')
//     break
//   case 5:
//     console.log('It is Friday Today')
//     break
//   case 6:
//     console.log('It is Saturday Today')
//     break
//   default:
//     console.log('Please Enter a Valid Day Number')
// }

// debugger

// switch(true) {
//     case userAge >= 0 && userAge <= 4:
//         console.log(`${username} is a kid.`)
//         break
//     case (userAge >= 5 && userAge <= 17):
//         console.log(`${username} is a school student.`)
//         break
//     case (userAge >= 18 && userAge <= 24):
//         console.log(`${username} is a college student.`)
//         break
//     case true:
//         console.log(`${username} is a working professional.`)
//         break
//     case (userAge > 45 && userAge < 121):
//         console.log(`${username} is retired.`)
//         break
//     default:
//         console.log('Please Enter a Valid Age');
// }

// if (userAge >= 0 && userAge <= 4) {
//     console.log(`${username} is a kid.`);
//     console.log('And he/she is playing.');
// } else if (userAge >= 5 && userAge <= 17) {
//     console.log(`${username} is a school student.`);
//     console.log('And he/she is learning science and maths.');
// } else if (userAge >= 18 && userAge <= 24) {
//     console.log(`${username} is a college student.`);
//     console.log('And he/she is learning computer science.');
// } else if (userAge >= 25 && userAge <= 45) {
//     console.log(`${username} is a working professional.`);
//     console.log('And he/she is a web developer.');
// } else if (userAge > 45 && userAge < 121) {
//     console.log(`${username} is retired.`);
//     console.log('And he/she reads newspaper.');
// } else if (userAge >= 121) {
//     console.log(`${username} is immortal.`);
//     console.log('And he/she reads newspaper.');
// } else {
//     console.log('Please Enter a Valid Age');
// }

// const grade = 'A'

// debugger
// switch (grade.toLocaleLowerCase()) {
//   case 'a':
//     console.log('Your score is between 85% to 100%.')
//     break
//   case 1:
//     console.log('Your score is between 75% to 85%')
//     break
//   case 'c':
//     console.log('Your score is between 60% to 75%')
//     break
//   case false:
//     console.log('Your score is between 50% to 60%')
//     break
//   case 'e':
//     console.log('Your score is between 30% to 50%')
//     break
//   default:
//     console.log('Sorry, you failed.')
// }

// console.log('Program Ended!')


let favColor=prompt("Enter the color name")

switch(favColor.toLocaleLowerCase()){
    case "red":
        console.log("Red is a passionate color!")
        break
    case "green":
        console.log("Green symbolizes nature and growth")
        break
    case "blue":
        console.log("Blue is calming and serene")
        break
    case "yellow":
        console.log("The color is yellow")
        break
    default:
        console.log(`${favColor} + “ is also my favorite color!`)
}


// Extra 
// 🔹 1. if Statement
let age = 18;
if (age >= 18) {
  console.log("You're eligible to vote.");
}

// 🔹 Nested if
let age2 = 65;
if (age2 >= 18) {
  console.log("Adult");
  if (age2 >= 65) {
    console.log("Senior citizen");
  }
}

// 🔹 2. if...else Statement
let age3 = 16;
if (age3 >= 18) {
  console.log("You're eligible to vote.");
} else {
  console.log("You're not eligible to vote.");
}

// 🔹 Nested if...else
let age4 = 14;
if (age4 >= 18) {
  console.log("Eligible to vote");
} else {
  if (age4 >= 13) {
    console.log("Teenager but not eligible to vote");
  } else {
    console.log("Child");
  }
}

// 🔹 3. if...else if...else Statement
let score = 75;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// 🔹 Nested else if
let score2 = 92;
if (score2 >= 90) {
  console.log("Grade A");
  if (score2 > 95) {
    console.log("Excellent performance!");
  }
} else if (score2 >= 75) {
  console.log("Grade B");
} else {
  console.log("Keep improving");
}

// 🔹 4. switch Statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Midweek day");
}

// 🔹 Nested switch
let today = "Monday";
switch (today) {
  case "Monday":
    console.log("Start of the week");
    let mood = "tired";
    switch (mood) {
      case "happy":
        console.log("Great energy!");
        break;
      case "tired":
        console.log("Get some rest!");
        break;
    }
    break;
  default:
    console.log("Another day");
}

// 🔹 5. Ternary Operator
let age5 = 20;
let result = (age5 >= 18) ? "Adult" : "Minor";
console.log(result);

// 🔹 Nested Ternary
let age6 = 66;
let category = (age6 >= 18)
  ? (age6 >= 65 ? "Senior" : "Adult")
  : "Minor";
console.log(category);
