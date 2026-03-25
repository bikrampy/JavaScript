class Group {
    constructor() {
        this.resultArr = [];
    }
    add(value) {
        let willValBeAdded = true;
        for (const element of this.resultArr) {
            if (element === value) {
                willValBeAdded = false;
                break
            };
        };
        if (willValBeAdded) {
            this.resultArr.push(value);
        };
    }
    delete(value) {
        this.resultArr = this.resultArr.filter(el => el !== value)
    }
    has(value) {
        let found = false;
        for (const element of this.resultArr) {
            if (element === value) {
                found = true;
                break
            };
        };
        return found;
    }
    static from(arr) {
        let newGroup = new Group();
        for (let element of arr) {
            newGroup.add(element);
        };
        return newGroup;
    }
};

class GroupIterator {
    constructor(group) {
        this.array = group.resultArr;
        this.position = 0;
    }
    next() {
        if (this.position >= this.array.length) {
            return {done: true};
        }
        let value = this.array[this.position];
        this.position += 1;
        return {value, done: false};
    }
};

Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this);
};

let group1 = Group.from([10, 20]);
console.log(group1.has(10)); // true
console.log(group1.has(30)); // false
group1.add(10);
console.log(group1);
console.log(group1.resultArr);
group1.delete(10);
console.log(group1.has(10)); // false
console.log(group1);
for (const element of Group.from([10, 20, 'A', 'B'])) {
    console.log(element);
};
