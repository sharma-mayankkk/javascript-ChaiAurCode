//Syntax:

function sum(num1, num2) {
    return num1 + num2
}

console.log(sum(1, 9))

function loginMessage(username) {
    if (username === undefined) {
        console.log("Plese enter username")
    } else {
        return `${username} just logged in...`
    }

}
console.log(loginMessage()) //if we doesn't pass any arguement in the function it will simply return undefined so we can put if else in function


//we can also pass multiple values in a function by using Rest aka spread operator(naming depends on the usecases)

function calculateCartPrice(...number){
    return number
}

console.log(calculateCartPrice(200,500,300,169)) //it will simply return the arrays of the arguements

//Now how to pass objects as parameter in function:

const user = {
    username: "Mayank Sharma",
    age: 19
}

function handleObject(anyobject){
    console.log(`Hello ${anyobject.username} and your age is ${anyobject.age}`)
}
// handleObject(user)

//we can also create an object in arguement:
handleObject({
    username: "Thor",
    age: 69000
})

//pass array as a parameter

const arr = [100,200,300,50]

function returnSecondIndex(getArr){
    return getArr[2] //always use variable which is used as parameter.
}

console.log(returnSecondIndex(arr))