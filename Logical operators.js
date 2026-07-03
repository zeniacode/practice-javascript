// Logical operator:
// Logical operator are used to combine or change the value of condition.
//there are three logical operator in javascript:
// 1. || (OR),
// 2. && (AND),
// 3. ! (NOT);

// 1. || (OR) : 
// if any of operator are true it retur true otherwise its false
// ex:
let isWeekand = false;
let isHoliday = true;
if (isWeekand || isHoliday){
     console.log("you dont have to work")
}
// anothere ex: 
console.log(10 > 5 || 2 < 8);

// 2. && (AND) :
// the and (&&) operator return "true" onlyn if both the condition is true.
// ex:
let age = 20;
let hasId = true;
console.log(age >= 18 && hasId); 
// out put will be true because age >= 18 means :20 >= 18 which is true and hasid also 
// but 
let age1 = 16;
let hasId1 = true;
console.log(age1 >= 18 && hasId1);
// the output will be false because the person is not yet 18, but has id but still out put will false.


// truth table for &&:

// | Condition 1 | Condition 2 | Result |
// | ----------- | ----------- | ------ |
// | true        | true        | true   |
// | true        | false       | true   |
// | false       | true        | true   |
// | false       | false       | false  |

// 3. !(NOT) :
// the not operator reverses the condition value.
// just like : true became false and
// false became true. and syntax is : !condition. 
// ex:
let isLoggedIn = false;
console.log(!isLoggedIn);
// anothere ex:
console.log(!(10 > 5));
// became false because its true and "!" this operator reverses the value.

