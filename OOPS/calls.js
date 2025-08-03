function setUsername(username) {
    //complex DB calls
    this.username = username
}

function createUser(username, password, email) {
    setUsername.call(this, username)
    // We use .call here to explicitly set the 'this' context for the setUsername function.
    // Without .call, setUsername would be called in the global context (or undefined in strict mode),
    // and 'this.username' inside setUsername would not refer to the 'mayank' object being created by createUser.
    // By passing 'this' (which refers to the new object being constructed by createUser),
    // we ensure that setUsername modifies the 'username' property of the 'mayank' object.

    this.email = email
    this.password = password

}

const mayank = new createUser("Mayank Sharma", "abcd", "xyz@gmail.com")
console.log(mayank)