// user back choices
var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var win = 0;
var loss  = 0;
var guessLeft = 9;
// the computer choices are numbers between 0.1-0.9 multiply the option's length. 
var computerChoice = options[Math.floor(Math.random() * options.length)];
//for the user we have a new array that is on the key board.
var userLetters = new Array();

//reset values of user input array, guessleft and computer choose another letter
function resetScore(){
	userLetters.splice(0,userLetters.length);	
	guessLeft = 9;
	computerChoice = options[Math.floor(Math.random() * options.length)];
}

//Update scoreboard
function updateScoreboard(win, loss, guessLeft, userLetters){

	var score = "Wins: " + win + "<br>Loss: " + loss + "<br>Guess left: " + guessLeft + "<p>Your guess so far</p> ";
	
	//Changing the color user input letters
	var ul = document.getElementById("user-letters");
  	ul.style.color = "mediumblue";

  	//injecting HTML
    document.getElementById("score").innerHTML = score;			
    document.getElementById("user-letters").innerHTML = userLetters;
    //console.log(computerChoice);
}

document.onkeydown = function(event) {	    	  		    
	
	//If key pressed is an alphabet
	if (event.keyCode >= 65 && event.keyCode <= 90){
		var userGuess = event.key.toLowerCase();
		guessLeft--;
		//Append user input letter to the array
		userLetters.push(userGuess);

		//If user guess is correct
		if(userGuess===computerChoice){
			win++;	
			resetScore();
    	}
    	updateScoreboard(win, loss, guessLeft, userLetters);
			
		//If guess left is 0
		if (guessLeft<1){
			loss++;
			resetScore();
		}
		updateScoreboard(win, loss, guessLeft, userLetters);
	}
	else{
		alert("Enter an alphabet");
	}
};

