// Loops
const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
};

// Write a for loop to cycle through 'arr' and print out whether
// the number is odd or even.

for (let i = 0; i < arr.length; i++) {
	if (0 === arr[i] % 2) {
		console.log('even');
	} else {
		console.log('odd');
	}
};

// Now write a loop that will empty the array and leave a message
// of each item leaving the array on each iteration of the loop.

// WHAT I CAME UP WITH:
for (let i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i] + " has been taken out of the array.");
	arr.pop();
};
// OR YOU CAN DO THIS:
for (let i = 0; i < 3; i++) {
	const poppedItem = arr.pop();
	console.log(poppedItem + ' has left the building');
	console.log(arr);
};



// Looping Through Objects (objects keys)

// for in loop
const turtle = {
	name: 'marvin',
	age: 102,
	hungry: true
};

for (let temp in turtle) { // temp represents keys (name, age, ...)
	console.log(temp, ' this is temp');
	console.log(turtle[temp]); // turtle[temp] is marvin, 102, true
};

// Write a for in loop for the turtle and on each key value pair
// I want you to add on to it the message "Kowabunga".
for (let temp in turtle) { // temp = properties in an object
	turtle[temp] += ' Kowabunga';
	console.log(temp, ': ', turtle[temp]);
};



// Loop Js (https://jimbojones1.gitbooks.io/gravy-train/content/02_front_end/loopLab.html)

// Use a for loop to solve the problems.

for (let i = 0; i <= 20; i++) {
	if (i % 2 === 0) {
		console.log(i + " is even");
	} else {
		console.log(i + " is odd");
	}
};

let myBagOfBeans = 50;
for (let i = 100; i >= 0; i--) {
	if (i % 2 === 0) {
		myBagOfBeans += i;
		console.log(myBagOfBeans);
	}
};

const arrayOfStringsRememberIcanNameMyVariablesAnythingIWant = ['cheese', 'pepperoni', 'sausage', 'coca cola', 'lemonade', 'dough', 'beer', 'wine', 'ranch', 'blue cheese', 'bbq sauce'];
const drinkArray = [];
const foodArray = [];
const sauceArray = [];
for (let i = 0; i < arrayOfStringsRememberIcanNameMyVariablesAnythingIWant.length; i++) {
	if (arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'cheese') {
		foodArray.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	} else if (arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'pepperoni') {
		foodArray.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	} else if (arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'sausage') {
		foodArray.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	} else if (arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'coca cola') {
		drinkArray.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	} else if (arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'lemonade') {
		drinkArray.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	} else if (arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'dough') {
		foodArray.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	} else if (arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'beer') {
		drinkArray.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	} else if (arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'wine') {
		drinkArray.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	} else if (arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'ranch') {
		sauceArray.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	} else if (arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'blue cheese') {
		foodArray.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	} else if (arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i] === 'bbq sauce') {
		sauceArray.push(arrayOfStringsRememberIcanNameMyVariablesAnythingIWant[i]);
	} else {
		console.log("Invalid Food");
	}
};
console.log(drinkArray);
console.log(foodArray);
console.log(sauceArray);

const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30];
const notNumArray = [];
for (let i = 0; i < mixedArray.length; i++) {
	if (typeof(mixedArray[i]) === typeof('string')) {
		notNumArray.push(mixedArray[i]);
	} else if (typeof(mixedArray[i]) === typeof({barry: "Mannilow",})) {
		notNumArray.push(mixedArray[i]);
	} else if (typeof(mixedArray[i]) === typeof(null)) {
		notNumArray.push(mixedArray[i]);
	}
};
console.log(mixedArray);
console.log(notNumArray);

const food = ['bun', "jalepeno cheddar", "elk", "beef", "1954 ford mustang", 1.14, 1.23, 'hot dog', "gary clark jr", " I'lll never fall in love again", "mustard", "ketchup", 30, 50, 80, "grilled onions", "egg", "Dr. Suess"];
const dinner = [];
for (let i = 0; i < food.length; i++) {
	if (food[i] === 'bun') {
		dinner.push(food[i]);
	} else if (food[i] === 'jalepeno cheddar') {
		dinner.push(food[i]);
	} else if (food[i] === 'beef') {
		dinner.push(food[i]);
	} else if (food[i] === 'mustard') {
		dinner.push(food[i]);
	} else if (food[i] === 'ketchup') {
		dinner.push(food[i]);
	} else if (food[i] === 'grilled onions') {
		dinner.push(food[i]);
	} else if (food[i] === 'egg') {
		dinner.push(food[i]);
	}
};
console.log(dinner);

// Alternative way:
// if (food[i] === 'bun' || food[i] === "jalepeno cheddar" || ...)


// Use a for in loop to loop through objects and print property names.

const colorObjects = {red: 'red', blue: 'blue', cyan: 'cyan'};
for (let temp in colorObjects) {
	console.log(temp + ": " + colorObjects[temp]);
};

const seinfeld = {cosmo: "kramer", jerry: "Seinfeld", george: "constanza", elaine: "bennis"};
for (let temp in seinfeld) {
	console.log(temp + ": " + seinfeld[temp]);
};

const profile = {name: "Elon Musk", occupation: "space man", hobbies: ["paypal", "space X", "rocket science"]};
for (let temp in profile) {
	console.log(temp + ": " + profile[temp]);
};

// Use a for loop or a for in loop and print the object properties
// or the value of the index in the array. Write in a comment what
// loop you are using and why.

const oldTime = ["benton flippen", "carter family", "roscoe Holcomb", "gus cannon", "Tommy Jarrell"];
// I'm going to use a for loop since the oldTime variable is an
// array and won't easily confuse me in keeping track of their index
// number values.
for (let i = 0; i < oldTime.length; i++) {
	console.log("The value of index " + i + "is " + oldTime[i]);
};

const sandwhich = {name: "sunday morning special", bread: "ciabatta", cheese: "pepper jack", green: "arugala", redStuff: "cherry tomatoes", heated: true};
// I'm going to use a for in loop since we're dealing with an
// object's key-value pairs, so temp will allow me to access both the
// keys and the values very easily.
for (let temp in sandwhich) {
	console.log(temp + ": " + sandwhich[temp]);
}; // I don't have to use temp. I could use prop or anything else.

const zeppelin = ["In through the out door", "Zep 1", "Zep 2", "Zep3", "Zep4", "Physical Graffiti"];
// I'm going to use a for loop for the same reasons as I had with the
// oldTime for loop.
for (let i = 0; i < zeppelin.length; i++) {
	console.log("The value of index " + i + "is: " + zeppelin[i]);
};



// JavaScriptWeekOne Homework

// Data Types
PI; // number
"Dennis Samuel Sheehan"; // string
[1, 2, 3, 5, 7]; // object
87; // number
true; // boolean

// Array Manipulation
const homeworkArray = [];
homeworkArray.push("Dublin");
homeworkArray.push("Paris");
homeworkArray.push("Madrid");
homeworkArray.shift();
homeworkArray.shift();
homeworkArray.push("Rome");
homeworkArray.push("Tokyo");
homeworkArray.push("Sicily");
homeworkArray.pop();
homeworkArray[1] = "Japan";
homeworkArray[0] = "Where am I going?";
homeworkArray.push(8);

// Conditional Trials
let purchaseAlcohol = function() {
// Could also do: function purchaseAlcohol(){
	const age = prompt("How old are you?");
	if (age >= 21) {
		console.log("Go ahead and have a drink.");
	} else {
		console.log("Don't you think you're a little young for that? Don't break the law, kid.");
	}
};

let fahrenheitToCelsius = function (integer) {
	let F = integer;
	let C = F - 32;
	C = C * 1.8;
	console.log(F + " degrees Fahrenheit is " + C + " degrees Celsius");
};



// Post-Homework Problem
// Loop down from 50 and when you reach 21, ask the user if they
// are thirsty. Then print their response to the console.
for (let i = 50; i >= 0; i--){
	if (i === 21){
		console.log("User age is " + i);
		const thirst = prompt("Are you thirsty?");
		console.log("Response to question of if they are thirsty: " + thirst);
	} else {
		console.log("User age is " + i);
	}
};
