class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}
class Dog extends Animal {
    makeSound() {  // overriding
        console.log("Woof! Woof!");
    }
}
class Cat extends Animal {
    makeSound() {  // overriding
        console.log("Meow! Meow!");
    }
}
const animals = [new Dog(), new Cat(), new Animal()];
animals.forEach((animal) => {
    animal.makeSound();
});