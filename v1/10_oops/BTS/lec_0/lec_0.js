// "use strict";
// Object Literal:
// let user = {
//     username: 'shreyosi',
//     mark: 100,
//     getMark: function() {
//         console.log(this.mark);
//     }
// }
// console.log(user);
// user.getMark();

// Constructor Function:
function User(username, mark){
    this.username = username;
    this.mark = mark;
    this.greeting = () => console.log(`Welcome back, ${this.username}`)
    // return this;
}
let user1 = new User('Bikram', 24);
let user2 = new User('Bikram2', 34);
console.log(user1);
user2.greeting()