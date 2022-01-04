/*
Extend Constructors to Receive Arguments:
Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs
fixed at 4.
Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.

- Dog should receive an argument for name.
- Dog should receive an argument for color.
- Dog should have property numLegs set to 4.
- terrier should be created using the Dog constructor.
*/
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("Alf", "gray");
console.log(terrier);