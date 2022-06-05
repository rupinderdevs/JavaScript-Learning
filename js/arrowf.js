"use strict";

/* let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};

alert( sum(1, 2) );  3 */


// Callacks using arrow functions

/* let ask = (question, yes, no) => { // question Text of the question  yes  Function to run if the answer is “Yes”  no Function to run if the answer is “No”
   
    if (confirm(question)) yes()
    else no();
  }
  
  let showOk= () => {
    alert( "You agreed." ); 
  }
  
  let showCancel = () => {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel); */


/*   let float = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert( float(3.66) ); // 6 */

// Multiline arrow functions
/* 
let sum = (a, b, c) => {  // the curly brace opens a multiline function
    let result = a + b + c;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  console.log( sum(1, 2, 5) ); // 3 */

