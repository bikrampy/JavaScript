let a = 100; // This is a global variable
const b = 200; // This is a global variable
var c = 300;
if (true) {
    // console.log(a); // This will throw an error.
    let a = 10 // This is only accessibale inside this scope.
    const b = 20 // This is only accessibale inside this scope.
    var c = 30
    console.log("Inner a:", a) // 10
    console.log("Inner b:", b) // 20
} // This is a scope
console.log("Outer a:", a) // 100
console.log("Outer b:", b) // 200
console.log(c) // 30