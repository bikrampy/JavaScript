// function greet(username) {
//     username = this.name ?? username
//     console.log(`Hello ${username}!`);
// }
// const person = { name: "Bikram" };
// greet('shrey'); // Hello shrey!
// greet.call(person, this.name); // "Hello Bikram!"

function SetUsername(username){
    this.username = username
}
function CreateUser(username, email){
    // let temp = new SetUsername(username)
    // this.username = temp.username
    this.email = email
    SetUsername.call(this, username)
}
const chai = new CreateUser("chai", "chai@fb.com")
console.log(chai);