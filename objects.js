// Arrays
const arr = [1, 2, 3];

arr.length; // returns 3 since there are three objects in the array

console.log(arr[0]); // goes to object with the index number 0 (1)

arr[0] = 2; // changes the value of the object at the 0 index

arr.push(1); // puts the item on the end of the array
arr.pop(); // removes an item at the end of the array
arr.unshift('something'); // puts item at the beginning of the array
arr.shift(); // removes the item from the beginning of the array
arr.reverse(); // flips the array around

// +=;
// a = a + 1;
// -=;
// a = a - 1;
// /=;
// a = a / 1;
// *=;
// a = a * 1;
// %=;
// a = a % 1;



// {} Objects
const turtle = {
	name: 'marvin',
	age: 102,
	hungry: true,
	1: 2, // you can do this, but it could confuse JS
	clothes: ['blue shirt', 'red shirt', {}, {}],
	family: {
		father: '',
		momma: ""
	}
};

turtle.name; // returns "marvin"
turtle.name = 'merdle the turtle'; // changes name value
turtle['hungry'] = false; // changes hungry status

const bird = {};

bird.name = 'dee'; // creates name attribute with the value 'dee'
turtle.speed = 'slow'; // creates speed attribute and value



// Practice:

// Make two objects with five properties, access each property in
// the console.

// First object you'll make like the first example (turtle).
const objectOne = {
	name: 'mark',
	age: 24,
	hometown: 'New York City',
	employment: false
};

objectOne;

// Second object you'll create like the second example (bird).
const objectTwo = {};

objectTwo.name = 'lisa';
objectTwo.age = 34;
objectTwo.hometown = 'Columbus';
objectTwo.employment = true;

objectTwo;
