// Boolean
let doorsOpen = true;

doorsOpen = false;

!doorsOpen; // this returns as true, but doesn't change doorsOpen

doorsOpen = !doorsOpen; // this changes the value of doorsOpen to true

1 > 2 // false
1 < 2 // true
1 >= 2 // false
1 <= 2 // true

1 == 1
// triple equals is the more strict, even checks type
1 === 1



// Conditionals
let a = 1;

if (1 > 2) {
	console.log(a + ' is greater than 2');
} else {
	console.log(a + " is less than 2");
}

if (a > 2) {
	// some code
} else if (a === 2) {
	// some code
} else {
	// some code
}



// && (and) operator and || (or) operator
5 === 5 && 10 === 10 // would evaluate as true
5 === 4 && 10 === 10 // would evaluate as false; one of them is false

5 === 5 || 4 > 6 // would evaluate as true if one side is true

null || 5; // returns 5
null || 0; // returns 0

const input = '';
const username = input || "sjdfdjsfkdjdi";
username; // returns sjdfdjsfkdjdi since input had no value

const a = null;
const b = null;
b === a; // returns as true
