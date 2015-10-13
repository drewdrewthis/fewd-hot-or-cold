
$(document).ready(function(){
	

	var counter = 0;

  	// New Game Function 
  	function newGame(){
  		// Create Secret Number
  		var secretNum = Math.floor(Math.random() * 100 + 1);
  		console.log(secretNum);
  	};
  	
  	// Accept/Evaluate User Input
  	$('form').submit(function(e) {
  		e.preventDefault();
  		var userNum = $('#userGuess').val();
  		console.log(userNum);
  		if(!parseInt(userNum))
  			$('#feedback').text("That's not a number!");
  		else {
  			$('#feedback').text("Nice!");
  			// Count Guesses
  			counter++;
  			$('#count').text(counter);
  		}
  	});

  	// Compare User Input to Secret Number

  	// Tell the User Hot or Cold

  	// Add Guess to Guess List

  	// Count Guesses

  	// Make New Game Button Operational

  	$('.new').on('click', function() {
  		newGame();
  	});

  	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	newGame();
});


