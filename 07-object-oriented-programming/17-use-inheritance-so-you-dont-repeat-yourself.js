/*
Use Inheritance So You Don't Repeat Yourself:
The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.

- Animal.prototype should have the eat property.
- Bear.prototype should not have the eat property.
-*/
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};