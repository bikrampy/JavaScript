function countChar(str, char) {
    let result = 0;
    for (let index = 0; index < str.length; index++) {
        if (str[index] === char) {
            result ++;
        }
    };
    return result;
}
console.log(countChar('SHREYOSI', 'S'));