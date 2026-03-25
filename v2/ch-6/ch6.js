function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'.`);
};

let whiteRabbit = {
    type: 'white',
    speak: speak,
};
whiteRabbit.speak('I am 1st white rabbit');

speak.call({
    type: 'hungry',
}, 'I am so hungry');

let finder = {
    value: 5,
    find: function find(array) {
        return array.some(v => v == this.value);
    },
};
console.log(finder.find([1,2,3,5]));

let emptyObject = {};
let emptyFunction = () => {};
let emptyArray = [];
console.log(emptyObject.toString);
console.log(emptyFunction.toString);
console.log(emptyArray.toString);
console.log(Object.getPrototypeOf(emptyObject) == Object.prototype); // true
console.log(Object.getPrototypeOf(emptyFunction) == Function.prototype); // true
console.log(Object.getPrototypeOf(emptyArray) == Array.prototype); // true
console.log(Object.getPrototypeOf(Function.prototype) == Object.prototype); // true
console.log(Object.getPrototypeOf(Array.prototype) == Object.prototype); // true
let nullObject = Object.create(null);
console.log(Object.getPrototypeOf(nullObject)); // null

let prototypeRabbit = {
    speak: function speak(line){
        console.log(`The ${this.type} rabbit says '${line}'.`);
    },
};
let whiteRabbit2 = Object.create(prototypeRabbit);
console.log(Object.getPrototypeOf(whiteRabbit2) == prototypeRabbit); // true
whiteRabbit2.type = 'white';
whiteRabbit2.speak('I am 2nd white rabbit');

function makeInstanceOfRabbit(type) {
    let rabbit = Object.create(prototypeRabbit);
    rabbit.type = type;
    return rabbit;
};
let whiteRabbit3 = makeInstanceOfRabbit('white');
whiteRabbit3.speak('I am 3rd white rabbit');

class Rabbit {
    size = 'regular'
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'.`);
    }
};
let blackRabbit = new Rabbit('black');
blackRabbit.speak('I am black rabbit');

class SecretiveObject {
    #secret;
    constructor(secret) {
        this.#secret = secret;
    }
    #getSecret() {
        return this.#secret;
    }
    interrogate(mode) {
        if (mode == 'strict') {
            return this.#getSecret();
        }
        return "I don't know";
    }
};
let my1stSecret = new SecretiveObject('I failed at class 12.');
console.log(my1stSecret.interrogate('strict'));

Rabbit.prototype.teeth = 'small';
console.log(Rabbit.prototype);
console.log(blackRabbit);
blackRabbit.teeth = 'small';
console.log(blackRabbit);

let ages = Object.create(null);
ages.Bikram = 24;
ages.Shreyosi = 23;
ages.Saswata = 21;
console.log(Object.hasOwn(ages, "Bikram")); // true

let agesMap = new Map();
agesMap.set('Bikram', 24);
agesMap.set('Shreyosi', 23);
console.log(agesMap.get('Shreyosi')); // 23
console.log(agesMap.get('Saswata')); // undefined
console.log(agesMap); // Map(2) { 'Bikram' => 24, 'Shreyosi' => 23 }
for (let element of agesMap) {
    console.log(element);
};

Rabbit.prototype.toString = function () {
    return `a ${this.type} rabbit`;
};
console.log(String(blackRabbit));

Array.prototype.forEach.call({
    length: 2,
    0: '1',
    1: '2'
}, elt => console.log(elt));

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
};
let temp = new Temperature(22);
console.log(temp.fahrenheit); // 71.6
temp.fahrenheit = 71.6;
console.log(temp.celsius); // 21
let temp2 = Temperature.fromFahrenheit(212);
console.log(temp2.celsius); // 100

let sym = Symbol('name');
console.log(sym == Symbol('name')); // false
console.log(String(sym));
console.log(sym);

let length = Symbol('length');
Array.prototype[length] = 0;
console.log([1,2,3].length); // 3
console.log([1,2,3][length]); // 0

let myTrip = {
    length: 2,
    0: 'Kashmir',
    1: 'Darjeeling',
};
myTrip[length] = 21500;
console.log(myTrip.length); // 2
console.log(myTrip[length]); // 21500

class LinkedList {
    constructor(value, rest) {
        this.value = value;
        this.rest = rest;
    }
    get length() {
        return 1 + (this.rest ? this.rest.length : 0);
    }
    static fromArray(array) {
        let result = null;
        for (let i = array.length - 1; i >= 0; i--) {
            result = new LinkedList(array[i], result);
        };
        return result;
    }
};

class LinkedListIterator {
    constructor(list) {
        this.list = list;
    }
    next() {
        if (this.list == null) {
            return {done: true};
        }
        let value = this.list.value;
        this.list = this.list.rest;
        return {value, done: false};
    }
};
LinkedList.prototype[Symbol.iterator] = function () {
    return new LinkedListIterator(this);
};

let list = LinkedList.fromArray([1,2,3]);
console.log(list);
let listIterator = list[Symbol.iterator]();
console.log(listIterator.next()); // { value: 1, done: false }
console.log(listIterator.next()); // { value: 2, done: false }
console.log(listIterator.next()); // { value: 3, done: false }
console.log(listIterator.next()); // { done: true }
for (const element of list) {
    console.log(element);
};

class LengthLinkedList extends LinkedList {
    #length;
    constructor(value, rest) {
        super(value, rest);
        this.#length = super.length;
    }
    get length() {
        return this.#length;
    }
};
console.log(LengthLinkedList.fromArray([1,2,3,4]).length); // 4