/*
Use Closure to Protect Properties Within an Object from Being Modified Externally:
Change how weight is declared in the Bird function so it is a private variable.
Then, create a method getWeight that returns the value of weight 15.

- The weight property should be a private variable and should be assigned the value of 15.
- Your code should create a method in Bird called getWeight that returns the value of the private variable weight.
- Your getWeight function should return the private variable weight.
*/
function Bird() {
    let weight = 15;
    this.getWeight = () => weight;
}

let ducky = new Bird();
console.log(ducky.getWeight());