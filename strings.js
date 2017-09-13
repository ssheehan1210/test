// To reset the memory of a JS console, press ctrl+shift+r

let firstName = 'Sam';

let upperCase = 'Sam'.toUpperCase();

"Hello, world";
// change to "goodbye, world"
const str = "Hello, world";
str = str.replace("Hello, world", "goodbye, world");
str;

"Hello, world".replace('Hello', 'goodbye'); // only changes "Hello"

// concatentation
const hello = "Helloooo ";
const world = "worldddddd";
hello + world;
"Hello, " + "World";

// change a string into a number
parseInt("123"); // returns as an integer

// new to javascript
// string interpolation/ template strings
let name = 'Sam'
let template = `Hello ${name}, welcome to the cosmos`
// template will stay this way regardless if name is changed later
// if you wanted to have the name be changeable, you'd want template to be a part of a function
// ex. function greeting(name) {const template = yada yada}; then return template;
