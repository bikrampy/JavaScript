let value = 3
let negValue = -value
// console.log(negValue);

let a = 3;
let b = 2;
// console.log(a);
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

let str1 = "hello"
let str2 = "world"
let str3 = str1 + " " +str2
// console.log(str3);

// Operations perform from left to right
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log(3 + 4 * 5 - 3); // According to operator precedence, the * operations will happen first. 
// console.log((3 + 4) * (5 ** 2)) // But using brackets is a better approach because it enhances user readability.

// These are some quick conversion, but we should mot use this because it degrade the user readability
// console.log(+false); // 0 
// console.log(+true); // 1
// console.log(+''); // 0
// console.log(+'12'); // 12

// If used postfix, the increment operator increments and returns the value before incrementing.
a = 3;
console.log(a++);
// If used prefix, the increment operator increments and returns the value after incrementing.
a = 3;
console.log(++a);
