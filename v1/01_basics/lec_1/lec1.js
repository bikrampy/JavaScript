"use strict";
let x = 5;
console.log(x);
console.log(typeof x);
let y = "Bikram bhai";
let z = 3.55;
let p = true;
let q = undefined; // typeof undefined is undefined
let r = null; // typeof null is object
let s = 345678923489856789n;
let t = Symbol('123');

console.table([typeof x, typeof y, typeof z, typeof p, typeof q, typeof r, typeof s, typeof t]);
console.log(typeof NaN);

let obj = {
  name: "Bikram",
  phone: "9531537510",
  email: "bikram@mail.com",
};
console.table([obj, typeof obj]);