function sayMyName() {
    console.log("Hello World!")
}
// sayMyName();

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
} // This function returns nothing
// addTwoNumbers(3, 4);

// let result = addTwoNumbers(3,4)
// console.log(result) // undefined

function add3Numbers(a, b, c) {
    // let result = (a + b + c )
    // return result;
    return a + b + c
    console.log("Hello World") // This will never execute, unreachable code
};
let ans = add3Numbers(1, 2, 3);
// console.log(ans);

function userLogin(username = "User") {
    return `${username} just logged in.`
}
console.log(userLogin()); // User just logged in.
console.log(userLogin('Shreyosi')); // Shreyosi just logged in.