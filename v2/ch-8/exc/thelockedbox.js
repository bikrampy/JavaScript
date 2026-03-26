const box = new (class {
    locked = true;
    #content = [];
    unlock() {
        this.locked = false;
    }
    lock() {
        this.locked = true;
    }
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this.#content;
    }
})();

function withBoxUnlocked(body) {
    if (box.locked) {
        box.unlock();
    };
    try {
        return body();
    } catch(e) {
        console.log(`Error: ${e}`);
    } finally {
        box.lock();
    }
};

console.log(withBoxUnlocked(() => {
    box.content.push("gold piece");
    return box.content;
}));

console.log(withBoxUnlocked(() => {
    box.lock();
    return box.content;
}));
