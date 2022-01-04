/*
Understand Own Properties:
Add the own properties of canary to the array ownProps.

- ownProps should include the values numLegs and name.
- You should solve this challenge without using the built in method Object.keys().
- You should solve this challenge without hardcoding the ownProps array.
*/
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only changed code below this line
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
console.log(ownProps);