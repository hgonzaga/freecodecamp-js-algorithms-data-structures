/*
Create a Method on an Object:
Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.

- dog.sayLegs() should be a function.
- dog.sayLegs() should return the given string - note that punctuation and spacing matter.
*/
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: () => `This dog has ${dog.numLegs} legs.`
};

console.log(dog.sayLegs());