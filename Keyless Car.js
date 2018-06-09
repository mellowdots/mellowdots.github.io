// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

function checkDriverAge() {
	var age = prompt("Welcome to your car. Please enter your age.");
	age=Number(age);
	if (age>0 && age<18) {
		alert("Sorry, too young to operate this car.")
	} else if (age===18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!")
	} else if (age>18) {
		alert("Enjoy the ride.")
	} else {
		alert("Invalid age.")
	}
}

// Testing out same function but with no prompts or alerts 

function checkDriverAge(age) {
	if (age>0 && age<18) {
		return "Sorry, too young to operate this car."
	} else if (age===18) {
		return "Congratulations on your first year of driving. Enjoy the ride!"
	} else if (age>18) {
		return "Enjoy the ride."
	} else {
		return "Invalid age."
	}
}

// Same but with Function Expression method

var checkDriverAge2 = function() {
	var age = prompt("Welcome to your car. Please enter your age.");
	age=Number(age);
	if (age>0 && age<18) {
		alert("Sorry, too young to operate this car.")
	} else if (age===18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!")
	} else if (age>18) {
		alert("Enjoy the ride.")
	} else {
		alert("Invalid age.")
	}
}