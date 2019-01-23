var button = document.getElementById("enter");
var input = document.getElementById("user_input");
var ul = document.querySelector("ul");

button.addEventListener("click", addListClick)
input.addEventListener("keypress", addListKey)

function addListKey(event){
	if(event.keyCode === 13)
	{
		if(inputLength() > 0) createListE();
		else alert("Enter Programme to Add");
	}
}
function addListClick(){
	if(inputLength() > 0) createListE();
	else alert("Enter Programme to Add");
}
function createListE(){
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li); 
	input.value  = "";
}
function inputLength(){ return input.value.length; }
/*var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
	console.log("You click me!!!");
})*/