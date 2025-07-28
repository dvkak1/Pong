export default class Ball {
  constructor(ballElem) {
    this.ballElem = ballElem;
    this.reset();
  }
  
  //This is a helper function to get the x position of the ball.
  //A helper function is a function that is used to perform a specific task
  //and is not meant to be called directly by the user.
  get x() {
    return parsFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"));
  }

  set x(value) {
   this.ballElem.style.setProperty("--x", value);
  }

   get y() {
    return parsFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"));
  }

  set y(value) {
   this.ballElem.style.setProperty("--y", value);
  }

  reset () {
   this.x = 50 
   this.y = 50
   this.direction = { x: 0.75, y: 0.5 }
   while (true) {
    //This is a random number between 0 and 2 * Math.PI
    //The equivalent of 360 degrees in radians.
    const heading = randomNumberBetween(0, 2 * Math.PI)
    this.direction = { x:Math.cos(heading), y:Math.sin(heading) }
    
   }
  }


  update(delta) {
   this.x = 5
   this.y = 15
  }
}