 /*  Function Example
 
 let userName = 'abc';
  function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

    let message = 'Hello, ' + userName;
    alert(message);
  }

  alert( userName ); // John before the function call

  showMessage();

  alert( userName ); // Bob, the value was modified by the function */

 
 // Function with parameters

/* function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + text);
  }
  
  showMessage('Ann', 'Hello!');         // Ann: Hello! (*)
  showMessage('Ann', "What's up?");     // Ann: What's up? (**) 

  // @@
   function showMessage(from, text = anotherFunction()) {
    // anotherFunction() only executed if no text given
    // its result becomes the value of text

    alert(from + ':' + text);
  }

  showMessage('A','B'); */


/*   let age = 20;
  let checkAge = () =>  {
   
  }
    console.log (age>18) || confirm('Did your parents allow you ?');    
 */

/* let sayHi = function() {
  alert("Hello");
}

alert(sayHi); */










// Callbacks

/* function ask(question, yes, no) { // question Text of the question  yes  Function to run if the answer is “Yes”  no Function to run if the answer is “No”
   
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel); */


// Function Expression
/* 
let age = prompt("What is your age?", '');

let welcome = (age < 18) ? function() {
    alert("Hello!"); } :  function() { alert("GEt Out!"); };

welcome(); // ok now */ 