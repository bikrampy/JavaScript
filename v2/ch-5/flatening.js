let arrays = [[1, 2, 3], [4, 5], [6]];
let resultArray = arrays.reduce((previous, current) => {
    return previous.concat(current);
});
console.log(resultArray);
