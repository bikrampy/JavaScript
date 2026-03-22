// state => pending, fulfilled, rejected
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve('Done') // connect with then()
    }, 500);
});
promiseOne.then(function(result){
    console.log("PromiseOne Consumed:", result); // Promise 1 consumed: Done
});

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2 is complete");
//         resolve('Done')
//     }, 1000)
// }).then(function(result){
//     console.log("PromiseTwo Consumed:", result);
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Shreyosi", email: "shreyosi@example.com"})
//     }, 1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({username: "hitesh", password: "12345"})
//         } else {
//             reject('Error: Something went wrong.')
//         }
//     }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => console.log("The promise is either resolved or rejected"))

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "12345"})
//         } else {
//             reject('Error: Somehing went wrong')
//         }
//     }, 1000)
// });
// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/bikrampy')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/bikrampy')
.then((result) => {
    return result.json()
})
.then((endresult) => {
    console.log(endresult);
})
.catch((error) => 
    console.log(error)
)
