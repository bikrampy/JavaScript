// 'use strict';
for (index = 0; index < 10; index++) {
    console.log(index);
};

function person(name) {
    this.personName = name;
};
let shreyosi = person('Shreyosi Halder');
console.log(shreyosi); // undefined
// console.log(shreyosi.name); // cannot read properties of undefined
console.log(personName); // Shreyosi Halder

function test(label, body) {
    if (!body()) {
        console.log(`Failed: ${label}`);
    } else {
        console.log(`Passed: ${label}`);
    }
};
// (a: Number, body: Number) => Number
function minus(a,b) {
    if (b == undefined) {
        return -a;
    } else {
        return a - b;
    }
};
test("calling minus function with 2 arguments", () => {
    return minus(1) === -1;
});
test("calling minus function with 2 arguments", () => {
    return minus(2,2) === 0;
});

function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        console.log(result);
        n = Math.floor(n / base);
        console.log(n);
    } while (n > 0);
    return sign + result;
};
console.log(numberToString(13,10));

function lastElement(array) {
    if (array.length == 0) {
        return {failed: true};
    } else {
        return {value: array[array.length - 1]};
    };
};
