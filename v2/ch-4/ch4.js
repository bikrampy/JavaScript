let firstThreeNumber = [1,2,3];
/* {
    0: 1,
    1: 2,
    2: 3,
}
*/
console.log(typeof firstThreeNumber); // object
console.log(firstThreeNumber.length); // 3
let i = 2;
console.log(firstThreeNumber[i]); // 3

let anObject = {
    left: 1,
    right: 2,
};
console.log(Object.keys(anObject)); // [ 'left', 'right' ]

console.log(anObject.left); // 1
delete anObject.left;
console.log(anObject.left); // undefined
anObject.right = undefined;
console.log(anObject.right); // undefined
console.log('left' in anObject); // false
console.log('right' in anObject); // true

let object1 = {value: 0};
let object2 = object1;
let object3 = {value: 0};
console.log(object1 == object2);
console.log(object1 == object3);
object2.value = 1;
console.log(object1);

let toDos = [];
function remember(task) {
    toDos.push(task);
};
function rememberUrgently(task) {
    toDos.unshift(task);
};
function getTask() {
    toDos.shift();
};

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1))
};
console.log(remove([1,2,3,4,5], 2));

console.log('three'.indexOf('ee'));
let sentence = 'Shreyosi is a very kind hearted person';
sentence.max = 1;
console.log(sentence.max); // undefined
let words = sentence.split(' ');
let sameSentence = words.join(' ');
console.log(sameSentence);

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if ( number > result ) {
            result = number;
        };
    };
    return result;
};
console.log(max(4,5,1,7));
let numbers = [4,9,1,7];
console.log(max(...numbers));
let numbers2 = [4,[5,1],7];
let numbers3 = [9, ...numbers2, 2, 7]; // [ 9, 4, [ 5, 1 ], 7, 2, 7 ]
console.log(numbers3);

let coordinates = {
    x: 10,
    y: 0,
};
let newCoordinates = {
    ...coordinates,
    y: 5,
    z: 1,
}
console.log(newCoordinates);

console.log(Math.random());
console.log(Math.floor(Math.random() * 10)); // 0 to 9
console.log(Math.ceil(Math.random() * 10)); // 1 to 10

function avgOf2Number([n1, n2]) {
    return (n1 + n2) / 2
};
console.log(avgOf2Number([5, 10]));

let {username, userage} = {
    username: 'Bikram Saha',
    userage: 23,
};
console.log(userage);

function city(object) {
    return object?.city;
};
let anotherObject = {city: 'Toronto'};
console.log(city(anotherObject));

let anotherArray = [1,2,3,4];
console.log(anotherArray.slice?.());

let anObject = {
    uName: 'Bikram',
    city: 'Barasat',
    skills: ['Python', 'JavaScript']
};
let aString = JSON.stringify(anObject);
console.log(aString);
let anotherObject2 = JSON.parse(aString);
console.log(anotherObject2);

function range(start, end, step) {
    let result = [];
    if (step === undefined) {
        if (start < end) {
            step = 1;
        } else {
            step = -1;
        }
    }
    if (start < end && step >= 1) {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        };
        return result;
    } else if (start > end && step <= -1) {
        for (let i = start; i >= end; i += step) {
            result.push(i);
        };
        return result;
    } else {
        return result
    }
};
function sum(numArr) {
    let result = 0;
    for (let number of numArr) {
        result += number;
    };
    return result;
};
console.log(sum(range(1, 10)));

let JOURNAL = [
    { events: ["carrot", "exercise", "weekend"], squirrel: false },
    {
        events: [
            "bread",
            "pudding",
            "brushed teeth",
            "weekend",
            "touched tree",
        ],
        squirrel: false,
    },
    {
        events: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
        squirrel: false,
    },
    {
        events: [
            "brussel sprouts",
            "ice cream",
            "brushed teeth",
            "computer",
            "weekend",
        ],
        squirrel: false,
    },
    {
        events: [
            "potatoes",
            "candy",
            "brushed teeth",
            "exercise",
            "weekend",
            "dentist",
        ],
        squirrel: false,
    },
    {
        events: [
            "brussel sprouts",
            "pudding",
            "brushed teeth",
            "running",
            "weekend",
        ],
        squirrel: false,
    },
    {
        events: ["pizza", "brushed teeth", "computer", "work", "touched tree"],
        squirrel: false,
    },
    {
        events: ["bread", "beer", "brushed teeth", "cycling", "work"],
        squirrel: false,
    },
    { events: ["cauliflower", "brushed teeth", "work"], squirrel: false },
    { events: ["pizza", "brushed teeth", "cycling", "work"], squirrel: false },
    { events: ["lasagna", "nachos", "brushed teeth", "work"], squirrel: false },
    { events: ["brushed teeth", "weekend", "touched tree"], squirrel: false },
    {
        events: ["lettuce", "brushed teeth", "television", "weekend"],
        squirrel: false,
    },
    { events: ["spaghetti", "brushed teeth", "work"], squirrel: false },
    { events: ["brushed teeth", "computer", "work"], squirrel: false },
    { events: ["lettuce", "nachos", "brushed teeth", "work"], squirrel: false },
    { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
    { events: ["brushed teeth", "work"], squirrel: false },
    { events: ["cauliflower", "reading", "weekend"], squirrel: false },
    { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
    {
        events: ["lasagna", "brushed teeth", "exercise", "work"],
        squirrel: false,
    },
    {
        events: ["spaghetti", "brushed teeth", "reading", "work"],
        squirrel: false,
    },
    {
        events: ["carrot", "ice cream", "brushed teeth", "television", "work"],
        squirrel: false,
    },
    { events: ["spaghetti", "nachos", "work"], squirrel: false },
    {
        events: [
            "cauliflower",
            "ice cream",
            "brushed teeth",
            "cycling",
            "work",
        ],
        squirrel: false,
    },
    { events: ["spaghetti", "peanuts", "computer", "weekend"], squirrel: true },
    {
        events: [
            "potatoes",
            "ice cream",
            "brushed teeth",
            "computer",
            "weekend",
        ],
        squirrel: false,
    },
    {
        events: ["potatoes", "ice cream", "brushed teeth", "work"],
        squirrel: false,
    },
    {
        events: ["peanuts", "brushed teeth", "running", "work"],
        squirrel: false,
    },
    { events: ["potatoes", "exercise", "work"], squirrel: false },
    { events: ["pizza", "ice cream", "computer", "work"], squirrel: false },
    { events: ["lasagna", "ice cream", "work"], squirrel: false },
    { events: ["cauliflower", "candy", "reading", "weekend"], squirrel: false },
    {
        events: ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
        squirrel: false,
    },
    { events: ["potatoes", "brushed teeth", "work"], squirrel: false },
    { events: ["carrot", "work"], squirrel: false },
    { events: ["pizza", "beer", "work", "dentist"], squirrel: false },
    { events: ["lasagna", "pudding", "cycling", "work"], squirrel: false },
    {
        events: ["spaghetti", "brushed teeth", "reading", "work"],
        squirrel: false,
    },
    {
        events: ["spaghetti", "pudding", "television", "weekend"],
        squirrel: false,
    },
    {
        events: ["bread", "brushed teeth", "exercise", "weekend"],
        squirrel: false,
    },
    { events: ["lasagna", "peanuts", "work"], squirrel: true },
    { events: ["pizza", "work"], squirrel: false },
    { events: ["potatoes", "exercise", "work"], squirrel: false },
    { events: ["brushed teeth", "exercise", "work"], squirrel: false },
    {
        events: ["spaghetti", "brushed teeth", "television", "work"],
        squirrel: false,
    },
    { events: ["pizza", "cycling", "weekend"], squirrel: false },
    { events: ["carrot", "brushed teeth", "weekend"], squirrel: false },
    { events: ["carrot", "beer", "brushed teeth", "work"], squirrel: false },
    { events: ["pizza", "peanuts", "candy", "work"], squirrel: true },
    {
        events: ["carrot", "peanuts", "brushed teeth", "reading", "work"],
        squirrel: false,
    },
    {
        events: ["potatoes", "peanuts", "brushed teeth", "work"],
        squirrel: false,
    },
    {
        events: ["carrot", "nachos", "brushed teeth", "exercise", "work"],
        squirrel: false,
    },
    {
        events: ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
        squirrel: false,
    },
    {
        events: ["lasagna", "brushed teeth", "cycling", "weekend"],
        squirrel: false,
    },
    {
        events: [
            "cauliflower",
            "peanuts",
            "brushed teeth",
            "computer",
            "work",
            "touched tree",
        ],
        squirrel: false,
    },
    {
        events: ["lettuce", "brushed teeth", "television", "work"],
        squirrel: false,
    },
    {
        events: ["potatoes", "brushed teeth", "computer", "work"],
        squirrel: false,
    },
    { events: ["bread", "candy", "work"], squirrel: false },
    { events: ["potatoes", "nachos", "work"], squirrel: false },
    {
        events: ["carrot", "pudding", "brushed teeth", "weekend"],
        squirrel: false,
    },
    {
        events: [
            "carrot",
            "brushed teeth",
            "exercise",
            "weekend",
            "touched tree",
        ],
        squirrel: false,
    },
    { events: ["brussel sprouts", "running", "work"], squirrel: false },
    { events: ["brushed teeth", "work"], squirrel: false },
    {
        events: ["lettuce", "brushed teeth", "running", "work"],
        squirrel: false,
    },
    { events: ["candy", "brushed teeth", "work"], squirrel: false },
    {
        events: ["brussel sprouts", "brushed teeth", "computer", "work"],
        squirrel: false,
    },
    { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
    { events: ["cauliflower", "brushed teeth", "weekend"], squirrel: false },
    {
        events: ["spaghetti", "candy", "television", "work", "touched tree"],
        squirrel: false,
    },
    { events: ["carrot", "pudding", "brushed teeth", "work"], squirrel: false },
    { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
    {
        events: ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
        squirrel: false,
    },
    { events: ["pizza", "brushed teeth", "work"], squirrel: false },
    { events: ["spaghetti", "peanuts", "exercise", "weekend"], squirrel: true },
    {
        events: ["bread", "beer", "computer", "weekend", "touched tree"],
        squirrel: false,
    },
    { events: ["brushed teeth", "running", "work"], squirrel: false },
    {
        events: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
        squirrel: false,
    },
    {
        events: ["lasagna", "brushed teeth", "television", "work"],
        squirrel: false,
    },
    {
        events: ["cauliflower", "brushed teeth", "running", "work"],
        squirrel: false,
    },
    { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
    { events: ["carrot", "reading", "weekend"], squirrel: false },
    { events: ["carrot", "peanuts", "reading", "weekend"], squirrel: true },
    {
        events: ["potatoes", "brushed teeth", "running", "work"],
        squirrel: false,
    },
    {
        events: ["lasagna", "ice cream", "work", "touched tree"],
        squirrel: false,
    },
    {
        events: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
        squirrel: false,
    },
    { events: ["pizza", "brushed teeth", "running", "work"], squirrel: false },
    { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
    {
        events: ["bread", "brushed teeth", "television", "weekend"],
        squirrel: false,
    },
    {
        events: ["cauliflower", "peanuts", "brushed teeth", "weekend"],
        squirrel: false,
    },
];

function journalEvents(journal) {
  let allEvents = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!allEvents.includes(event)) {
        allEvents.push(event);
      };
    };
  };
  return allEvents;
};

function phi(table) {
    return (
        (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt(
            (table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]),
        )
    );
};

function tableFor(event, journal) {
  let table = [0,0,0,0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i];
    let index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  };
  return table;
};

for (let event of journalEvents(JOURNAL)) {
  console.log(`${event}: ${phi(tableFor(event, JOURNAL))}`)
};
