console.log("📘 JavaScript Type Conversion Examples");

// 🔹 Implicit Type Conversion (Type Coercion)
console.log("👉 Implicit Conversion (Type Coercion)");

// Number + String = String
let result1 = 10 + "";
console.log("10 + '' =", result1); // "10"

let result2 = 10 + "5";
console.log("10 + '5' =", result2); // "105"

// Boolean to Number
let result3 = true + 1;
console.log("true + 1 =", result3); // 2

let result4 = false + 10;
console.log("false + 10 =", result4); // 10

// String - Number = Number
let result5 = "10" - 2;
console.log("'10' - 2 =", result5); // 8

// null to Number
let result6 = null + 5;
console.log("null + 5 =", result6); // 5

// undefined to Number results in NaN
let result7 = undefined + 1;
console.log("undefined + 1 =", result7); // NaN

console.log("\n🔹 Special Cases – Coercion by Adding String");

let a = 10 + "";
let b = 10 + " apples";
let c = "5" + 5;
let d = 5 + 5 + "5";
let e = "" + true;

console.log("10 + '' =", a);           // "10"
console.log("10 + ' apples' =", b);    // "10 apples"
console.log("'5' + 5 =", c);           // "55"
console.log("5 + 5 + '5' =", d);       // "105"
console.log("'' + true =", e);         // "true"

console.log("\n🔹 Convert String to Number using + Operator");

let str1 = "100";
let num1 = +str1;
console.log("+\"100\" =", num1);        // 100

let str2 = "3.14";
let num2 = +str2;
console.log("+\"3.14\" =", num2);       // 3.14

let str3 = "abc";
let num3 = +str3;
console.log("+\"abc\" =", num3);        // NaN

let str4 = "";
let num4 = +str4;
console.log("+\"\" =", num4);           // 0

console.log("\n🔹 Explicit Type Conversion (Type Casting)");

// ✅ String Conversion
console.log("String(123) =", String(123));         // "123"
console.log("String(true) =", String(true));       // "true"
console.log("String(null) =", String(null));       // "null"

let num = 100;
let str = num.toString();
console.log("num.toString() =", str);              // "100"

// ✅ Number Conversion
console.log("Number(\"123\") =", Number("123"));   // 123
console.log("Number(true) =", Number(true));       // 1
console.log("Number(false) =", Number(false));     // 0
console.log("Number(\"abc\") =", Number("abc"));   // NaN
console.log("parseInt(\"42\") =", parseInt("42")); // 42
console.log("parseFloat(\"3.14\") =", parseFloat("3.14")); // 3.14

// ✅ Boolean Conversion
console.log("Boolean(0) =", Boolean(0));           // false
console.log("Boolean(1) =", Boolean(1));           // true
console.log("Boolean('') =", Boolean(""));         // false
console.log("Boolean('hello') =", Boolean("hello")); // true
console.log("Boolean(null) =", Boolean(null));     // false

console.log("\n📊 Summary Table");
console.log("10 + '' =", 10 + "");                   // "10"
console.log("true + 1 =", true + 1);                 // 2
console.log("'5' - 2 =", "5" - 2);                   // 3
console.log("'10 apples' - 5 =", "10 apples" - 5);   // NaN
console.log("String(123) =", String(123));          // "123"
console.log("Number('abc') =", Number("abc"));      // NaN
console.log("Boolean('') =", Boolean(""));          // false
console.log("+'100' =", +"100");                    // 100
console.log("+'abc' =", +"abc");                    // NaN
console.log("+'' =", +"");                          // 0

console.log("\n🧠 typeof vs instanceof vs constructor");

// typeof
console.log("typeof 123 =", typeof 123);            // number
console.log("typeof 'abc' =", typeof "abc");        // string
console.log("typeof true =", typeof true);          // boolean
console.log("typeof null =", typeof null);          // object (quirk)
console.log("typeof undefined =", typeof undefined); // undefined

// instanceof
console.log("[] instanceof Array =", [] instanceof Array);           // true
console.log("{} instanceof Object =", {} instanceof Object);         // true
console.log("new Date() instanceof Date =", new Date() instanceof Date); // true

// constructor
console.log("'hello'.constructor =", "hello".constructor);          // String()
console.log("(123).constructor =", (123).constructor);              // Number()
console.log("(true).constructor =", (true).constructor);            // Boolean()

console.log("\n⚠️ Common Pitfalls");
console.log("Number(' ') =", Number(" "));          // 0
console.log("Number(null) =", Number(null));        // 0
console.log("Number(undefined) =", Number(undefined)); // NaN
console.log("true + true =", true + true);          // 2
console.log("false + true =", false + true);        // 1
console.log("'10' + 1 =", "10" + 1);                 // "101"
console.log("'10' - 1 =", "10" - 1);                 // 9
console.log("+'100' =", +"100");                    // 100
