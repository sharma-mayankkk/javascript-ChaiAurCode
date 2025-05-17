// Primitive Data types: 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
let x = BigInt("123456789012345678901234567890") // example of bigInt
let y = 23e5 // exponential from 

//"Symbol" is also a data type: example
let person = Symbol("Mayank")
let animal = Symbol("Mayank")

//here we can see both have same values but still it returns false because both creates a new symbol:
console.log(person == animal);
console.log(typeof(Symbol)) // it's type is function

let car = undefined // undefined is a data type Which means nothing
let cars; //(it is also undefined)

// *************************************************************************************************** //

//Non-primitive data types: Arrays, Object , functions 

const employees = ["Mayank Sharma","Prabhat yadav"] // arrays

let myObject = { // This is how we define object
    name: "Mayank Sharma",
    branch: "CSE-B"
}
console.log(typeof(myObject))

function printHello(){ // Function
    console.log("HELLO WORLD")
}

printHello();