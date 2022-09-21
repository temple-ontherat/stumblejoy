function setup() {
    let cnv= createCanvas(900, 1200);
    cnv.position(50,200);
    x=0;
    y=0;  
    

   }
     function draw() {
       let s = 'ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem eveniet corporis minima id porro vero voluptate omnis. Neque fugit quidem dicta possimus error adipisci cum vitae sequi. Hic, maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima natus aspernatur numquam? Expedita doloremque consequatur libero. Odio quia repellat id esse error debitis mollitia, necessitatibus doloremque eaque, perferendis corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in molestiae dolorem laborum nostrum ullam consequatur nulla pariatur delectus doloribus fugiat, vel error explicabo cum beatae dolor facilis cumque aut.';
    fill(50);  
       background(255);
       angleMode(DEGREES); // Change the mode to DEGREES
       x=map(rotationY, -50, 50, 0, 900);
       y=map(rotationX, 0, 90, 0, 1200);
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
      
      /* rect(x,y,700,1000); */
       text(s, x, y, 700, 1000);  
     }
     function touchStarted() {
     noLoop();
     }
     function touchEnded() {
      loop();
     }
