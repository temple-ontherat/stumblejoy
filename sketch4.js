function setup() {
 let cnv= createCanvas(300, 300);
 cnv.position(50,200)
 x=0
 y=0  
}
//function draw() {
 // background(220, 50);
//  fill('magenta');
 // let elle=ellipse(120, 100,10);
  function draw() {
    background(200);
    angleMode(DEGREES); // Change the mode to DEGREES
    x=120+2*rotationY;
    y=120+2*rotationX;
    if (x > 275) {
      x=275
     }if (y > 275) {
      y=275
     }
   if (x < 0) {
      x=0
     }if (y < 0) {
      y=0
     }
    rect(x,y,25,25)
  }
