const userEmailId = "sharma@yahooo.com"

if(userEmailId){ // if any values exists it treated as truthy values.
    console.log("Got your Email ID")
}else{
    console.log("Didn't get your Email ID..")
}

//List of Values that will treated as fasly: null, undefined, false, 0, -0, BigInt 0n, ""(empty string), NaN 

//except all falsy values are truthy ... some of them are : "0", " ", 'false', empty array: [], empty object: {}, empty function: fucntion(){}, 


//How to check that array is empty:

const arr = []
if(arr.length === 0){
    console.log("Array is empty")
}

//How to check object is empty or not:

let obj = {}

if(Object.keys(obj).length === 0){
    console.log("Object is empty")
}

//Nullish coalescing operator (??): for undefined and null values , it returns some value or function if there is a null or undef value to prevent errors:

let value;
// value = null ?? 10
value = undefined?? 10
console.log(value)

//Terniary Operator 

let coffeePrice = 199
coffeePrice<100 ? console.log("affordable"):console.log("Aukat ke bahar")
