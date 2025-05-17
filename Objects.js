// //Object Declaration:

// //Singleton:
// // Object.create //constructor method

// //Object literals 

// //to add symbol in js:
// const userId2 = Symbol("userid")
// const JscriptUser = {
//     name: "Mayank Sharma",
//     userId: "sharma.mayankkk",
//     [userId2]: "mayank.sharmaaa", // to declare symbol in an object
//     email: "for.mayanksharma@gamail.com",
//     isLoggedIn: false,
//     activeDays: ["Monday", "Wednesday", "Friday", "Sunday"]
// }

// console.log(JscriptUser.email) //to access the key pair value of object

// console.log(JscriptUser["activeDays"]) // this the best way to access any value from object.

// console.log(JscriptUser[userId2]) // to access symbol form an object

// //console.log(JscriptUser)

// //we can also change the value of any key in an object 
// JscriptUser.isLoggedIn = true
// console.log(JscriptUser["isLoggedIn"])

// //if we want to not to change any value of the object we can use freeze;
// // Object.freeze(JscriptUser)


// //To declare a function in an object:
// JscriptUser.welcomeMessage = function(){
//     console.log(`Hello Mr.${this.name}`)
// }
// console.log(JscriptUser.welcomeMessage())


//********************************************/

// const tinderUser = new Object()// syntax to declare the object
const tinderUser = {}

tinderUser.userId = "sharma4723"
tinderUser.name = "Mayank Sharma"
tinderUser.age = 19
tinderUser.isLoggedIn = false

console.log(tinderUser)


//we can create nested objects as well
const instagram = {
    userId: "sharma.mayankkk",
    personalDetails: {
        userFullName: {
            firstName: "Mayank",
            middleName: "Kumar",
            lastName: "Sharma"
        }
    }
}

// console.log(instagram.personalDetails.userFullName)

//Combine two objects:
const obj1 = {1:"Mayank", 2:"Prabhat"}
const obj2 = {3:"Koushal",4:"Kunal"}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3) // this is one of the syntax to combine.

const obj3 = {...obj1,...obj2} //we can also do like this
console.log(obj3)


//now if we want to access only key or only values of an object we can do it like:
let keys = Object.keys(tinderUser)
console.log(keys)
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) //returns array of arrays which hold each key-value pair

//now if we want to check any property exist in an object or not:
console.log(tinderUser.hasOwnProperty("isLoggedIn")) 

//__________________________________________________________________________________________________________//

//Object de-structure and JSON API intro:

const course = {
    courseName: "Chai aur JavaScript",
    price: "Free",
    courseINstructor: "Hitesh Choudhary"
}

const {courseINstructor: teacher} = course //now we can access the courseIstructor from the object without calling it by using object and we can also change the key with short name

console.log(teacher)



