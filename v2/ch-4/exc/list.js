function arrayToList(arr) {
    let resultList = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        resultList = {
            value: arr[i],
            rest: resultList
        };
    };
    return resultList;
};
console.log(arrayToList([1,2,3]));

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  };
  return array;
};
console.log(listToArray({
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: {
                value: 4,
                rest: null
            },
        },
    },
}));

function prepend(element, list) {
    return {value: element, rest: list};
};
function nth(list, number) {
    if (list == null) {
        return undefined;
    } else if (number == 0) {
        return list.value;
    } else {
        return nth(list.rest, number - 1)
    }
};
console.log(nth({
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null,
        },
    },
}, 2));
