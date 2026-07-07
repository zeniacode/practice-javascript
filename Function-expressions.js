// A function expression is another way to create a function in JavaScript.
// Unlike a function declaration, where the function has its own name, a function expression stores a function inside a variable.
// ex: function declaration ;
function greet(name){
     console.log("Hello! " + "this is " + name)
}
greet("Zenia");

// ex: of finction expression
let getDrink = function(){
     return "dietcoke";
};
let drink = getDrink();
console.log("I want a " + drink);

// function value:
// A function value is the output that a function gives after you provide it with an input.
// ex:
function greet(name) {
    return "Hello " + name;
}

let message = greet("Zenia");

console.log(message);