'use strict';

// Literals and properties

/* let user = {     // an object
    name: "Rupinder Singh",  // by key "name" store value "John"
    age: 21,  // by key "age" store value 30
    "hello h":true

  };

  console.log(user.name + user.age); 
  console.log(delete user.age); // this will delete user's age
  console.log(user.age);  // undefined */
  
  // Objects Examples
  /* 
  let user = {
    name: "John",
    age: 21
  };
  
  let key = "name";
   // key = "age";
  
  // access by variable
  console.log( user[key] ); // John (if enter "name")
 */


  // Computed Properties
/*   
  let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert(bag.fruit); // 5 if fruit="apple"
 */

// Property value shorthand

/*  let makeUser = (name,age) =>{
     return{
         name:name,
         age: age
     };
 }

 let user = makeUser("abc", 21);
 console.log(user.name); */


 // Objects examples
 /* let a = {
     fname:"abc",
     lname: "xyz",
     age: 22,
     email: "abc@gmail.com",
     names: ['ab','bc','cd'], // array inside object
     fullName: () => {      
         return a.fname + ' ' + a.lname + ' ' + a.age;

     }

    };
    
  console.log(a.names[2]);
 console.log(a.age);
 console.log(a); 
 console.log(a.fullName());
 */

 //The “for…in” loop // this shows property name and its value
 
/*  let user = {
    name: "Nick",
    lname: "Jons",
    age: 30,
    isAdmin: true
  };
 // user.name="JJ";   // name changed
 // delete user.name; // name deleted

  for (let key in user) { // key is not a keyword its a userdefined
    // keys
    console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log( user[key] ); // John, 30, true
  }

   */
  // for..of not work in Objects


// here is an example of for..of
/* let array = ['a', 'b', 'c'];
for(let element of array)
{
    console.log(element);
}
 */

// Example

/* let salary ={
  a: 500,
  b: 600,
  c: 700
};

let sum = 0;
for(let key in salary){
  sum += salary[key];
}

console.log("Sum of a,b,c is" + " " + sum);
 */


// Function for multiplying object



