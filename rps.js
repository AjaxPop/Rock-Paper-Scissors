$(document).ready(function () {
    
	/*When the user clicks on the Rock button
	* Disable the other buttons
	*/
    $("#rock").one("click", function () {
        $("#rock").prop("disabled", true);
        $("#paper").prop("disabled", true);
        $("#scissors").prop("disabled", true);
        $("#player").append("Rock");
        comPick("Rock");
    });
	
	/*When the user clicks on the Paper button
	* Disable the other buttons
	*/
    $("#paper").one("click", function () {
        $("#rock").prop("disabled", true);
        $("#paper").prop("disabled", true);
        $("#scissors").prop("disabled", true);
        $('#player').append("Paper");
        comPick("Paper");
    });
	
	/*When the user clicks on the Scissors button
	* Disable the other buttons
	*/
    $("#scissors").one("click", function () {
        $("#rock").prop("disabled", true);
        $("#paper").prop("disabled", true);
        $("#scissors").prop("disabled", true);
        $("#player").append("Scissors");
        comPick("Scissors");
    });

	//comPick - Get a random number to choose Rock or Paper or Scissors
    function comPick(playerPicked) {
		
		//Get a random number
        let comPicked = Math.floor((Math.random() * 3) + 0);

        //Com choose Papers
        if (comPicked == 0) {
			
			//Display paper to the user 
            $("#computer").append("Paper");
			
			//Change the var comPicked to a string 
			comPicked = "Paper";
			
			//Pass what the computer picked and what the player picked into results
            results(comPicked,playerPicked);
        }

        //Com choose Rock
        else if (comPicked == 1) {
            
			//Display Rock to the user 
			$("#computer").append("Rock");
			
			//Change the var comPicked to a string 
			comPicked = "Rock";
			
			//Pass what the computer picked and what the player picked into results
            results(comPicked, playerPicked);
        }

        //Com choose Scissors
        else if (comPicked == 2) {
			
			//Display Scissors to the user 
            $("#computer").append("Scissors");
			
			//Change the var comPicked to a string 
			comPicked = "Scissors";
			
			//Pass what the computer picked and what the player picked into results
            results(comPicked, playerPicked);
        }
     
    }

	//Results - Tell the user if it's a draw or if they won or if they lost. 
    function results(comPicked, playerPicked) {
		
		//Create the dialog box draw
        $("#draw").dialog({
            autoOpen: false,
            close: function (event, ui) {
                window.location.reload(true);
            }
        });

		//Create the dialog box compWon
        $("#compWon").dialog({
            autoOpen: false,
            close: function (event, ui) {
                window.location.reload(true);
            }
        });

		//Create the dialog box playWon
        $("#playWon").dialog({
            autoOpen: false,
            close: function (event, ui) {
                window.location.reload(true);
            }
        });


        //Draw
        if (comPicked == playerPicked) {
			
			//Show the dialog box
            $("#draw").dialog("open");
        }
		
		//Rock beats Scissors
        else if (comPicked == "Rock" && playerPicked == "Scissors") {
			
			//Show the dialog box
            $("#compWon").dialog("open"); 
		 }
		 else if(playerPicked == "Rock" && comPicked == "Scissors"){
			 
			 //Show the dialog box
            $("#playWon").dialog("open");
		 }
		 
		 //Paper beats rock
		  else if(comPicked == "Paper" && playerPicked == "Rock"){
			  
			  //Show the dialog box
            $("#compWon").dialog("open"); 
		 }
		 else if(comPicked == "Rock" && playerPicked == "Paper"){
			 
			 //Show the dialog box
            $("#playWon").dialog("open");
		 }
		 

		 //Scissors beats Paper 
		 else if(comPicked == "Scissors" && playerPicked == "Paper"){
			 
			 //Show the dialog box
            $("#compWon").dialog("open"); 
		 }
		 
		 else if(comPicked == "Paper" && playerPicked == "Scissors"){
			 
			 //Show the dialog box
            $("#playWon").dialog("open");
		 }	 
    }
});  