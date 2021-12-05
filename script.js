'use strict';

//Variables:
let randomNumber = Math.trunc(Math.random()*20 + 1);
// Math.random generates a random number between 0 and 1. We multiply it by 20 so that it is
// between 0 and 19. Add 1 to make it between 1 and 20.
let score = 5;  
let guess;
let winCheck = 0; //Has the purpose to stop the game when 1 so user cant input anything else

//Logic:
//Check for right input button click
document.querySelector(".check").addEventListener("click", function(){
  if ((score >= 1)) { //Win still check if statement
    guess = Number(document.querySelector(".guess").value); //Input in check box

    if (((guess < 1) || (guess > 20)) && !winCheck) { //If guess is not in range
      document.querySelector(".message").textContent = "Guess out of range! Insert a number between 1 and 20!";
    }

    else if ((guess < randomNumber) && !winCheck) {
      document.querySelector(".message").textContent = "Guess is too low, try a higher number!";
      score--;
      document.querySelector(".score").textContent = score;
    }

    else if ((guess > randomNumber) && !winCheck) {
      document.querySelector(".message").textContent = "Guess is too high, try a lower number!";
      score--;
      document.querySelector(".score").textContent = score;
    }

    else if ((guess == randomNumber) && !winCheck) {
      document.querySelector(".message").textContent = "You guessed right! Try again by clicking Restart or refreshing the page.  ";
      document.querySelector(".number").textContent = randomNumber;
      winCheck = 1; //Player won
      if (document.querySelector(".highscore").textContent < score){ //Checks for highscore vs current score
        document.querySelector(".highscore").textContent = score;
      }
      document.querySelector("body").style.backgroundColor = "darkgreen";
    }

    if (score == 0){ //Loss check
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = randomNumber;
      document.querySelector(".message").textContent = "You lost! Try again by clicking Restart or refreshing the page."
      document.querySelector("body").style.backgroundColor = "darkred";
    }
  }
})

//Restart button check, restarts initial values
document.querySelector(".restart").addEventListener("click", function(){
  winCheck = 0;
  score = 5;
  randomNumber = Math.trunc(Math.random()*20 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 5;
  document.querySelector("body").style.backgroundColor = "black";
})