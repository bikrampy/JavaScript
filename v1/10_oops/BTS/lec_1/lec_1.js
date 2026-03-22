// function samplefunction(num){
//     return `Num is ${num}`
// }
// console.log(samplefunction(5)); // Num is 5

// samplefunction.val = 1;
// console.log(samplefunction.val); // 1

// samplefunction.topower2 = function myFunction(num2) {
//     return `Num2 is ${num2 ** 2}`
// }
// console.log(samplefunction.topower2(5)); // Num2 is 25


function createUser(username, score){
    this.username = username
    this.score = score
}

// console.log(createUser.prototype) // {}
createUser.prototype.incrementScore = function(point){
    this.score += point
}
createUser.prototype.printScore = function(){
    console.log(`score is ${this.score}`);
}
// console.log(createUser.prototype);

const bikram = new createUser("bikram", 25)
bikram.incrementScore(25)
bikram.printScore()

// console.log(bikram.__proto__);
// console.log(bikram.__proto__ === createUser.prototype); // true