// Comparisons:
// in javascript, Comparisons are used to compare two value.
// all the comparison oparator is always one of these two boolean value,  which is :
// true = the comparison is correct.
// false = the comparison is not correct.

// ex: Greater then ">" and less then "<" :
console.log("Greater then value", 10 > 5);
// out put will be true because 10 is greater then 5.
console.log("Greater then value ", 3 > 7);
// out put will be false beacuse 3 is not greater then 7.

// ex: less then;
console.log("less then value", 2 < 10);

// ex: equal;
console.log("equal to: ", 10 == 10);
// "==" this means is 10 is equal to 10, and the output will be true because.

// ex: Greater then or equal "=>" and less then equal "<="
console.log("less then: ", 5 <= 10 )  // true (5 is less than 10)
console.log("equal to :", 10 <= 10)  // true (10 is equal to 10)
console.log("Greater then: ", 15 <= 10)  // false (15 is greater than 10)

// summary:
// Comparisons compare two values.
// They always return true or false.
// Common operators are >, <,  == , >= , <=.

// String comparisons :
// string comparisons are compared latter by latter.
// it means String comparing text insted of number.
// ex:
console.log(typeof String, "apple" == "apple"); // true.
console.log(typeof String,"apple" == "banana"); // false.
// because apple and apple are the same and apple and banana are the diffrent.

// Comparison of different types: 
// Sometimes JavaScript compares values of different data types, like a string and a number.
// Before comparing them, JavaScript tries to convert one value to another type. 
// ex: 
console.log("5" > 3); //out put will be true because js converst "5" astring into a number 5.
console.log("01" == 1); // output will be true cause it converets "01" to number 1 so its equal now.

// Strict equality:
// The strict equality operator (===) checks two things:
// Are the values the same?
// Are the data types the same?
// If both are the same, it returns true. Otherwise, it returns false. 
// ex:
console.log(5 === 5);
// output will be true cause value is : 5 = 5 
// type : number = number
console.log("5" === 5);
// output will be false cause "5" a string and 5 is a number.
// and the types are diffrent.