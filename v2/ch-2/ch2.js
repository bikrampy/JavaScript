let undefinedVar;
console.log(undefinedVar); // undefined

let number = 0;
while (number <= 10) {
    console.log(number);
    number = number + 2;
};

let result1 = 1;
let counter = 0;
while (counter < 10) {
    result1 = result1 * 2;
    counter = counter + 1;
};
console.log(result1);

for (let number = 0; number <= 10; number = number + 2) {
    const element = number;
    console.log(element);
};

let result2 = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
    result2 = result2 * 2;
};
console.log(result2);

for (let index = 20; ; index = index + 1) {
    if (index % 7 == 0) {
        console.log(index);
        break;
    }
};
