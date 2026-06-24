// data types in javascript means what type of data is stored.
// think od variable is box and data types tell us whatts inside the box.
// There are eight basic data types in JavaScript.

// 1. Number:
// numbers can be a whole number or it can be decimals.
let age1 = 24;
let price = 89.99;
// so here 24, and 89.99 are numbers.

// 2. BigInt:
// normaly javascript use Numbers type for number.
// ex:
let num = 123;
// so javscript can handle numbers up to some extenend.
// but when we need larger number then that , we use BigInt.
//  to create BigInt we add "n" at the end of the number.
// ex:
let bignumber = 123456789012345678901234567890n;

// 3. String:
// Basically string is a text that written inside quote.
// ex:
let massage = "hello!";
let userName = "i'm Zenia";
// so here "hello" and "zenia" are strings.

let name3 = "John";

console.log("My name is name3")

// embed a variable
console.log( `Hello, ${name3}` ); // Hello, John!

// embed an expression
console.log( `the result is ${1 + 2}` ); // the result is 3



// 4. Boolen:
// Boolen have only two values:
// true and false.
// ex:
let nameFiledChecked = true;
let ageFiledchecked = false;
// think of it as yes or no, on and off.

// 5. Null:
// null means "nothing".
let name1 = "null";
// this telling javascript that this variable has no value currently.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// 6. undefined:
// Udefined means "A value has not been given yet".
let x1;
// if a variable declared and not assinged then the value is undefined.
// if we do this 
let x;
console.log(x);
// the output will be undefined.

// undefined vs Null:
let phoneNumber1;
// it means that varilable is created but the value is not given.
let phoneNumber = "null";
// it means that variable is created but value is not given Intentionally.

// 7. Objects and Symbols:
// An object is a way to store multiple pieces of information together.
// ex: without object,
let name = "Zenia";
let age = 24;
let city = "siliguri";
console.log(age)
// we have 3 separete variables.

// ex: with object,
let information = {
     name : "Zenia",
     age : 24,
     city : "siliguri",
}
console.log(information)
// now all the information is stored in on object.
// in simple word we can think object as a folder were we can put things togathere.

// The typeof operator:
// typeof operator is used to find out the data type of variable or data.

console.log(typeof 3)
console.log(typeof information)
console.log(typeof "information")

