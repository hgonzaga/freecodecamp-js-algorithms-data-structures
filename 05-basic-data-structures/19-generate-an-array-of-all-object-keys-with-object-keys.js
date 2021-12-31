/*
Generate an Array of All Object Keys with Object.keys():
Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it
receives as an argument.

- The users object should only contain the keys Alan, Jeff, Sarah, and Ryan
- The getArrayOfUsers function should return an array which contains all the keys in the users object
*/
let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // Only changed code below this line
    let users = [];
    for (let user in obj) {
        users.push(user);
    }
    return users;
    // Only changed code above this line
}

console.log(getArrayOfUsers(users));