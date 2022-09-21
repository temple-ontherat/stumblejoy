function setup() {
    let cnv= createCanvas(900, 1200);
    cnv.position(50,200);
    x=0;
    y=0;  
    

   }
     function draw() {
       let s = 'Alexander Cameron Rutherford KC (February 2, 1857 – June 11, 1941) was a Canadian lawyer and politician who served as the first premier of Alberta from 1905 to 1910. Born in Ormond, Canada West, he studied and practiced law in Ottawa before he moved with his family to the North-West Territories in 1895. There, he began his political career, winning in his third attempt a seat in the North-West Legislative Assembly. In keeping with the territorial custom, Rutherford ran as an independent but generally supported the territorial administration of Premier Frederick W. A. G. Haultain. At the federal level, however, Rutherford was a Liberal.

When the Province of Alberta was formed in 1905, its Lieutenant Governor, George Bulyea, asked Rutherford to form the new province's first government. As premier, Rutherford's first task was to win a workable majority in the Legislative Assembly of Alberta, which he did in that year's provincial election. His second was to provide the apparatus of provincial government, and his government established everything from speed limits to a provincial court system. The legislature also controversially, and with Rutherford's support, selected Edmonton over rival Calgary as the provincial capital. Calgarians' bruised feelings were not salved when the government located the University of Alberta, a project dear to the Premier's heart, in his hometown of Strathcona, just across the North Saskatchewan River from Edmonton.

The government was faced with labour unrest in the coal mining industry, which it resolved by establishing a commission to examine the problem. It also set up a provincial government telephone network (Alberta Government Telephones) at great expense, and tried to encourage the development of new railways. It was in pursuit of the last objective that the Rutherford government found itself embroiled in scandal. Early in 1910, William Henry Cushing's resignation as Minister of Public Works precipitated the Alberta and Great Waterways Railway scandal, which turned many of Rutherford's Liberals against his government. Eventually, pressure from many party figures forced Rutherford to resign. He kept his seat in the legislature after resigning as premier, but he was defeated in the 1913 election by Conservative Herbert Crawford.

After leaving politics, Rutherford continued his law practice and his involvement with a wide range of community groups. Most importantly, he became chancellor of the University of Alberta, whose earlier founding had been a personal project, and stayed in that position until he died of a heart attack. A University of Alberta library, an Edmonton elementary school, and Jasper National Park's Mount Rutherford are named in his honour. Additionally, his home, Rutherford House, was opened as a museum in 1973. ';
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
       text(s, x, y, 300, 1000);  
     }
     function touchStarted() {
     noLoop();
     }
     function touchEnded() {
      loop();
     }
