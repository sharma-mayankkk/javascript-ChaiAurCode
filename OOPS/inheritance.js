class User{
    constructor(username){
        this.username = username
    }

    welcomeMessage(){
        console.log(`Welcome Mr.${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        // We use the super keyword to call the parent class (user) constructor,
        // so that the username property is initialized in the teacher instance.
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course added by your teacher ${this.username}`)
    }
}

const hitesh = new Teacher("Hitesh sir", "chaiaurcode@gmail.com", "xyzzz")

console.log(hitesh)
hitesh.addCourse()

// The instanceof keyword checks whether an object is an instance of a specific class or
console.log(User instanceof Teacher)

