// old
var a = 1;
// we won't be using var anymore in favor of the two variables below

// new
const a = 1;
// const are immutable, they can't change
// trying to change "a" will cause TypeError

// let
let b = 2;
// let variable you can change, mutable (a use case of this may be in loops)
// use let sparingly, instead use const more often

const multiple = 9 * 9;
const divide = 9 / 9;
const addition = 4 + 4;
const subtraction = 4 - 4;
const modulus = 10 % 4; // result is 2

// variable names should be camelCase
const randNumber = Math.random();
// try to make something that returns a whole number between 0 and 10
let randFingerNumber = Math.floor(Math.random() * 10);
let randFingerNumber = Math.trunc(Math.random() * 10);

// typeof
// checks the data type
typeof(9); // will say integer
typeof 8; // this works too

// whole number ex. 8 is an integer
// decimal ex. 8.11111 is a float
