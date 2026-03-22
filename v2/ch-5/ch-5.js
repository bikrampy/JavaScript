for (let i = 0; i < 10; i++) {
    console.log(i+1);
};
function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i+1);
    };
};
repeatLog(10);
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i+1);
    };
};
repeat(5, console.log);
let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i}`);
});
console.log(labels);

function greaterThan(n) {
    return (m) => {
        return m > n;
    };
};
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

function repeat2(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    };
};
function unless(test, then) {
    if (!test) {
        then();
    };
};
repeat2(3, (i) => {
    unless(i % 2 == 1, () => {
        console.log(`${i} is even`);
    });
});