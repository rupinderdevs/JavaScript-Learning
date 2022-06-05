'use strict';

/* For Loop

let i;
for(i =0;i<10;i++){
    console.log(i);
} */


/* Another For loop

const cars = ["BMW", "Volvo", "a", "b"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text; */

/* let i = 0; // we have i already declared and assigned

for (;i <=3; i++) { // no need for "begin"
  console.log( i ); // 0, 1, 2
} */

/* Breaking 

let sum = 0;
while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum ); */


 // Continue
/* for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i);} */



/*  SWitch
let text;
switch (new Date().getDay()) {
  case 4:
    text = "Today is thurday";
    break;
  case 0:
    text = "Today is Sunday";
    break;

  default:
    text = "Looking forward to the Weekend";
}
console.log(text) */

/* for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}

alert('Done!'); */

/* function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  console.log( message );
}

showMessage(); // Hello, I'm JavaScript!

 console.log(message); // <-- Error! The variable is local to the function
 */

 









