// Database contains our users

var database = [
	{
		username: "Miren",
		password: "supersecret!!"
	}
]

// newsfeed contains usernames and their statuses

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

// signin

var userNamePrompt = prompt("Please enter your username.")
var passwordPrompt = prompt("Please enter your password.")

function signIn(user, pass) {
	if (user === database[0].username && 
		pass === database[0].password) {
		console.log(newsfeed);
	} else {
		alert("Username and password incorrect. Please try again.")
	}

}

signIn(userNamePrompt,passwordPrompt)