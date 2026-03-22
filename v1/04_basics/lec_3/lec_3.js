function one(){
    let username = "shreyyy";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); // This will throw an error.
    two();
}
// one();

if (true) {
    const firstname = "bikram";
    if (firstname === "bikram") {
        const lastname = "saha";
        // console.log(firstname + " " + lastname);
    }
    // console.log(lastname); // this will throw an error.
}
// console.log(firstname); // this will throw an error.

console.log(addone(5))
function addone(num){
    return num + 1
}

// console.log(addTwo(5)); // This will throw an error.
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));
