/*
Remember to Set the Constructor Property when Changing the Prototype:
Define the constructor property on the Dog prototype.

- Dog.prototype should set the constructor property.
 */
function Dog(name) {
    this.name = name;
}

// Only changed code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};
console.log(Dog.prototype);