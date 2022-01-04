/*
Change the Prototype to a New Object:
Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

- Dog.prototype should be set to a new object.
- Dog.prototype should have the property numLegs.
- Dog.prototype should have the method eat().
- Dog.prototype should have the method describe().
*/
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only changed code below this line
    numLegs: 4,
    eat: () => console.log("nom nom nom"),
    describe: function () {
        console.log(`My name is ${this.name}`);
    }
};