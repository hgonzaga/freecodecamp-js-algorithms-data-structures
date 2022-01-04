/*
Verify an Object's Constructor with instanceof
Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms.
Then, use instanceof to verify that it is an instance of House.

- myHouse should have a numBedrooms attribute set to a number.
- You should verify that myHouse is an instance of House using the instanceof operator.
*/
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Only changed code below this line
let myHouse = new House(3);
console.log(myHouse instanceof House);