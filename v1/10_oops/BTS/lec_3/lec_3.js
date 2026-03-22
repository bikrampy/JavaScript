// Inheritance

const User = {
    name: "shreyy",
    email: "chai@google.com",
}
const Teacher = {
    isTeacher: true,
}
Teacher.__proto__ = User; // Teacher can use the key of User
console.log(Teacher.name);
const Student = {
    isStudent: false,
    __proto__: User, // Student can use the key of User
}
console.log(Student.name);
const Videos = {
    videos: ['JAVAScript'],
}
// Modern Syntax
Object.setPrototypeOf(Teacher, Videos); // Teacher can use the key of Videos
console.log(Teacher.videos);