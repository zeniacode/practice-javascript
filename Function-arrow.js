// Arrow functions are a shorter way to write functions.
// ex:
// let greet = function(){
//      console.log("hello");
// };   this is the normal function 

let greet = (name) => {
    console.log("hello! " + "this is " + name);
};
greet("Jasmine");

// => this is arrow, They do the same job as regular functions, but with a cleaner syntax.

// multiline arrow function:
//  is an arrow function whose body has more than one statement. Because there are multiple lines.
let getDrink = () => {
    console.log("I want a dietcoke");
    console.log("Can you pour it on the glass with some ice");
    console.log("I like my dietcoke chilled");
}
getDrink();

