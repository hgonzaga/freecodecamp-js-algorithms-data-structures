/*
Use Conditional Logic with If Statements:
Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true
and return No, that was false otherwise.

- trueOrFalse should be a function
- trueOrFalse(true) should return a string
- trueOrFalse(false) should return a string
- trueOrFalse(true) should return the string Yes, that was true
- trueOrFalse(false) should return the string No, that was false
 */
function trueOrFalse(wasThatTrue) {
    // Only changed code below this line
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false"
    // Only changed code above this line
}