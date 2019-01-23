var dbase = [
	{
		username: "topsite",
		password: "ayorinde"
	},
	{
		username: "stat",
		password: "1234"
	}
]

var newsfeed = [
	{
		username: "Oluwaseun",
		timeline: "So tired of all the leaarning"
	},
	{
		username: "Babakunle",
		timeline: "I am the Manager of Topsite"
	},
	{
		username: "Ridwan",
		timeline: "Large Heart is where i work"
	}	
]

var userN = prompt("Enter Username");
var userP = prompt("Enter Password");

signIn(userN, userP);

function userReg(user,pass){
	for (var i=0; i<dbase.length; i++){
		if(dbase[i].username==user && 
			dbase[i].password==pass)
			{
				//console.log("Yes");
				return true;
			}
	}
	return false
}
function signIn(user,pass){
	console.log("You logged in as: ", user, pass);
	if(userReg(user,pass)==true){
		for(var i=0; i<newsfeed.length; i++){
			a=i+1;
			console.log(a,". ", newsfeed[i].username," -",  newsfeed[i].timeline);
		}
	}
	else alert("Incorrect Signin"); 
}
//console.log(dbase[0].username);