function setup() {
    let cnv= createCanvas(600, 600);
    cnv.position(50,200);
    x=0;
    y=0;  
    
   }
     function draw() {
       background(51);
       angleMode(DEGREES); // Change the mode to DEGREES
       x=map(rotationY, -50, 50, 0, 600);
       y=map(rotationX, 0, 90, 0, 600);
  /*     if (x > 275) {
         x=275;
        }if (y > 275) {
         y=275;
        }
      if (x < 0) {
         x=0;
        }if (y < 0) {
         y=0;
        }  */
      
       rect(x,y,300,300);
     }
     function touchStarted() {
     noLoop();
     }
     function touchEnded() {
      loop();
     }
