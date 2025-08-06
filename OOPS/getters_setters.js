class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password.toUpperCase();
    }

    set password(value) {
        this._password = value
    }
}

const mayank = new User("dev.mayank@gmail.com", 'abcc88cc')
console.log(mayank.email)


// HOW WE USED TO USE GETTERS SETTERS WHEN THERE IS NO OOPS IN JS (OLD SYNTAX)

function user(password, email) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value;
        }
    })
}

const person = new user("password", "person@person.com")
// console.log(person.email)





//USING GETTER SETTERS BY OBJECT:

const insaan = {
    _email: "email@gmail.com",
    _password: "passord",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this.email = value;
    }
}

const aadmi = Object.create(insaan)
console.log(aadmi.email)