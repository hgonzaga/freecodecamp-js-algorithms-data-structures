/*
Override Inherited Methods:
Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.

- penguin.fly() should return the string Alas, this is a flightless bird.
- The bird.fly() method should return the string I am flying!
*/
function Bird() {
}

Bird.prototype.fly = function () {
    return "I am flying!";
};

function Penguin() {
}

Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only changed code below this line

Penguin.prototype.fly = () => "Alas, this is a flightless bird.";

// Only changed code above this line

let penguin = new Penguin();
console.log(penguin.fly());