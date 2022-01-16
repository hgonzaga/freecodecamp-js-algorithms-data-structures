/*
Make a Person:
Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one
argument and it has to be a string. These methods must be the only available means of interacting with the object.

- No properties should be added. Object.keys(bob).length should always return 6.
- bob instanceof Person should return true.
- bob.firstName should return undefined.
- bob.lastName should return undefined.
- bob.getFirstName() should return the string Bob.
- bob.getLastName() should return the string Ross.
- bob.getFullName() should return the string Bob Ross.
- bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").
- bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").
- bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").
- bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").
- bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").
*/
const Person = function (firstAndLast) {
    // Only changed code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;

    this.getFirstName = function () {
        return fullName.split(/\s+/)[0];
    };

    this.getLastName = function () {
        return fullName.split(/\s+/)[1];
    };

    this.getFullName = function () {
        return fullName;
    };

    this.setFirstName = function (name) {
        fullName = `${name} ${fullName.split(/\s+/)[1]}`;
    };

    this.setLastName = function (name) {
        fullName = `${fullName.split(/\s+/)[0]} ${name}`;
    };

    this.setFullName = function (name) {
        fullName = name;
    };
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());