// Write 4 javascript functions for add, subract, multiply, division which will take two params as input
//  and will return the result according to the function requiremewnts.
// Call each function to show that they are able to give result as basic calculator should do.
// For example if addition function is called the result returned should be corect.

function add(firstNum, SecondNum) {
     return firstNum + SecondNum ;

}
function sub(firstNum, SecondNum) {
     return firstNum - SecondNum;
                 
}
function multiply(firstName, SecondNum) {
     return firstName * SecondNum;
}
function division(firstNum, SecondNum) {
     if(SecondNum === 0){
           console.log("dont give 0 number to second number")
           return;
     }
     return firstNum / SecondNum;
}
let addResult = add(30, 80);
console.log("add result :", addResult);

let subResult = sub(-90, -50);
console.log("sub result : ", subResult);

let multiplyResult = multiply(80, 90);
console.log("multiply result : ", multiplyResult);

let divisionResul = division(60, 10);
console.log("division result : ", divisionResul);



// exam result calculeter :

function examResult(History, Math, English, Science){
     return History + Math + English + Science;
}

let totalMarks = examResult(90, 60 , 80 , 70);
console.log("Total Marks : ", totalMarks);


// drink order :
orderDrink(12);

function orderDrink(quantity){

     let perPrice = 40;
     let total = quantity * 40;
     let discount = 0 ;

     if(quantity >= 10);{
          discount = 50;
     }
     
     let totalPrice = total - discount;

console.log("-----Diet coke bill----\n");
// console.log();
console.log("Per Can Price : ", perPrice);
console.log("Quantity : ", quantity);
console.log("Total : " , total);
console.log("Discount : " , discount);
console.log("Total Price : " , totalPrice);
console.log("Thanks For Buying Diet Coke");
}


console.log("greeting card");

// greeting card:

function greetingCard(name, quantity) {

     let pricePerCan = 40;
     let total = quantity * pricePerCan;


console.log("****************************");
console.log("     Diet Coke Store         ");
console.log("****************************");
console.log("Hello," + name , "!");
console.log("Thank you for buying diet coke");
console.log();
console.log("Price Per Can : ", pricePerCan);
console.log("Total : ", total);
console.log();
console.log("Have a refreshing day");
console.log("******************************");


}
greetingCard("Zenia", 12);


