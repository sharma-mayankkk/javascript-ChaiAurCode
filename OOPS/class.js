// Classes were introduced in ECMAScript 2015 (ES6)
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const mayank = new User("mayank", "mayank@gmail.com", "123");

console.log(mayank.encryptPassword());
console.log(mayank.changeUsername());

// Behind the scenes (how classes work internally)

function User2(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};

User2.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
};

const batman = new User2("Bruce Wayne", "bat@gotham.com", "123");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
