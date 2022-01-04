/*
Understand the Constructor Property:
Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if
the candidate is a Dog, otherwise return false.

- joinDogFraternity should be defined as a function.
- joinDogFraternity should return true if candidate is an instance of Dog.
- joinDogFraternity should use the constructor property.
*/
function Dog(name) {
    this.name = name;
}

// Only changed code below this line
function joinDogFraternity(candidate) {
    return candidate.constructor === Dog;
}