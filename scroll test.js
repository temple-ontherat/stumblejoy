function setup() {
 
    x=0;
    y=0;  
  
   }
     function draw() {
   
       angleMode(DEGREES); // Change the mode to DEGREES
       x=map(rotationY, -50, 50, 0, 50);
       y=map(rotationX, 0, 90, 3500, 0);
       window.scrollTo(x, y);          
     }
    
