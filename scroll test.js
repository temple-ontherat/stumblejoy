function setup() {
 
    x=0;
    y=0;  
    frameRate(1);
  
   }
     function draw() {
       clear();
   
       angleMode(DEGREES); // Change the mode to DEGREES
       let est=rotationY.toFixed(0)

       let x=map(est, -10, 10, 0, 20);
      
       //y=map(rotationX, 0, 90, 3500, 0);
       text(x, 10, 30);
   // text(y, 10, 60);
       window.scrollTo(x, 0);          
     }
    
