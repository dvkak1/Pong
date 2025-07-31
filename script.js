//Update Loop 
//To review, a loop is a function that runs repeatedly until a condition is met.
//In this case, the condition is that the game is running.
//An update loop is a function that runs repeatedly to update the game state.
//The update loop is going to be a fundamental part of all game projects and it runs in all games 
//regardless of which project or language is used to code the game.
//Update loops are used to update the game state, render the game and handle user input. 

import Ball from './Ball.js';
import Paddle from './Paddle.js';

//Declare the ball variable. In this case, it is an instance of the Ball class.
//The Ball class is imported from the Ball.js file.
//One tip, be mindful of the variables being used above and below the import statements.
const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle (document.getElementById("player-paddle"))
const computerPaddle = new Paddle (document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score") 
 
let lastTime 
function update(time) {

  if (lastTime != null) {
   const delta = time - lastTime 
   //Code below is what programs the CPU paddle to follow the ball.
   //In development, deactivate the ball update line for now.
   ball.update(delta)
   computerPaddle.update(delta, ball.y)
  
   //When testing this code, comment out Line 65 to 67 
   if (isLose()) handleLose()

   //Update code here 

  }  
  
  lastTime = time;  
  window.requestAnimationFrame(update);
}

//This is the function that checks if the player has lost the game.
function isLose() {
 const rect = ball.rect()
 return rect.right >= window.innerWidth || rect.left <= 0
}

function handleLose() {
 const rect = ball.rect()
  if (rect.right >= window.innerWidth) {
    playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
  } else {
    computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
  }
  ball.reset()
  computerPaddle.reset()
}

// //So what is setInterval?
// //setInterval is a function that runs a function repeatedly at a specified interval.
// //
// setInterval(update, 10);

document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update);