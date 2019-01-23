// JavaScript Document
var todos = [
	"Clean Room",
	"Brush Teeth",
	"Exercise",
	"Study Javascript",
	"Eat healthy"
];
	
console.log("My Todo List");
/*for (var i=0; i<todos.length; i++){
	var a = i +1;
	console.log(a+". "+todos[i] + "!");
}*/

/*todos.forEach(function(i, a){
		console.log(a+". ", i); 
	})*/
	
todos.forEach(logTodos);

function logTodos(todos, i){
		a = i + 1;
		console.log(a+". ", todos); 
	}