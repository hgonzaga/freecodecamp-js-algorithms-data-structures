/*
Use Prototype Properties to Reduce Duplicate Code:
Add a numLegs property to the prototype of Dog

- beagle should have a numLegs property.
- beagle.numLegs should be a number.
- numLegs should be a prototype property not an own property.
*/
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 2;

// Only change code above this line
let beagle = new Dog("Snoopy");
console.log(beagle);