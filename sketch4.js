function setup() {
 let cnv= createCanvas(300, 300);
 cnv.position(50,200);
 x=0;
 y=0;  
 background(51);
}
  function draw() {
   
    angleMode(DEGREES); // Change the mode to DEGREES
//    let tutu= touches.length;
 //   if (tutu > 0) {
 //   noLoop();
 //   }
  
    
    x=120+2*rotationY;
    y=2*rotationX;
    if (x > 275) {
      x=275;
     }if (y > 275) {
      y=275;
     }
   if (x < 0) {
      x=0;
     }if (y < 0) {
      y=0;
     }
   
    rect(x,y,25,25);
  }
  function touchStarted() {
  noLoop();
  }
   
  
