const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// console.log(course.courseInstructor); // hitesh

// Using the above method became incovenient sometime, so we use the below approach to access the value
// De-Structuring
// let {courseInstructor} = course;
// console.log(courseInstructor); // hitesh

// const {courseInstructor: instructor} = course
// console.log(instructor); // hitesh

// JSON- Javascript Object Notation
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }