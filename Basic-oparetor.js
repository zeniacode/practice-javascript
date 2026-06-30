// “unary”, “binary”, “operand” try to understanf the terms:

// "operand":
// an operand is a simply value that oparetor works on.
// for ex. like 
let x = 5; // here 5 is the opreand.
let y = 6;
let z = x + y; // and here + is the oparetor.
console.log(z)
// so 5 is the operand = action, and + is oparetor = thing that action is performed on.

// unary:
// an unary oparetor that works on only one operand.
// "uni" means one.
// ex:
let a = 5;
-a
console.log(-a);
let b = 6;
+b
console.log(+b)

// binary:
// binary oparetor thta works on two opreands.
// "bi" means two.
// ex:
let d = 10 + 4;
console.log(d);

let e = 20 / 5;
console.log(e);

// easy way to remeber is :
// Binary = two values. othere wise it wont work cause it needs two value.
// Unary = one value. only one value is needed.
// Operand = the value (5, 3, x).
// Operator = the action (+, -, *, /, ++).
// Unary operator = works on one value.
// Binary operator = works on two values.

// String concatenation with binary + :
// concatenation is simply means join two or more stings togathere.
// "+" this operator has two job in javascript.
// ex:adding numbers,
let x1 = 20;
let y1 = 10;
let z1 = x1 + y1;
console.log(z1);

// ex: joing two strings togathere,
let firstName = "Zenia";
let lastName = "Mukhuti";
console.log(firstName + lastName);

// now if any of opreans is string then the othere one convert into sting too.
// for ex:
let a1 = "10";
let b1 = 20;
console.log(a1 + b1);

// Numeric conversion, unary + :
// numeric conversion means changing value into a number.
// ex:
// let age = "20";
// here 20 is a string cause it inside the quotes. if we converted into a number:
// Number(age);
// convert them:
let age = "24";
let converted = Number(age);
console.log(age);

// what dose unary "+" means :
// its helps to convert the valu into a number:
// ex:
let num = "200";
console.log(+num);

// Operator precedence : 
// operator precedence means deciding which opreation javascript does first.
// basically think of it when we standing in a line, the person at the front goes first.
// operators works like that ,some have higher priority than others.
// ex:
console.log(2 + 3 * 6);
// what will happen is "*" this has the higher priority then "+" this. 
// so now js will calculate "3 * 6" first and then "18 + 2".

// Parentheses have the highest priority.
// ex:
console.log((10 + 30) * 20);
// now what happens in here "10 + 30" calculte first and "40 * 20".
// 10 + 30 = 40
// 40 * 20 = 800
// whith out parentheses:
console.log(2 + 3 * 20);
// with parentheses:
console.log((4 + 10) * 20);
// thats why parentheses is usefull - they tell javascript what to do first.

// Modify in place:
// Modify in place means changing the current value of a variable.
// Or even shorter: Modify in place = Update the existing value.
// ex: this is shorthand writing for cleaner way
let count = 10;
count+= 10;
count*= 20;
console.log(count);
// ex:
let num1 = 20;
num1 = num1 + 20;
num1 = num1 * 20;
console.log(num);

// Increment/decrement:
// Increment means incress the value by 1
// ex:
let s = 5;
s = s + 1;
console.log(s);

let score = 50;
score++; //its shorthand writen.
console.log(score);

// decrement:
// decrement means Decrease a value by 1.
// ex:
let score1 = 5;
score1--;
console.log(score1);