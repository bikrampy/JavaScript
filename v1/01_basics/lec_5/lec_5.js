let userName = "Shreyosi"
let repoCount = 50
// Method 1
// console.log("Hello my name is " + userName + " and my repo count is " + repoCount);
// Method 2 is using backticks so that we can achieve string interpolation
// console.log(`Hello my name is ${userName} and my repo count is ${repoCount}`);

let gameName = new String('JavaScript')
// __proto__ contains all the prototypes
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('U')); // -1

// In substring(), Negative index are not allowed.
let newString = gameName.substring(0, 4)
// console.log(newString); // Java
newString = gameName.substring(4)
// console.log(newString); // Script

// In slice(), Negative index are allowed.
let anotherString = gameName.slice(-10, -6)
// console.log(anotherString); // Java
// When start > end, it returns ""
anotherString = gameName.slice(-5, -6)
// console.log(anotherString); // ""

let newStringOne = "   Bikram   \n"
// console.log(newStringOne + "!");
// console.log(newStringOne.trim() + "!"); // removes leading and trailing whitespaces and line terminator(\n)

let url = "https://hitesh.com/hitesh-choudhary-js"
// console.log(url.replace('-','_')) // Replace only the first occurenced one.

// console.log(url.includes('sundar')) // false

// console.log('bikram-shreyosi-sunu'.split('-')) // [ 'bikram', 'shreyosi', 'sunu' ]

// console.log('Bikram'.concat(" Shreyosi", " Sunu")); // Bikram Shreyosi Sunu