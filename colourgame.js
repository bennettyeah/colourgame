 var colours = generateRandomColours(numSquares);
 var squares = document.querySelectorAll(".square");
 var pickedColour = pickColour();
 var colourDisplay = document.getElementById("colourDisplay");
 var messageDisplay = document.querySelector("#message");
 var h1 = document.querySelector("h1");
 //New Colours button query selector
 var resetButton = document.querySelector("#reset");
 var modeButtons = document.querySelectorAll(".mode");
 var numSquares = 6;
 

 // Initialise the game
 init();
 function init(){
	reset();
 }
 
 // Selection loop to display 3 coloured squares or 6
 for(var i = 0; i < modeButtons.length; i++) {
	 modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected"); 
		if(this.textContent === "Easy") {
			numSquares = 3;
		} else if(this.textContent === "Hard") {
			numSquares = 6;
		
		}
		reset();	
	 });
 }
 
 
 function reset(){
	colours = generateRandomColours(numSquares);
	//Pick a new random colour from array
	pickedColour = pickColour();
	//Change colourDisplay to match pickedColour
	colourDisplay.textContent = pickedColour;
	resetButton.textContent = "New Colours";
	messageDisplay.textContent = "";
	//Change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colours[i]) {
		squares[i].style.display = "block";
		squares[i].style.background = colours[i];
		} else {
		squares[i].style.display = "none";
		}
	}
	h1.style.background = "#7CA4B7";
 }
 
 
 
 
 resetButton.addEventListener("click", function(){
reset();
	});
 

 
 for(var i = 0; i < squares.length; i++) {
	 // Add initial colours to squares
	 squares[i].style.background = colours[i];
	 
	 // Add click listeners to squares
	 squares[i].addEventListener("click", function() {
		//Grab colour of clicked square
		var clickedColour = this.style.background;
		// Compare colour to pickedColour
		if(clickedColour === pickedColour) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColours(clickedColour);
			h1.style.background = clickedColour;
		} else {
			this.style.background = "#7CA4B7";
			messageDisplay.textContent = "Try Again";
		}
	 });
 }
 
 function changeColours(colours) {
	 //Loop through all squares
	 for(var i = 0; i < squares.length; i++) {
	//Change each colour to match given colour
	 squares[i].style.background = colours; 
	 }
 }
 
 function pickColour(){
	 var random = Math.floor(Math.random() * colours.length);
	 return colours[random];
 }
 
 function generateRandomColours(num){
	 //Make array 
	 var arr = []
	 //Repeat num times
	 for(var i = 0; i < num; i++) {
		 arr.push(randomColour())
		//Get random color and push into arr
		
	 }
	 //Return that array 
	 return arr;
 }
 
 function randomColour() {
	 //Pick a red from 0, -255
	 var r = Math.floor(Math.random() * 256);
	 //Pick green from 0, -255
	 var g = Math.floor(Math.random() * 256);
	 //Pick blue from 0, -255
	 var b = Math.floor(Math.random() * 256);
	 return "rgb(" + r + ", " + g + ", " + b +")";
 }
 
