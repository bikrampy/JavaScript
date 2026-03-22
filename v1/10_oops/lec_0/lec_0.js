class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    logUsername(){
        return `User <${this.username}>`
    }
    changeUsername(newName){
        this.username = newName
    }
}

const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai.logUsername());
chai.changeUsername('chaiii');
console.log(chai);

// Behind The Scene
// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// User.prototype.logUsername = function(){
//     return `User <${this.username}>`
// }

// User.prototype.changeUsername = function(newName){
//     this.username = newName
// }
// const tea = new User("tea", "tea@gmail.com", "123")
// console.log(tea.logUsername());
// console.log(tea.changeUsername('garamtea'));