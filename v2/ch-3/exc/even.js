function isEven(arg) {
    if (arg == 0) {
        return true;
    } else if (arg == 1) {
        return false;
    } else if (arg < 0) {
        return isEven(-arg);
    } else {
        return isEven(arg - 2);
    }
}
console.log(isEven(-2));