// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    console.log(`DB CONNECTED`);
})();
// To execute two IIFE simultaneously, we have to add ; at the end of the function call.
((name) => {
    console.log(`Hello, ${name}`);
})('BEINGBIFRONS.SHOP')