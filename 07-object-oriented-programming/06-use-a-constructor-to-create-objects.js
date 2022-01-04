/*
Use a Constructor to Create Objects:
Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

- hound should be created using the Dog constructor.
- Your code should use the new operator to create an instance of Dog.
 */
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only changed code below this line
let hound = new Dog();