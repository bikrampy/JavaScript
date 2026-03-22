const tinderUser = new Object();
tinderUser.id = "123";
tinderUser.name = "Shrey";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// const User = {
//   email: "shrey@gmail.com",
//   fullname: {
//     firstname: "shreyosi",
//     lastname: "halder",
//   },
// };
// console.log(User.fullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4 = { obj1, obj2, obj3 }
// console.log(obj4)
// {
//   obj1: { '1': 'a', '2': 'b' },
//   obj2: { '3': 'a', '4': 'b' },
//   obj3: { '5': 'a', '6': 'b' }
// }

// const obj4 = Object.assign({}, obj1, obj2, obj3) // Object.assign(target, sources)
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
