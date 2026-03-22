// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);
// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
// Object.defineProperty(Math, 'PI', {
//     writable: true,
// }) // We cannot redefine property

const chai = {
    chai_name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai ban gyi");
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai, "chai_name"));
Object.defineProperty(chai, 'chai_name', {
    writable: false,
    enumerable: false,
    // configurable: false
});
// console.log(Object.getOwnPropertyDescriptor(chai, "chai_name"));

chai.chai_name = 'lemon tea'
// console.log(chai.chai_name); // ginger chai

// console.log(chai); // { price: 250, isAvailable: true, orderChai: [Function: orderChai] }
for (const key in chai) {
    const element = chai[key];
    console.log(`${key}: ${element}`)
}