// this refers to the object that is executing the current function.
// console.log(this); // In browser → refers to window object.
// console.log(this); // In Node.js → refers to {}.
const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to our website.`); // Here, this refers to the object that owns the method (user).
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// function chai(){
//     let username = "sam"
//     console.log(this.username); // undefined
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }
// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }

// const greet = (user) => (`Hello, ${user}`)
// console.log(greet('Bikram'))