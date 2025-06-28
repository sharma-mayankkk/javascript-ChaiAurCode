/*Immediatly Invoked Functioin Expression: (IIFE)
An IIFE (Immediately Invoked Function Expression) is a function in JavaScript that runs as soon as it is defined.
It's used to create a private scope and avoid polluting the global scope.
*/

//Syntax

(function sayMyName(){ //it is named IIFE coz the function have some name 
    console.log(`Heisenberggg`)
})();  // we have to use to semi colon in this particular thing so it can stop:

//we can also create like this and also take parameters
((name)=>{
    console.log(`Welcom ${name} to the milkyway galaxy`)
})("Mayank")