// what is function:
// function is the program that helps to perform a specipic task.
// snytax : 
// function greet()// this is parameters that pass the data to perform
//  {
//      console.log("Hello!");
// }

// ex:
function greet(name){
     console.log("hello , " + name + "!");
}
greet("Zenia");
greet("Jasmine");


// Local and Outer variable :
// local variable , that is created inside the function. it only can be used inside the function.
function showMassage(){
     let massage = "Hi!";
     console.log("Greet :" , massage);
}
showMassage();

// outer variable, which is declare outside the function. 
let color = "Pink";
function showColor(){
     console.log("color : " + color);
}
showColor()

// default value:
// A default value is a value that JavaScript automatically uses if you don't provide an argument when calling a function.
// ex:
function introduction(name , age = 24){
     console.log(name + " is " + age + " years old");
}
introduction("Zenia");
// so here 24 is a default value, since age is not called so it use the default value.


// function can return result by using "retrun" stetment
function add(a , b){
     return a + b;
}
let result = add(5 , 3);
console.log("Result :" , result);

function getDrink(){
     return "dietCoke";
}
let drink = getDrink();
console.log("i want a " + drink);
