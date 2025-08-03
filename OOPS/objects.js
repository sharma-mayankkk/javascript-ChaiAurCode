const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor)

const chicken = {
    name: 'Butter Chicken',
    price: '299',
    isAvailable: 'true',

    feedback: function(){
        console.log('Mast chickennn')
    }
}

Object.defineProperty(chicken, 'price', {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chicken, "price"))

//lets iterate the object chicken:

for (let [key,value] of Object.entries(chicken)) {
    //check if there is an fucntion in the object 
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`)
    }
}