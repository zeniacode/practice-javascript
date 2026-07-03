// Conditional branching:
// Conditional branching means making decisions in your program.
// like : if this is true do one thing or Otherwise, do something else.

// The "if" statement:
//  syntax : if (condition) {code runs if the condition is true
// }
// ex: 
let age = 20;
if (age >= 18) {
     console.log("You're an adult.");
}

// if .... else: 
// sometimes you want jsdo to do one thing if the condition is true and another thing if it's false.
// snytax: if (condition) {
// if true
// } else {
//     // if false
// }
// ex:
let age1 = 16;
if (age1 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// else if...:
// sometimes there are more than two option.
let marks = 85;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
// Conditional operator ‘?’ :
// this operator is the shoeter way of writing
// syntax: let result = condition ? valueTrue : valueFalse ;
let age3 = 24;
let result = age3 >= 18 ? "Adult" : "Minor" ;
console.log(result);

// "if...else" vs "?" both do the same thing but "ternary" is the shorter way.

// summary:
// if - "If this is true, do this."
// else - "Otherwise, do that."
// else if  - "If the first wasn't true, check another condition."
// ? : (ternary) - "A shortcut for a simple if...else."