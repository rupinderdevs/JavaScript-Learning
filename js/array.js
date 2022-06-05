"use strict";

// A word about “length”
/* let fruits = [];
fruits[1] = "Apple";

console.log( fruits.length ); //2 */


/* let arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
console.log( arr ); // [1, 2]

arr.length = 5; // return length back
console.log( arr[3] ); // undefined: the values do not return */

// new Array() // rarely used

/* let arr = new Array("A", "B", "C");


console.log(arr.length);
// console.log(arr.push("D","E"));
// console.log(arr.shift()) 
// console.log(arr.unshift()) 

console.log(arr); */

// Multidimensional arrays - Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:

/* let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log( matrix [1][1]); // 5, the central element

  console.log( matrix [2][0]); // as per matrix */

  // toString

/*   let arr = [1, 2, 3];

  console.log(arr);
  console.log(String(arr)==='1,2,3'); */


/*   console.log ( [] + 1 ); // "1"
  console.log( [1] + 1 ); // "11"
  console.log( [1,2] + 1 ); // "1,21" */


  // Tasks - Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

/*   let styles = ["A", "B"];
styles.push("C");
styles[Math.floor((styles.length - 1) / 2)] = "Add";
console.log(styles.shift() );
styles.unshift("0", "1");

console.log(styles) */


/* 
Q? Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items. */

/*  solution 

let sumInput = () => {

    let numbers = [];
    
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      // should we cancel?
      if (value === "" || value === null) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  console.log( sumInput() );
 */


