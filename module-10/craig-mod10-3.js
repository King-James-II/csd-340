		function mouseOver(x) {
  			x.style.color = "red";
		}
		function mouseOut(x) {
  			x.style.color = "black";
		}
		function smile(x) {
			x.src = "happytear.png";
		}
		function frown(x) {
			x.src = "sad.png";
		}
		function daylight(x) {
			x.src = "togetherday.jpg";
		}
		function night(x) {
			x.src = "alonenight.jpg";
		}
		function clickbg() {
			if (document.body.style.backgroundColor == "white")
			{
				document.body.style.backgroundColor = "#3CB371";
			}
  			else
  			{
  				document.body.style.backgroundColor = "white";
  			}
		}