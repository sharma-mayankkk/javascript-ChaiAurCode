//----------------------------------------------OTHER LOOPS-------------------------------------------------//

//For of loops:

const avenger = ["Ironman", "Captain America", "Thor", "SpiderMan"]
for (const names of avenger) {
    // console.log(names)
}

//For of loop on maps
//Maps are non-itretable by default:
let map = new Map()
map.set("+91","India")
map.set("+7","Russia")
map.set("+1","United States")

for (const [key, value] of map) {
    console.log(key,':',value)
}

//For of Loop do not works on objects so we use :
//ForIn loop:

const playingXII = {
    1: "Virat Kohli",
    2: "Rohit Sharma",
    3: "Shreyas Iyer",
    4: "KL Rahul"
}

for (const key in playingXII) {
    console.log(playingXII[key])
}

//For each loop on array:

const songs = ["CO2", "Snap", "Superman" , "Godzilla"]

//foreach method: The forEach() method calls a function for each element in an array.

songs.forEach(function(i){ //the function used is the callback function that declares without any name:
    console.log(i)
})

//also like this
songs.forEach((i)=>{
    console.log(i)
})

//we can also create a function outside of it and make it as a parameter

function printArr(gaana){
    console.log(gaana)
}

songs.forEach(printArr)


// now we can also pass various parameters in foreach method:

songs.forEach((value, index, arr) =>{
    console.log(value, index, arr)
})


//How to iterate array of objects:

const music = [
    {
        song: "CO2",
        singer: "Prateek Kulhad"
    },
    {
        song: "Godzilla",
        singer: "Eminem"
    },
    {
        song: "Somewhere only we know",
        singer: "Keane"
    }
]

// how to access these:

music.forEach( (i)=>{
    console.log(i.song)
})