/*
Use Destructuring Assignment to Extract Values from Objects:
Replace the two assignments with an equivalent destructuring assignment.
It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

- You should remove the ES5 assignment syntax.
- You should use destructuring to create the today variable.
- You should use destructuring to create the tomorrow variable.
- today should be equal to 77 and tomorrow should be equal to 80.
 */
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change coded below this line

const {today, tomorrow} = HIGH_TEMPERATURES;

// Only change coded above this line