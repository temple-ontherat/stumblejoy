function setup() {
  
   frameRate(3);
}
function draw() {
    clear();
    
    let x = rotationY;
    let y = rotationX;
    text(x, 10, 30);
    text(y, 10, 60);
  }
