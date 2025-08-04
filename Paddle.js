const SPEED = .02; // Speed of the paddle movement


export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem;
  }
  
  get position() {
    return parseFloat(
      getComputedStyle(this.paddleElem).getPropertyValue("--position")
    );
  }

  set position(value) {
   this.paddleElem.style.setProperty("--position", value)
  } 

  rect() {
    return this.paddleElem.getBoundingClientRect();
  }

  //Make sure to check if this function exists in the Paddle.js file. 
  reset() {
    this.position = 50
  }

  update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position)
  }
}