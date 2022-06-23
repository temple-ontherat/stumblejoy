function setup() {
 let cnv= createCanvas(300, 300);
 cnv.position(50,200);
 x=0;
 y=0;  
 noLoop();
}
  function draw() {
    background(51);
    angleMode(DEGREES); // Change the mode to DEGREES
  //  clear();
   let display = touches.length;
   while (display < 1) {
    
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
    erase();
    rect(x,y,25,25);
  //  i=i+1;
   }
  }
  
