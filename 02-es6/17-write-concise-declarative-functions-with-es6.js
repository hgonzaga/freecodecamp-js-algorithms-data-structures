/*
Write Concise Declarative Functions with ES6:
Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

- Traditional function expression should not be used.
- setGear should be a declarative function.
- bicycle.setGear(48) should change the gear value to 48.
*/
// Only changed code below this line
const bicycle = {
        gear: 2,
        setGear(newGear) {
            this.gear = newGear;
        }
    }
;
// Only changed code above this line
bicycle.setGear(3);
console.log(bicycle.gear);