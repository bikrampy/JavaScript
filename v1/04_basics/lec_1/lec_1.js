function calculateCartPrice(username, email, ...cart){
    console.log(cart) // [ 500, 2000 ]
    return `${username} with email ${email} has cart items of values ${cart}`
}
// console.log(calculateCartPrice('bikram', 'bikram@mail.com', 500, 2000)) // bikram with email bikram@mail.com has cart items of values 500,2000

const user = {
    username: "bikram",
    id: 224
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}`);
}
// handleObject(user)
// handleObject({
//     username: "shreyyy",
//     id: 226
// })

let myNewArray = [200, 400, 600, 800]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([400, 600, 800, 1000]));