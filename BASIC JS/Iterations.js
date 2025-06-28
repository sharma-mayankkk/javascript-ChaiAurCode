// FOR LOOP:

for(let index=1; index<=10; index++){
    console.log(index)
}

//Print Table:
for(let i =1; i<=10; i++){
    for(let j=1; j<=10; j++){
        // console.log(i+'x'+ j + ' = '+ i*j)
    }
    // console.log(" ")
}

let supes = ["Homelander", "Atrain", "Deep", "Sam"]

for (let index = 0; index < supes.length; index++) {
    const element = supes[index];
    console.log(element)
}


//WHILE:

let i =0 
while(i<10){
    console.log(i)
    i+= 2
}

let arr = 0
while(arr<supes.length){
    console.log(supes[arr])
    arr++
}

//DO-WHILE LOOP
//Note: DO-While loop will be execute at least one time even the condtion is false
let score = 0
do{
    console.log(`Score is: ${score}`)
    score++
}while(score<=10)
