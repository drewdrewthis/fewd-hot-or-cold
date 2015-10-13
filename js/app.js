
$(document).ready(function(){
	

	var counter = 0,
		secretNum = null;

  	// New Game Function 
  	function newGame(){
  		$('#feedback').text("Make your Guess!");
  		$('ul#guessList').text('');
  		counter = 0;
  		$('#count').text(counter);
  		// Create Secret Number
  		secretNum = Math.floor(Math.random() * 100 + 1);
  		console.log(secretNum);
  	};

  	// Compare User Input to Secret Number
  	function compare(userNum,secretNum) {
  		if(userNum>100){
  			$('#feedback').html("Too high! Between 1 and 100");
  		}
  		else if(userNum == secretNum) {
  			alert('yaas!');
  			newGame();
  		} else {
  			var diff = Math.abs(userNum - secretNum);
  			// Tell the User Hot or Cold
  			if(diff<5) {
  				$('#feedback').text("So warm!");
  			}
  			else if(diff<20) {
  				$('#feedback').text("Warm!");
  			}
  			else if(diff<50) {
  				$('#feedback').text("Cold..");
  			}
  			else if(diff<80) {
  				$('#feedback').text("So cold..");
  			}
  		}
  	};	
  	
  	// Accept/Evaluate User Input
  	$('form').submit(function(e) {
  		e.preventDefault();
  		var userNum = $('#userGuess').val();
  		$('#userGuess').val([]);
  		console.log(userNum);
  		if(!parseInt(userNum))
  			$('#feedback').text("That's not a number!");
  		else {
  			$('#feedback').text("Nice!");
  			// Count Guesses
  			counter++;
  			$('#count').text(counter);
  			$('ul#guessList').append("<li>"+userNum+"</li>");
  		};
  		compare(userNum,secretNum);
  	});

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


