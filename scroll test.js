function setup() {
 
    x=0;
    y=0;  
  
   }
     function draw() {
       clear();
   
       angleMode(DEGREES); // Change the mode to DEGREES
       let x=map(rotationY, -90, 90, 0, 100);
       //y=map(rotationX, 0, 90, 3500, 0);
       text(x, 10, 30);
    text(y, 10, 60);
       window.scrollTo(x, 0);          
     }
    
