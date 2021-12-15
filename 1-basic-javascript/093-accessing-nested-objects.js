/*
Accessing Nested Objects:
Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable.
Use dot notation for all properties where possible, otherwise use bracket notation.

- gloveBoxContents should equal the string maps.
- Your code should use dot and bracket notation to access myStorage.
 */
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];