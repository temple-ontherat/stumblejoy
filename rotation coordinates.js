function setup() {
  
   frameRate(3);
}
function draw() {
    clear();
    
    let x =accelerationX;
    let y =accelerationY;
   
    text(x, 10, 30);
    text(y, 10, 60);
  }
