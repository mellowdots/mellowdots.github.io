var newsfeed = [
	{
		username: "Bobby",
		timeline: "I'm sleepy!"
	},
	{
		username: "Sally",
		timeline: "I looove JS!"
	}
]

// Database contains our users

var database = [
	{
		username: "Miren",
		password: "supersecret"
	}, {
		username: "Matt",
		password: "123"
	}, {
		username: "Mel",
		password: "456"
	}
]

// Defining the username/password validation function. database[i] will scan over each item in the index due to the for loop's i++, which increases the index by 1 with each iteration and thus allows the function to progress =D
function isUserValid(username, password) {
	for (var i=0; i<database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password) {
			return true;
		}
	}
	return false
}


function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsfeed)
	}
	else {
		alert("Wrong username and password.")
	}
}

var userNamePrompt = prompt("Please enter your username.")
var passwordPrompt = prompt("Please enter your password.")

signIn(userNamePrompt,passwordPrompt)

