const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); // flash

// let all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// let all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Hitesh")) // false
// console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name: "hitesh"})) // []

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score_array = Array.of(score1, score2, score3);
// console.log(score_array);