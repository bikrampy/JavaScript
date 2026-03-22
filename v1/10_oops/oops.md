# Javascript and OOP

## Object
Collection of Properties and Methods.

```javascript
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log(this);
    }
}
```
## Parts of OOP
### Object literal
Here user is an object.

It has properties (username, loginCount, signedIn) and a method (getUserDetails).

Methods can use this to refer to the object itself.

```javascript
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log(this);
    }
}
```

### Constructor function
Functions that are intended to create objects are called constructor functions.

By convention, they start with a capital letter (User).

```javascript
function User(username, mark){
    this.username = username;
    this.mark = mark;
    return this;
}
```
You call them with new.
```javascript
const userOne = new User("hitesh", 12, true)
```

### Prototypes
Every function in JS has a prototype object.

You can add methods to it so all created objects share them (saves memory).

```javascript
function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.incrementScore = function(point){
    this.score += point
}
createUser.prototype.printScore = function(){
    console.log(`score is ${this.score}`);
}
```

### Classes
Syntactic sugar over prototypes.

A class is just a cleaner way to write constructor + prototype methods.

A class is a blueprint for creating objects with predefined properties and methods.

Declared using the class keyword.

```javascript
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
const chai = new User("chai", "chai@gmail.com", "123");
console.log(chai.logUsername());
chai.changeUsername('chaiii');
```

### Instances (new)
An instance is the actual object created using a class or constructor function.

```javascript
class User {
    constructor(username, email){
        this.username = username;
        this.email = email;
    }
    logUsername(){
        return `User <${this.username}>`
    }
}
const chai = new User("chai", "chai@gmail.com", "123");
```

## 4 Pillars of OOP
### Abstraction
Hiding complex implementation details and exposing only the essential features of an object.

```javascript
class Car{
    constructor(model, year){
        this.model = model
        this.year = year
    }
    start() {
        this.#startEngine();
        console.log(`${this.model} started.`)
    }
    #startEngine() {
        console.log('Starting Engine...')
    }
}
let tesla = new Car('Tesla Model X', 2023)
tesla.start();
// tesla.#startEngine() // It will throw an error.
```

### Encapsulation
Protects the internal state of the object from unintended modification.

```javascript
class Account {
    #accountBalance;
    constructor(userName, accountBalance){
        this.userName = userName
        this.#accountBalance = accountBalance
    }
    showBalance() {
        console.log(`User ${this.userName} has an amount of ₹${this.#accountBalance} in Account`)
    }
}
let shreyyy = new Account('Shreyosi Halder', 20000)
shreyyy.showBalance()
```
### Inheritance
A mechanism where one class (child) inherits properties and methods from another class (parent).

```javascript
class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`User <${this.username}>`);
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
        this.courses = []
    }
    addCourse(courseTitle){
        console.log(`A new course named ${courseTitle} was added by ${this.username}`);
        this.courses.push(courseTitle)
    }
}
const tchr1 = new Teacher("shrey", "shreyyy@teacher.com", "12345")
tchr1.logMe()
console.log(tchr1);
tchr1.addCourse('JavaScript Basics')
console.log(tchr1);
```
### Polymorphism
The ability of different objects to respond differently to the same method call.

```javascript
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}
class Dog extends Animal {
    makeSound() {  // overriding
        console.log("Woof! Woof!");
    }
}
class Cat extends Animal {
    makeSound() {  // overriding
        console.log("Meow! Meow!");
    }
}
const animals = [new Dog(), new Cat(), new Animal()];
animals.forEach((animal) => {
    animal.makeSound();
});
```