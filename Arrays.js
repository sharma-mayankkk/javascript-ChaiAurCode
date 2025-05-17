// const supes = ["Homelander", "A-train", "Soilder-boy", "Butcher"]   
// console.log(supes[0]) //to return particular index

// //Arrays Method

// supes.push("sam")// add elements in an array at last position
// console.log(supes)

// supes.pop() // removes the last element 
// console.log(supes)

// supes.unshift("Starlight")// add elements in an array at last position
// console.log(supes)

// supes.shift() //removes the first element
// console.log(supes)

// console.log(supes.includes("Sam")) // returns True or false if element exist
// console.log(supes.indexOf("Homelander")) // returns the index 

// let newArr = supes.join() // converts arrays into string
// console.log(newArr) 

// console.log(supes.slice(1,3)) // it slices the array from LB to UB (UB not included) ... it doesn't affect the original array

// let splice = supes.splice(1,3) // it includes UB too but affect the original array
// console.log(splice)
// console.log(supes)

// // ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

// let newSplice = supes.toSpliced(0,2)
// console.log(newSplice)
// console.log(supes)

//**********************************************************************************************************//

const marvel = ["Iron-Man", "Spider-man", "Thor"]
const dc = ["Batman", "Superman", "Flash"]

marvel.push(dc) // we can push an array as an element of an another array
console.log(marvel)
// console.log(marvel[3][1]) // to access particular element of inner array

// now we can use spread to concat two arrays
// const comics = [...marvel, ...dc]
// console.log(comics)

console.log(marvel.flat(Infinity)) // flat splits the arrays in an array

console.log(Array.from("Mayank")) // makes array of anything
console.log(Array.from([1,2,3,4,5],(x)=>x+x))

let a = "Mayank"                
let b = "Kumar"                   
let c = "Sharma"
console.log(Array.of(a,b,c)) //Arrays.of creates an array of multiple variables  