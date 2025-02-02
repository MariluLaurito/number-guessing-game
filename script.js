

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;

}


function getPlayerGuess() {
    while(true) {

        let playerInput = prompt("😈 Guess a number between 1 and 100");

        if(playerInput === null) {
            return playerInput
        }

        if((playerInput >= 1 ) && (playerInput <= 100)) {
            return playerInput = Number(playerInput);
        } else  {
            console.log("😈 Please guess a number between 1 and 100");
            continue;
        }
    }
  
}

function checkGuess(playerGuess, correctNum) {

    if(playerGuess < correctNum) {
        return "Too low"

    } else if (playerGuess > correctNum) {
        return "Too high"

    } else {
        return "You guessed right!"
    }
}


function game() {
    alert("Hello?! Can you see me!")
    alert("HINT: Open the Developer Tools with F12 and click the console tab.\nHINT: Might need to refresh the page!")
    alert("Finally you're here! I've lost my number, can you help me find it?!")

   const correctNum = generateRandomNumber();

   let attempts = 0; 
   //console.log(`No, the correct answer is ${correctNum}`)

   
    const startTime = Date.now();

    
    for(let attempts= 1; attempts <= 10; attempts++) {

       let playerNum = getPlayerGuess();

       if(playerNum === null) {
        return playerNum
        }

        
        let result = checkGuess(playerNum,  correctNum);


        if(result === "You guessed right!") {

            const endTime = Date.now();
            const elapsedTime = Math.round((endTime - startTime) / 1000); 
            let score = 100 - (attempts * 5) - elapsedTime;
            Math.round(score)

            console.log(`🥳 You legend! ${playerNum} is the correct number🎉`);
            console.log(`🌞 You used ${attempts} attempts and it took ${elapsedTime} second!`);
            return console.log(`🌞 Your final score is ${Math.round(score)} 🙌`);

        } else if(result === "Too low") {
                console.log(`Mh no 🙂‍↔️ no ${playerNum} is too low`)
        } else {
            console.log(`No,🙂‍↔️ no ${playerNum} is too high`)
        
        }

        
        if(attempts === 10) {
            console.log("You have used all your attempts 🙈");
            return console.log("GAME OVER 😵");
        }
    }
   
}

    
game();

