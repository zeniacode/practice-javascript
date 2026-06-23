// Statements are commands that we give to computer to perform some action.
// this is a statement where we are telling computer to print the text written inside "".
console.log("code structure");

// There may be so many statements in a given program.
// Statements can be separated with a semicolon.
// Below two statements are separate by semicolon
console.log("first statement"); console.log("second statement")

// two statements can be separated just by a new line instead of giving semicolon (but it may not work for some cases)
console.log("first statement")
console.log("second statement")

// Below new line separation won't work:  
// JavaScript does not assume a semicolon before square brackets [...]. 
// So, the code in the last example is treated as a single statement.
// Thats why it is recommended to always give ;
console.log("Hello");
[1, 2].forEach((t)=>console.log('values', t))

// Lets learn commemnts:
//-------------------------

// Single line comment can be given by two slaces //
// I am a single line comment

// Multi line comments can be given by /* comments here */
/* I am 
multiline comment */

// Start : Do not declare same variable nultiple times

// let message = "This";

// repeated 'let' leads to an error
// let message = "That"; // SyntaxError: 'message' has already been declared


// End: Do not declare same variable nultiple times
