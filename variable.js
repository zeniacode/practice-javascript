// variable is a container used to store data.
// value can change anytime.
// to create variable we use let keyword in javascript.
// let.

let message;
// let is a variable and massage is the variable name.
// so simply creates a variable named massage but dosen't have any value yet.

let massage1;
massage1 = "hello!";
// so this means it created a box or container named massage and the value of the box is hello.

// we can also create variable declaration in single line.
let massage2 = "hello!";

// we can also declare multiple variables in one single line.
let massage3 = "hello!", user = "Zenia", age = "24";
// but its not recommended for the sake of better readablity.
// so its better to use it for easy readablity.
let massage4 = "hello!";
let user1 = "Zenia";
let age1 = "24";

// Constants.
// constant is a value that never change after it's created.
const myBirthday = "16.07.2002";
// why we used const, when we know that the value inside the box will never change.
// in let variable we can change the value latter also,
// but in const we cant change the value, if we change it it will cause an error.
// for expamle:
const userName = "Zenia"; 
// name wont change.
let age2 = "24";
// can change it latter.

// so a const is simple variable whose value never change or cannot change after its created.

let name, admin
name = "john";
admin = name; // this means to tell comp to copy name value to admin var.
console.log(admin,name);
