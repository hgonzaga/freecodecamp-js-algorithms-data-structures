/*
Modify an Object Nested Within an Object:
Here we've defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.

- userActivity should have id, date and data properties.
- userActivity should have a data key set to an object with keys totalUsers and online.
- The online property nested in the data key of userActivity should be set to 45
- The online property should be set using dot or bracket notation.
*/
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

// Only changed code below this line
userActivity.data.online = 45;
// Only changed code above this line

console.log(userActivity);