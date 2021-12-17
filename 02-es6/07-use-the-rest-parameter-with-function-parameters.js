/*
Use the Rest Parameter with Function Parameters:
Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of
arguments and return their sum.

- The result of sum(0,1,2) should be 3
- The result of sum(1,2,3,4) should be 10
- The result of sum(5) should be 5
- The result of sum() should be 0
- sum should be an arrow function which uses the rest parameter syntax (...) on the args parameter.
 */
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}