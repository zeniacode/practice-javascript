// the switch stetment :
// this stetment "switch" is way to exucute multiple block of code on basis od valu and variable.
// ex:
let fruit = "apple";
switch (fruit) {
  case "apple":
      console.log("current fruit is apple")
    break;

  case "banana" :
      console.log("current fruit is banana")
    break;

  case "orange":
     console.log("current fruit is orange")
    break;

  default:
     console.log("current fruit is berry")
}
     

// Grouping of “case” :
// Grouped cases allow multiple values to execute the same code block in a switch statement.
// ex:
let day = "Saturday";
switch(day){
     case "Saturday":
     case "Sunday":
          console.log("Weekend");
          break;
     
     default:
          console.log("weekday");

}

// when use switch:
// when we're comparing one variable against many values.

// Quick summary :

// switch = checks one expression against multiple values.
// case = defines a value to compare against.
// break = stops execution after a matching case.
// default = runs if no case matches