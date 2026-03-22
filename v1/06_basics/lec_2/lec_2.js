// for (const i of "shreyosi") {
//     console.log(i);
// }

// let myArr = [1,5,6,7,10]
// for (let i of myArr) {
//     console.log(i);
// }

const map = new Map() // ordered and holds unique values
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // this will not be added
// console.log(map);

// for (const element of map) {
//     console.log(element)
// }
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'FR', 'France' ]

// Destructuring key and value
// for (const [key, value] of map) {
//     console.log(`${key}(Key) has ${value}(Value)`)
// }
// IN(Key) has India(Value)
// USA(Key) has United States of America(Value)
// FR(Key) has France(Value)

// a.forEach((value, index, array) => {
//   console.log(value, index, array);
// });