// What is Loops: 
// Loops is a concept that help us to repat o block of code multiple times without writing it over and over.

// Types of Loops:
// 1. while loop, 2. do...while loops , 3.for loop

// 1. while Loops:
// so while loops repeats when the condition is true.
// the syntax : while(condition){
//                   ...............
// }
// ex:
let p = 1;
console.log("Starting while loop");
while(p <= 5) {
     console.log(p);
     p++;
}

// 2. do...while loops:
// so this loop run code one time at least once, and then check the condition.
// even if the condition is false, the code will run inside the code once and if its true it will run again and again.
// ex: and the syntax is : do {
//                  loop body
// } while condition;

let i = 1;
console.log("Do while loop");
do {
     console.log(i);
     i++
} while( i <= 5);

let d = 10;
do {
     console.log(d);
} while(10 < 5);

// 3. for loops:
// this loop can be used when you want to repeat something or you know how many times you want to repeat something.
// syntax: for(begin ; condition ; step){
//                         loop body....
// }
// ex:

for(let j = 1; j <= 100; j++){
     console.log(j);
}

// Breaking the loop:
// breaking the loop means it helps the loop stop immeditatly, even if the condition is true. for that we use "break" stetment.
// ex:
for(let z= 1; z <= 10; z++){
     if(z === 6){
          break;
     }
     console.log(z);
}
// the out put will be 1,2,3,4,5 and 6 will not print because
// "break" this stetment tells the loop stop before rechanging console.log(z).

// Continue to the next iteration :
// the "continue" statement tells the js Skip the rest of the code for this iteration and start the next iteration.
// It doesn't stop the loop. It just skips the remaining code for the current iteration.
// ex:
for(let a = 1; a <= 5; a++){
     if(a === 3){
          continue;
     }
     console.log(a);
}
//it tells skip 3 and continue after 3.