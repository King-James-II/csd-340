var books = ["1. Akira", "2. Uzumaki", "3. Fruits Basket", "4. Death Note", 
			"5. Jojo's Bizarre Adventure", "6. Dragon Ball", "7. Sailor Moon", "8. One-Punch Man", 
			"9. YuYu Hakusho", "10. Fullmetal Alchemist"];
function ascending() {
	var asclist = "";
	for(var i = 0; i < books.length; ++i){
		asclist += books[i] + "<br>";
	}
	document.getElementById("list").innerHTML = asclist;
}
function descending() {
	var desclist = [];
	for(var i = 0; i < books.length; ++i){
		desclist += books[9-i] + "<br>";
	}
	document.getElementById("list").innerHTML = desclist;
}