let size = 9;
for (let outer = 0; outer < size; outer++) {
    let result = '';
    if (outer % 2 == 0) {
        for (let inner = 0; inner < size; inner++) {
            if (inner % 2 == 0) {
                result += ' ';
            } else {
                result += "#";
            }
        }
        console.log(result);
    } else {
        for (let inner = 0; inner < size; inner++) {
            if (inner % 2 == 0) {
                result += '#';
            } else {
                result += " ";
            }
        }
        console.log(result);
    }
}