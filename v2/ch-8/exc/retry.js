function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new Error("Klunk");
    }
};

function reliableMultiply(a, b) {
    for(;;){
        try {
            return primitiveMultiply(a,b);
        } catch(e) {
            console.log(e);
        }
    }
}

console.log(reliableMultiply(8, 8));
// → 64