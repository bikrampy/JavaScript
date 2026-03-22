class Account {
    #accountBalance; // We have to declare private properties here.
    constructor(userName, accountBalance){
        this.userName = userName
        this.#accountBalance = accountBalance
    }
    showBalance() {
        console.log(`User ${this.userName} has an amount of ₹${this.#accountBalance} in Account`)
    }
}
let shreyyy = new Account('Shreyosi Halder', 20000)
shreyyy.showBalance()