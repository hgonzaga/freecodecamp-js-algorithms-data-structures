/*
Use an IIFE to Create a Module:
Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

- funModule should be defined and return an object.
- funModule.isCuteMixin should access a function.
- funModule.singMixin should access a function.
*/
let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();