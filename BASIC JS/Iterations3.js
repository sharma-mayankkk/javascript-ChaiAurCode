const avenger = ["Ironman", "Captain America", "Thor", "SpiderMan"]

//if we apply foreach method on this array and store it in a varibale it returns undefined:

let marvelHeroes = avenger.forEach((i) => {
    // console.log(i)
})

// console.log(marvelHeroes)

//**********************************************************************************************************//

//Filter Operation:
const numbers = [1, 3, 5, 7, 9, 11, 13]

let newNums = numbers.filter((num) => num > 5) // if we use scopes after that arrow function then we have to use return keyword:
// console.log(newNums)

//we can use foreach also for the same operation:

// create a empty array:
let arr = []
numbers.forEach((nums) => {
    if (nums > 5) arr.push(nums)
})
// console.log(arr)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bookie) => bookie.genre === "History" || bookie.genre === "Science")
// console.log(userBooks)

// *********************************************************************************************************//

//MAP:

const num = [1, 3, 4, 6, 7, 8,]
let newNumber = num.map((n) => n + 10)
// console.log(newNumber)

//Chaining:

let oddNums = [3, 5, 7, 9, 11, 13, 17]

let newOdds = oddNums
    .map((nums) => nums * 2)
    .map((nums)=> nums+2    )
    .filter((nums)=> nums%2 === 0)

// console.log(newOdds)

//REDUCE METHOD:

let totalNum = oddNums.reduce((accumulator, currentVal)=> accumulator+currentVal ,0)
// console.log(totalNum)

//we can also do it like this just for readability:
let sumOdd = oddNums.reduce(function(accumulator, currentVal){
    console.log(`The accumulator value is: ${accumulator} and the current value is: ${currentVal}`)
    return accumulator+currentVal
},0)  // we assign accumulator an initial value by putting comma their:
console.log(sumOdd)

const OTTs = [
    {
        platform: "Netflix",
        price: 199
    },

    {
        platform: "Amazon Prime",
        price: 299
    },

    {
        platform: "Hotstar",
        price: 149
    },

    {
        platform: "Spotify",
        price: 59
    },
]

//now if we want to calculate total price of all those subscriptions :
let subscriptions = OTTs.reduce((acc, item) => acc+item.price, 0)
console.log(subscriptions)