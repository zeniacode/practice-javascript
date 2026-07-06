// type of conversion is changing value one data type  to another data type.
// basically type of is aking javascript is "what kind of datais this?"
// Numeric conversion:
// Numeric conversaion means turing a value of anothere date type into a number(like truing a text to a number).
// ex:
let num = "123"; // this is a string because it inside the quotes.
let converted = Number(num);
console.log("string to number: ",num, typeof converted);

// string conversion:
// string conversaion means turing a value of anothere date type into a string.(like truing a number into a text).
// ex:
let age = 31;
let text = String(age);
console.log(text);
console.log("number to string conversion : ", age + " is a " + typeof age, "converted to " + typeof text);
// ex:
let marks = 95;
console.log("Your marks are " + marks);

// Boolean conversaion:
// Boolean conversaion means turning a value into either:
// "True" or "False".
// Boolean syntax is "Boolean(value)"

// ex: number to boolean,
console.log(Boolean(100));
console.log(Boolean(0));
console.log(Boolean(1));
console.log("-2 testing",Boolean(-2));


// so any non-zero number (like 2, -2)  will be true. 

// ex: string to boolean,
console.log(Boolean("Hello"));
console.log(Boolean(""));
console.log(Boolean("Hi! i'm Zenia"));
// so non-empty strings are true and empty strings are false.

