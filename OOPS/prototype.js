let supes = ["Thor", "Dr.Strange", "Thanos"];

let superPowers = {
    thor: "Hammer",
    strange: "Magic",
    thanos: "Infinty Stones",

    getThorPower: function(){
        console.log(`Thor's power is ${this.thor}`);
    }
}

// here we will create a function that we will add in object so we can access in array or object

Object.prototype.mayank = function(){
    console.log(`I am everywhere`)
}

superPowers.mayank()
supes.mayank()

//now add function particulary in the array

//it only give access to array not others 
Array.prototype.sayArrayyy = function(){
    console.log("Arrayyyyyyyyyyyyy")
}

// PROTOTYPAL INHERITANCE

const Admin = {
    role: "superadmin",
    permissions: ["read", "write", "delete"]
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //Old syntax: it will inherit the prototypes of teachingsupport
}

Teacher.__proto__ = Admin //teacher will inherit the prototype of Admin

//MODERN SYNTAX;
Object.setPrototypeOf(Teacher, TeachingSupport)

//now we will create a prototype for the string to calculate the true length of the string(means without counting the spaces)

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length of the string is ${this.trim().length}`)
}

const name = "mayankkkkkk              ";
name.trueLength()