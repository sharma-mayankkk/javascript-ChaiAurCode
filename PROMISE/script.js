const promiseOne = new Promise((resolve, reject)=>{
    //Do a async task:
    //DB call, cryptography, network

    setTimeout(()=>{
        console.log('Async task completed')
        resolve()
    },1000)
})

promiseOne.then(()=>{
    console.log('Promise consumed')
})

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('async task 2')
        resolve()
    },1000)
}).then(()=>{
    console.log('Promise consumed')
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({userName:'Mayank sharma', email:'sharma.mayankkk@gmail.com'})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user)
})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({userName:'Mayank sharma', email:'sharma.mayankkk@gmail.com'})
        }else{
            reject("Something went wrong!!")
        }
        
    },1000)
})

//chaining
promiseFour
.then((user)=>{
    return user.userName //it won't return the username directly we have add another then() to make a chain
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
}).finally(()=> console.log('ThE ProMiSe iS eIthEr reSoLvEd or REJected')) //it will execute even if promise is either accepted or rejected


const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({userName:'Bruce Wayne', address:'Gotham'})
        }else{
            reject("ERRRRRROOORRRR!!!")
        }
        
    },1000)
})

//there is another way to consume promise rather than using then() method
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
};

consumePromiseFive()

//now implement these from a dummy data
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')  
        const data = await response.json()
        // console.log(data);
    } catch (error) {  
        console.log("Error",error);
    }
}

getAllUsers()

//doing the same work without async function using fetch()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))