
//The const variable INITIAL_VELOCITY is used to set the initial speed of the ball.
const INITIAL_VELOCITY = .025
const VELOCITY_INCREASE = 0.00001


export default class Ball {
  constructor(ballElem) {
    this.ballElem = ballElem;
    this.reset();
  }
  
  //This is a helper function to get the x position of the ball.
  //A helper function is a function that is used to perform a specific task
  //and is not meant to be called directly by the user.
  get x() {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"));
  }

  set x(value) {
   this.ballElem.style.setProperty("--x", value);
  }

   get y() {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"));
  }

  set y(value) {
   this.ballElem.style.setProperty("--y", value);
  }
  
  //This function returns the bounding rectangle of the ball element.
  rect () {
    return this.ballElem.getBoundingClientRect()
  }

  reset () {
   this.x = 50 
   this.y = 50
   //It is initialized with 0 because the ball is not moving at the start of the game.
   this.direction = { x: 0 }
   //Math.abs is an absolute value function that returns the absolute value of a number. 
   //This is used to ensure that the ball is moving in a random direction.
   while (Math.abs(this.direction.x) <=  .2 || Math.abs(this.direction.x) >= .9) {
    //This is a random number between 0 and 2 * Math.PI
    //The equivalent of 360 degrees in radians.
    const heading = randomNumberBetween(0, 2 * Math.PI)
    this.direction = { x:Math.cos(heading), y:Math.sin(heading) }
   }
   
    this.velocity = INITIAL_VELOCITY

  }

 //This is the update loop for the ball. It is called every frame to update the position of the ball. 
  update(delta, paddleRects) {
   this.x += this.direction.x * this.velocity * delta
   this.y += this.direction.y * this.velocity * delta
   this.velocity += VELOCITY_INCREASE * delta
   const rect = this.rect()
   
   if (rect.bottom >= window.innerHeight || rect.top <= 0) {
     this.direction.y *= -1
   }
   if (paddleRects.some(r => isCollision(r, rect))) {
    this.direction.x *= -1
   }

}

}

//This function generates a random number between min and max.
function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min
}

function isCollision(rect1, rect2) { 
 return rect1.left <= rect2.right && rect1.right >= rect2.left  && rect1.top <= rect2.bottom
        && rect1.bottom >= rect2.top  
}