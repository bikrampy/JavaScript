let str = '33';
let numStr = Number(str);
// console.table([numStr, typeof numStr]); // 33, number
str = '33a';
numStr = Number(str);
// console.table([numStr, typeof numStr]); // Nan, number
str = 'abc';
numStr = Number(str);
// console.table([numStr, typeof numStr]); // NaN, number
str = undefined;
numStr = Number(str);
// console.table([numStr, typeof numStr]); // NaN, number
str = null;
numStr = Number(str);
// console.table([numStr, typeof numStr]); // 0, number
str = false;
numStr = Number(str);
console.table([numStr, typeof numStr]); // 0, number

// "33" => 33
// "33abc" => NaN and "abc" => NaN
//  true => 1 and false => 0
//  null => 0
//  undefined => NaN

let isLoggedIn = " ";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.table([booleanIsLoggedIn, typeof booleanIsLoggedIn]);
isLoggedIn = 33;
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.table([booleanIsLoggedIn, typeof booleanIsLoggedIn]);
isLoggedIn = null;
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.table([booleanIsLoggedIn, typeof booleanIsLoggedIn]);
isLoggedIn = undefined;
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.table([booleanIsLoggedIn, typeof booleanIsLoggedIn]);

// 1 or any other number => true and 0 => false
// null => false
// undefined => false
// "" => false and "abc" => true

let someNumber;
let stringNumber = String(someNumber)
// console.table([stringNumber, typeof stringNumber]);
someNumber = 33
stringNumber = String(someNumber)
// console.table([stringNumber, typeof stringNumber]);
someNumber = false
stringNumber = String(someNumber)
// console.table([stringNumber, typeof stringNumber]);
someNumber = null
stringNumber = String(someNumber)
// console.table([stringNumber, typeof stringNumber]);

// converts them to simple string