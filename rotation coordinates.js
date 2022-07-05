function setup() {
  
   frameRate(3);
}
function draw() {
    clear();
    
    let x =map(rotationY, -90,90,0,200,true);
    let y =map(rotationX; 0,90,0,200,true);
   
    text(x, 10, 30);
    text(y, 10, 60);
  }
