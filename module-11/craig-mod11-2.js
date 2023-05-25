var todo = [];
function add() {
	var newitem = document.getElementById('item').value;
	todo.push(newitem);
	alert(newitem + " was added to the to do list!");
}
function deletelast() {
	todo.pop();
}
function print() {
	var formatlist = "";
	for(var i = 0; i < todo.length; ++i){
		formatlist += "Item " + (i+1) + " = " + todo[i] + "<br>";
	}
 		document.getElementById("output").innerHTML = formatlist;
 	if (todo.length ==0) {
 		document.getElementById("output").innerHTML = "";
 	}
}