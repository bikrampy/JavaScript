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

console.log(tchr1 instanceof Teacher);
console.log(tchr1 instanceof User);

// BTS
// function User(username) {
//     this.username = username;
// }
// User.prototype.logMe = function() {
//     console.log(`User <${this.username}>`);
// };
// function Teacher(username, email, password) {
//     User.call(this, username);
//     this.email = email;
//     this.password = password;
//     this.courses = [];
// }
// Teacher.prototype = Object.create(User.prototype);
// Teacher.prototype.constructor = Teacher;
// Teacher.prototype.addCourse = function(courseTitle) {
//     console.log(`A new course named ${courseTitle} was added by ${this.username}`);
//     this.courses.push(courseTitle);
// };
// const tchr1 = new Teacher("shrey", "shreyyy@teacher.com", "12345")
// tchr1.logMe()
// console.log(tchr1);
// tchr1.addCourse('JavaScript Basics')
// console.log(tchr1);
