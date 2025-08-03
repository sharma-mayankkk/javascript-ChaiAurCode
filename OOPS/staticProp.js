class User {
    constructor(username){
        this.username = username
    }

    static uniqueId(){
        console.log("8dge45jl5l3")
    }
}

const sharma = new User("Mayank")
console.log(sharma)
sharma.uniqueId() //since the unique id is a static function it can't be accessed by any others

// even we inherit the property of user class the static method will still not accessed by the child class

class gmail{
    constructor(username, mail){
        super(username)
        this.mail = mail
    }
}

const myGmail = gmail("Walter white", "meth@gmail.com")
myGmail.uniqueId()