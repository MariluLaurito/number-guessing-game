//a) Create a blank HTML document with a script tag (Hint: it is best practice 
//  to link an external .js file). This game is going to be played completely from the 
//  console, so don’t worry about putting anything else in there.

//  b) Create a function called generateRandomNumber that returns a random 
//  integer between 1 and 100. This will be the number the player has to guess.
 function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;

}


//c) Write a function called getPlayerGuess that prompts the user to enter a 
//  guess and returns the player's input as an integer. Ensure the function handles 
//  invalid input and reprompts the user until they provide a valid number.
function getPlayerGuess() {
    while(true) {

        let playerInput = prompt("Guess a number between 1 and 100");

        if(playerInput === null) {
            return playerInput
        }

        if((playerInput >= 1 ) && (playerInput <= 100)) {
            return playerInput = Number(playerInput);
        } else  {
            console.log("Please guess a number between 1 and 100");
            continue;
        }
    }
  
}
//  d) Write a function called checkGuess that takes two parameters - the 
//  player's guess and the correct number. It should return a string indicating whether
//  the guess is too low, too high, or correct.
function checkGuess(playerGuess, correctNum) {

    if(playerGuess < correctNum) {
        return "Too low"

    } else if (playerGuess > correctNum) {
        return "Too high"

    } else {
        return "You guessed right!"
    }
}

//e) Write a function called game that implements the main game logic:
//  • Generate the random number.
//  • Initialize a counter for the number of attempts.
//  • Use a loop to repeatedly prompt the player for guesses until they 
//  guess correctly or use up a maximum of 10 attempts.
//  • Print a message indicating whether the player has won or lost after 
//  the game ends.
//  • Print the number of attempts the player used.
function game( ) {
   const correctNum = generateRandomNumber();
   //console.log(`No, the correct answer is ${correctNum}`)

   //Bonus start the timer

    //initiate attempts
    for(let attempts= 1; attempts <= 10; attempts++) {

       let playerNum = getPlayerGuess();

       if(playerNum === null) {
        return playerNum
        }

        // THIS IS THE RESULT OF THE ROUND
        let result = checkGuess(playerNum,  correctNum);


        // VALIDATE RESULT
        if(result === "You guessed right!") {
                console.log(`🥳Great guess ${playerNum} is the correct number🎉`);
                return

        } else if(result === "Too low") {
                console.log(`Mh no 🙂‍↔️ ${playerNum} is too low`)
        } else {
            console.log(`No,🙂‍↔️ ${playerNum} is too high`)
        
        }

        // END AFTER 10 TRIES
        if(attempts === 10) {
            console.log("You have used all your attempts 🙈");
            return console.log("GAME OVER");
        }
    }
   
}

    
game();

//Bonus Challenge: Implement a scoring system that rewards the player with 
//  points based on how quickly they guess the correct number.