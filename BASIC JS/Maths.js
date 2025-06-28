//There are various mathematical methods in js:

console.log(Math.E)  //Euler's number
console.log(Math.PI)
console.log(Math.sqrt(25))

//There are 4 common methods to round a number to an integer:
let x = 69.6969

console.log(Math.round(x)) // returns nearest integer

console.log(Math.ceil(x)) //returns upper value 

console.log(Math.floor(x)) // lowest value

console.log(Math.trunc(x)) // it just returns the integer part


console.log(Math.abs(-6.99)) // it returns the positive value

//Math.Random: Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

console.log(Math.random());
//now if we want to get random integer from 0-9:
console.log(Math.floor(Math.random()*10))