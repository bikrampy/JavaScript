const uId = Symbol("userId")

// A singleton object means only one instance of that object exists.
// Ways to create objects
// Object Literal
const JsUser = {
    name: "Shreyosi",
    "full name": "Shreyosi Halder",
    [uId]: "1",
    age: 20,
    location: "Bira",
    email: "shreyosi@google.com",
    isLoggedIn: false,
}

// Object Constructor
let obj = new Object();
obj.key = "value";

console.log(JsUser.email)
console.log(JsUser["full name"])
console.log(JsUser[uId])

JsUser.email = "shreyosi@chatgpt.com"
// Object.freeze(JsUser) // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
JsUser.email = "shreyosi@microsoft.com"
// console.log(JsUser);
JsUser.repr = function(){
    console.log("<Object JsUser>");
}
// JsUser.repr();
JsUser.greeting = function(){
    console.log(`Hello ${this["full name"]}, Your User Id is ${this[uId]}`);
}
JsUser.greeting();