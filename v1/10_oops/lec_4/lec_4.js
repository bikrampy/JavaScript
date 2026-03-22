class Car{
    constructor(model, year){
        this.model = model
        this.year = year
    }
    start() {
        this.#startEngine();
        console.log(`${this.model} started.`)
    }
    #startEngine() {
        console.log('Starting Engine...')
    }
}
let tesla = new Car('Tesla Model X', 2023)
tesla.start();
// tesla.#startEngine() // It will throw an error.