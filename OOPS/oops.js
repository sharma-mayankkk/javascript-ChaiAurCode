//OBJECT LITERALS:

const user = {
    username: 'Mayank Sharma',
    login: 'true',
    loginCount: 8,

    userData: function(){
        //here we have to use "this" keyword to point to the current context
        console.log(this.username)
    }
}

// console.log(user.userData())

//Constructor function:


function User(username, gmail, loginCount){
    this.username = username;
    this.gmail = gmail;
    this.loginCount = loginCount;

    return this
}

//to prevent overwrite we use new keyword
const user1 = new User("Tony Stark", "ironman@gmail.com", 2);
const user2 = new User("Bruce Wayne", "batman@gmail.com",3)

console.log(user1);