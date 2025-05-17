//String Interpolation:
let name = "Mayank Sharma"
let age = "19"

console.log(`Hey supp! my name is ${name} and i'm ${age}`)

//ALL METHODS FOR STRING:

// String [ ]
// String slice()
// String substring()
// String substr()
// String Search Methods
// String Templates
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()

const text = "Hello world"
console.log(text)

// String length
console.log(text.length)

// String charAt()
console.log(text.charAt(3))

// String charCodeAt()
console.log(text.charCodeAt(4)) //The method returns a UTF-16 code (an integer between 0 and 65535).

//at()
console.log(text.at(7)) //same as charAt method

//Substring method:
console.log(text.substring(1,7))

// String trim()
console.log(text.trim()) //The trim() method removes whitespace from both sides of a string:

//replace method:
let url = "https//:mayank%20sharma.com"
console.log(url.replace("%20","_"))

//concat()
let x = "Mayank sharma"
let y = "is a null character"
let z = x.concat(" ", y)
console.log(z)

//Repeat()
console.log(text.repeat(2e3))

let userId = new String("tung-tung-tung-tung-sahur") //A string can be converted to an array with the split() method:
console.log(userId.split('-'))