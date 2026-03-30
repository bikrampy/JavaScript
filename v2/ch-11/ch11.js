// Synchronous Program
// function heavyTask() {
//     for (let i = 0; i < 10_000_000_000; i++) {}
// };
// console.log("Start");
// heavyTask();
// console.log("End");

// Asynchronous Program
// console.log('start');
// setTimeout(() => {
//     console.log('Hello from setTimeout.');
// }, 5000);
// fetch('https://api.github.com/users/bikrampy').then(
//     () => {
//         console.log('Hello from fetch.');
//     }
// );
// for (let index = 0; index < 1000000; index++) {
// };
// console.log('end');

// Hoisting
// console.log(a); // undefined
// var a = 10;

// Callback functions
// setTimeout(() => {
//     console.log('Hello after 2 second')
// }, 2000);

// console.log('Downloading File...');
// setTimeout(() => {
//     console.log('File Downloaded');
//     setTimeout(() => {
//         console.log('File Processed');
//         setTimeout(() => {
//             console.log('File saved');
//         }, 2000);
//     }, 2000);
// }, 2000);

// let promise1 = new Promise((resolve, reject) => {
//     resolve('promise1');
// });
// console.log(promise1);

// let promise2 = new Promise((resolve, reject) => {
//     reject('Error');
// });
// console.log(promise2);

// function checkMark(mark) {
//     return new Promise((resolve, reject) => {
//         if (mark < 20) {
//             reject('Low Score. Failed.');
//         } else {
//             resolve('Passed.');
//         };
//     });
// }; 
// console.log(checkMark(21));

// console.log('Start.');
// new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log('setTimeout() called')
//         res('P-1');
//     }, 2000);
// }).then((val) => {
//     console.log('.then() called');
// });
// console.log("End.");
// Start.
// End.
// setTimeout() called
// .then() called

// console.log('Start.');
// setTimeout(() => {
//     console.log('setTimeout() called');
// }, 0);
// new Promise((res, rej) => {
//     res('P-1');
// }).then((val) => {
//     console.log('.then() called');
// });
// console.log("End.");
// Start.
// End.
// .then() called
// setTimeout() called

// let githubUserData = fetch('https://api.github.com/users/bikrampyyy');
// console.log(githubUserData);
// console.log('Start');
// githubUserData
// .then((res) => {
//     if (res.ok) {
//         return res.json();
//     }
//     throw new Error("User Not Found");
// })
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err.message);
// });
// console.log('End');

// let users = [
//   {
//     userId: 1,
//     name: "Bikram",
//     email: "bikramsahanolimit@gmail.com",
//     address: "Kolkata"
//   },
// ];
// let products = [
//   { productId: 101, name: "iPhone 16", price: 80000, stock: 5 },
//   { productId: 102, name: "MacBook Air M4", price: 120000, stock: 3 },
//   { productId: 103, name: "Bangles", price: 500, stock: 10 },
// ];
// let carts = [
//   {
//     userId: 1,
//     items: [
//       { productId: 101, quantity: 1 },
//       { productId: 102, quantity: 1 },
//       { productId: 103, quantity: 2 },
//     ],
//   },
// ];
// let orders = [];
// let payments = [];
// function validateCart(cart, products) {
//     return new Promise((resolve, reject) => {
//         if (!cart || !cart.items || cart.items.length === 0) {
//             return reject("Cart is empty");
//         }
//         for (let item of cart.items) {
//             let product = products.find(p => p.productId === item.productId);
//             if (!product) {
//                 return reject(`Product not found: ${item.productId}`);
//             }
//             if (item.quantity <= 0) {
//                 return reject(`Invalid quantity for productId ${item.productId}`);
//             }
//             if (item.quantity > product.stock) {
//                 return reject(`Out of stock for productId ${item.productId}`);
//             }
//         }
//         resolve(cart);
//     });
// };

// function calculateTotal(cart, products) {
//     return new Promise((resolve, reject) => {
//         let total = 0;
//         for (let item of cart.items) {
//             let product = products.find(p => p.productId === item.productId);
//             if (!product) {
//                 return reject(`Product not found: ${item.productId}`);
//             }
//             total += product.price * item.quantity;
//         }
//         resolve(total);
//     });
// };

// function processPayment(total) {
//     return new Promise((resolve, reject) => {
//         console.log("Processing payment...");
//         setTimeout(() => {
//             let isSuccessful = Math.random() > 0.1;
//             if (isSuccessful) {
//                 resolve(`Payment successful for ₹${total}`);
//             } else {
//                 reject("Payment failed. Try again.");
//             }
//         }, 2000);
//     });
// };

// function createOrder(userId, cart, total) {
//     return new Promise((resolve, reject) => {
//         if (!userId || !cart || !total) {
//             return reject("Invalid order data");
//         };
//         let orderId = orders.length + 1;
//         let newOrder = {
//             orderId,
//             userId,
//             items: cart.items,
//             totalAmount: total,
//             status: "PLACED"
//         };
//         orders.push(newOrder);
//         resolve(newOrder);
//     });
// };

// validateCart(carts[0], products)
//     .then((res) => {
//         return calculateTotal(res, products);
//     })
//     .then((res) => {
//         return processPayment(res);
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// validateCart(carts[0], products)
//     .then((cart) => {
//         return calculateTotal(cart, products).then((total) => ({ cart, total }));
//     })
//     .then(({ cart, total }) => {
//         return processPayment(total).then(() => ({ cart, total }));
//     })
//     .then(({ cart, total }) => {
//         return createOrder(1, cart, total);
//     })
//     .then((order) => {
//         console.log("Order Created:", order);
//         console.log("All Orders:", orders);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// async function myFunction(name) {
//     return `Hello ${name}`;
// }
// let res = myFunction('Bikram');
// console.log(res);

// async function myFunction2(name) {
//     return new Promise((res) => {
//         res(name);
//     });
// };
// let res2 = myFunction2('Shreyosi');
// console.log(res2);

// async function myFunction3(name) {
//     let res3 = await new Promise((res, rej) => {
//         setTimeout(() => {
//             res(name);
//         }, 2000);
//     })
//     console.log(res3);
// };
// myFunction3('Shreyosi');

// async function test() {
//     console.log("A");
//     let res = await new Promise((res) => {
//         setTimeout(() => {
//             res('B');
//         }, 2000);
//     });
//     console.log(res);
//     console.log("C");
// };
// console.log("Start");
// test();
// console.log("End");

// async function getUserName(name) {
//     let p = new Promise((res, rej) => {
//         if (name !== 'Shreyosi') {
//             setTimeout(() => {
//                 rej('Invalid Username');
//             }, 5000);
//         } else {
//             setTimeout(() => {
//                 res(name);
//             }, 5000);
//         };
//     });
//     return p;
// };
// async function myFunction4(name) {
//     try {
//         let res4 = await getUserName(name);
//         console.log(res4);
//     } catch (error) {
//         console.log(error);
//     }
// };
// myFunction4('Shrey');

// async function fetchUserData(username) {
//     try {
//         let res = await fetch(`https://api.github.com/users/${username}`);
//         if (res.ok) {
//             let userData = await res.json();
//             console.log(userData);
//         } else {
//             throw new Error("User Not Found");
//         }
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// fetchUserData('bikrampy');
