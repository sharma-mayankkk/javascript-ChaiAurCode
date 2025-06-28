const user = {
    username: "Mayank Sharma",
    age: 19,

    welcomeMessage: function(){
        console.log(`Heyy!! ${this.username} , welcome to my channel`) //here we used this keyword to refer the current context: 
    }
}

user.welcomeMessage()
//if we want to alter the username :
user.username = "Light Yagami"
user.welcomeMessage()

console.log(this) //if we print this in node environment it returns empty object but on browser it returns the window methods

//now if we want to declare "this" keyword in the function if can't 
function sayMyName(){
    let name = "Heisenberg"
    console.log(this.user)
}

sayMyName() // it returns undefined coz 'this' keyword cant be declared in fucntion

//-------------------------------------Arrow Functions------------------------------------------------------//

//Syntax

const add = (num1, num2) =>{   //this is explicit return
    return console.log(num1+num2)
}

add(2,9)

const multiply = (num1, num2) => (console.log(num1*num2))  //implicit return in which we don't use return key word and curly braces 

multiply(2,6)