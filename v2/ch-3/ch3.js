let makeNoise = function(){
    console.log('Ping!')
};
console.log(makeNoise())

let square = function(x) {
    return x * x;
}
console.log(square(7));

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

let greet = function() {
  console.log("Hello");
};
greet();  // Hello
greet = function() {
  console.log("Hi");
};
greet();  // Hi

// greetUser(); // ReferenceError: Cannot access 'greet2' before initialization
let greetUser = function(){
    console.log('Hello, user!')
};
greetUser2();
function greetUser2() {
    console.log('Hello, user!');
};

let horn = () => {
    console.log('Toot');
};
let square2 = x => x * x;

function chicken() {
    return egg();
};
function egg() {
    return chicken();
};
// console.log(chicken()); // RangeError: Maximum call stack size exceeded

function sqrRoot(x) {
    return x ** 0.5;
};
console.log(sqrRoot(36, true, 'Shreyosi')); // the extra arguments are ignored

function minus(a,b) {
    if (b === undefined) {
        return -a
    };
    return a - b
};
console.log(minus(10)); // -10
console.log(minus(10, 5)); // 5

let multiplier = function (factor) {
    return number => number * factor;
};
let twice = multiplier(2);
console.log(twice(5));

function power(base, exponent) {
    if (exponent === 1) {
        return base;
    }
    return base * power(base, exponent - 1)
};
console.log(power(2,8));

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ?? find(current * 3, `(${history} * 3)`)
        }
    }
    return find(1,'1');
};
console.log(findSolution(27));
