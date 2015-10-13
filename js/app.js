
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	// New Game Function 
  	function newGame(){
  		// Create Secret Number
  		var secretNum = Math.floor(Math.random() * 100 + 1);
  		console.log(secretNum);
  	};
  	
  	// Accept/Evaluate User Input

  	// Compare User Input to Secret Number

  	// Tell the User Hot or Cold

  	// Add Guess to Guess List

  	// Count Guesses


  	newGame();
});


