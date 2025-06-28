//NOTE: JS counts months from 0-11:
const myDate = new Date()
console.log(myDate)

//To convert dates into string method we can use:
console.log(myDate.toString())// to converts dates into readable format

console.log(myDate.toDateString()) //for more readable format

console.log(myDate.toUTCString())

console.log(myDate.toISOString()) //International Organization for Standardization

console.log(myDate.toLocaleString()) // DD/MM/YYYY british method:

let myNewDate = new Date("01-07-2069")
console.log(myNewDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)//returns the number of milliseconds since January 1, 1970. to change into seconds we can divide with 100

//we can also extract particular thing from the whole date :
console.log(myDate.getDay()) //returns weekday
console.log(myDate.getMonth()) // reuturns months and many other methods.

const formatted = myDate.toLocaleString('default', {
    weekday: 'long',      // e.g., "Tuesday"
    year: 'numeric',      // e.g., "2025"
    month: 'long',        // e.g., "May"
    day: 'numeric',       // e.g., "6"
    hour: '2-digit',      // e.g., "11"
    minute: '2-digit',    // e.g., "24"
    second: '2-digit',    // e.g., "30"
    hour12: true          // Use 12-hour format (true) or 24-hour (false)
})
console.log(formatted)

