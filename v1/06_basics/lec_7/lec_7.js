const myNums = [1, 2, 3, 4, 5, 6]
// const myTotal = myNums.reduce( function (accumulator, currentvalue) {
//     console.log(`acc: ${accumulator} and currval: ${currentvalue}`);
//     return accumulator + currentvalue
// }, 0 )
// console.log(myTotal);

const myTotal = myNums.reduce( (acc, curr) => {
    return acc * curr
}, 1 )
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 3000
    },
    {
        itemName: "py course",
        price: 1000
    },
    {
        itemName: "mobile dev course",
        price: 6000
    },
    {
        itemName: "data science course",
        price: 13000
    },
]
let shippingCharge = 99;
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, shippingCharge ) // for the first time,  acc is equals to shippingCharge
console.log(priceToPay);