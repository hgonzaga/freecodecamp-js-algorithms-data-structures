/*
Reset an Inherited Constructor Property:
Fix the code so duck.constructor and beagle.constructor return their respective constructors.

- Bird.prototype should be an instance of Animal.
- duck.constructor should return Bird.
- Dog.prototype should be an instance of Animal.
- beagle.constructor should return Dog.
*/
function Animal() {
}

function Bird() {
}

function Dog() {
}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only changed code below this line

let duck = new Bird();
let beagle = new Dog();

Bird.prototype.constructor = Bird;
console.log(Bird.prototype);
console.log(duck.constructor);

Dog.prototype.constructor = Dog;
console.log(Dog.prototype);
console.log(beagle.constructor);
