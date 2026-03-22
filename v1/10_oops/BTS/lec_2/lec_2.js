let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
}

Object.prototype.testObject = function(){
    console.log(`test function`);
}

Array.prototype.testArray = function(){
    console.log(`test function for array`);
}

// heroPower.testObject() // test function
// heroPower.testArray() // heroPower.testArray is not a function
// myHeros.testObject() // test function
// myHeros.testArray() // test function for array

String.prototype.trueLength = function(){
    console.log(`True length is: ${this.trim().length}`);
}
"hitesh   ".trueLength()
