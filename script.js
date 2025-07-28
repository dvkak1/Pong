//Update Loop 
//To review, a loop is a function that runs repeatedly until a condition is met.
//In this case, the condition is that the game is running.
//An update loop is a function that runs repeatedly to update the game state.
//The update loop is going to be a fundamental part of all game projects and it runs in all games 
//regardless of which project or language is used to code the game.
//Update loops are used to update the game state, render the game and handle user input. 

import Ball from './Ball.js';

//Declare the ball variable. In this case, it is an instance of the Ball class.
//The Ball class is imported from the Ball.js file.
const ball = new Ball(document.getElementById("ball"));

let lastTime 
function update(time) {

  if (lastTime != null) {
   const delta = time - lastTime 

   //Update code here 

  }  
  
  lastTime = time;  
  console.log(time);
  //This is where the game logic will go.
  //For now, we will just log the time to the console.  
  window.requestAnimationFrame(update);
}

//So what is setInterval?
//setInterval is a function that runs a function repeatedly at a specified interval.
//
setInterval(update, 10);

window.requestAnimationFrame(update);