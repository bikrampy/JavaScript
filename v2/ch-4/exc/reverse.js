let alphabets = [1,2,3,5,8];
function reverse(arr) {
    let resultArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let element = arr[i];
        resultArr.push(element);
    };
    return resultArr;
};
function reverseInPlace(arr) {
    let i = 0, j = arr.length - 1;
    while (i < j) {
        let left = arr[i], right = arr[j];
        arr[i] = right;
        arr[j] = left;
        i++;
        j--;
    };
    return arr;
};
console.log(reverseInPlace(alphabets));
