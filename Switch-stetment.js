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

let day = "saturday";
switch(day) {
     case "firday" :
          console.log("today is firday")
          break
     case "monday" :
          console.log("today is monday")  
          break
     case "saturday" :
          console.log("today is saturday")
          break
     default :
     console.log("today is sunday")
     break             
}
// when use switch:
// when we're comparing one variable against many values.

// Quick summary :

// switch checks one expression against multiple values.
// case defines a value to compare against.
// break stops execution after a matching case.
// default runs if no case matches