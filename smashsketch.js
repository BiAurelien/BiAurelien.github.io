//Variables(64)



  //coordinates
var x = 300
var y = 229
var a = 665
var b = 229

  //velocities
var yvel = 0
var bvel = 0
var xvel = 0
var avel = 0

  //jumping
var jump = 0
var jumpcount = 0
var hop = 0
var hopcount = 0

  //alive
var rliv = true
var bliv = false
var rstock = 3
var bstock = 3

//damage
var rd = 0
var rdx = 0
var rdy = 0
var rhit = false
var bd = 0
var dbx = 0
var dby = 0
var bhit = false

//attacks
//lights
var rstartupnl = 0
var rstartupsl = 0
var rstartupdl = 0
var rdown = 0
var rdc = 0
var rside = 0
var rsc = 0
var ractive = false
//heavies
var ryes = false
var rstartupns = 0
var rstartupds = 0
var rstartupss = 0
var rstartupus = 0
var risr = -20
var rising = y + risr
var rup = 0
var ruc = 0
var rurec = false

//lights
var bstartupnl = 0
var bstartupsl = 0
var bstartupdl = 0
var bdown = 0
var bdc = 0
var bside = 0
var bsc = 0
var bactive = false
//heavies
var byes = false
var bstartupns = 0
var bstartupds = 0
var bstartupss = 0
var bstartupus = 0
var uppr = -20
var upping = y + risr
var bup = 0
var buc = 0
var burec = false

//motion
var rmotion = 1
var bmotion = -1

//play 
var play = false
var start = false

function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background(0);
  
  if(start == false){
    
  stroke(255)
  strokeWeight(10)
  textSize(100)
  text('JSquares',250,300)
  
  textSize(32)
  strokeWeight(3)
  if(play == false){
    fill(0)
  }
  if(play == true){
   fill(255) 
  }
  text('Play',450,350)
  
  if(mouseX > 450 && mouseX < 515 && mouseY > 315 && mouseY < 355){
     play = true 
  }else{
   play = false 
  }
  
  if(play == true && keyIsDown(32)){
   start = true
  }
  
  }
  
  if(start == true){
   Play(); 
  }
    
  
  
  function Play(){
  //Horizontal movement
  
  //x velocity 
      if(xvel > 0){
        xvel -= 0.5
          }
  
      if(xvel < 0){
        xvel += 0.5
          }
  
  //a velocity
  
      if(avel < 0){
        avel += 0.5
          }
  
      if(avel > 0){
        avel -= 0.5
          }
  
  //x velocity
  if(rliv == true){
  
   if(keyIsDown(65)){
     if(xvel > -7){
      xvel -= 1
     }
     
  }
  
  
    
  if(keyIsDown(68)){
   if(xvel < 7){
     xvel += 1
   }
  
  }
  

    
  }
  
  //a velocity
  if(bliv == true){
    
    if(keyIsDown(LEFT_ARROW)){
      if(avel > -7){
       avel -= 1 
      }
    }
       
    if(keyIsDown(RIGHT_ARROW)){
      if(avel < 7){
        avel += 1
        }
       }
  
  }
  
  //Veritcal
    
    //y velocity && b velocity && platform collision 
  
  
    
  if(yvel < 15){
  yvel += 0.5
  }

  
 
    
    y = y + yvel
  
  
  
  //top part
  if(y + 70 > 300 && y + 70 < 380 && x > 225 && x < 725){
    jump = 0
    jumpcount = 0
    yvel = 0 
    y = 229
    rurec = false
    
    rliv = true
    
    if(rliv == true ){
    
     if(keyIsDown(65)){
       x = x - 7
        }
  
     if(keyIsDown(68)){
       x = x + 7 
        }
    
    }
    
  }else{
    
    if(rliv == true){
      
    x = x + xvel
    
    }
    
  }
  
  
  
  if(bvel < 15){
   bvel += 0.5 
  }
  
  b = b + bvel
  
  if(b + 70 > 300 && b + 70 < 380 && a > 225 && a < 725){
  hop = 0
  hopcount = 0
  bvel = 0
  b = 229
    
    bliv = true
    
    if(bliv == true){
      
      if(keyIsDown(LEFT_ARROW)){
       a = a - 7 
      }
      
      if(keyIsDown(RIGHT_ARROW)){
       a = a + 7 
      }
      
    }
  }else{
    
    if(bliv == true){
      
      a = a + avel
      
    }
    
  }
  
  
  //bottom part
  
  if(y < 380 && y > 370 && x + 35 > 259 && x < 739){
     yvel = 0
    }  
  
  if(b < 380 && b > 370 && a + 35 > 259 && a < 739){
    bvel = 0
  }
  
  
  
  //side parts 
  
  //red
  if(y + 70 > 310 && y < 380){
    //left
    if(x  > 225 && x < 235){
      xvel = 0
      x = 225
      jumpcount = 0
     
    }
 
    
    //right
    if(x < 740 && x > 730){
      xvel = 0
      x = 740
      jumpcount = 0
    
    }
    
 
    
  }
  
 //blue
  if(b + 70 > 310 && b < 380){
    //left
    if(a  > 225 && a < 235){
      avel = 0
      a = 225
      hopcount = 0
     
    }
      
    
    //right
    if(a < 740 && a > 730){
      avel = 0
      a = 740
      hopcount = 0
    
    }
  }
  
  
    if(y + 70 > 300 && y < 370 && x > 225 && x < 500){
    x =  225
   }
  
     if(y + 70 > 300 && y < 370 && x < 740 && x > 500){
    x =  740
   }
  
  //jumping
  
  if(rliv == true){ 
    
  if(keyIsDown(87)){
    if(jump == 0 && jumpcount < 2){
    yvel = -11
    jump += 1
      jumpcount += 1
    }
  }else{
    jump = 0
  }
  
  }
  
  
  if(bliv == true){
   
    if(keyIsDown(UP_ARROW)){
      if(hop == 0 && hopcount < 2){
        bvel = -11
        hop += 1
        hopcount += 1
      }
      }else{
        hop = 0
      }
      
    }
    
  
  
  
  //Display
  
   //players
  let red = new Redplayer(x,y,35,70);
  red.display(); 
 
  
  let blue = new Blueplayer(a,b,35,70);
  blue.display();

  
  
    //map
  noStroke()
  fill(255)
  rect(260, 300, 480,10)
  rect(260,310, 480, 70)

  
  
  //score && damage && knockouts
  
  //player 1
  fill(255,0,0)
  
  rect(200, 550, 7,35)
  rect(200,550, 20,7)
  rect(200, 565, 20,7)
  rect(215, 550,7,22)
  
  rect(245, 550, 7,35)
  triangle(245,550,245,560,235,560)

  rect(265, 540, 2,55)
  
  textSize(42)
  text(rd, 295,575)
  
  if(rmotion > 0){
  triangle(215,530,235, 535, 215, 540)
  }
  
  if(rmotion < 0){
   triangle(215,535,235,530,235,540) 
  }
  
  if(rstock > 0){
    ellipse(285, 585,10,10) 
  }
  
  if(rstock > 1){
    ellipse(305, 585,10,10)
  }
  
  if(rstock > 2){
    ellipse(325,585,10,10)  
  }
  
  
  
    //knockout
  
  if(x < -85 || x > width + 50||y > height + 50){
  
    rliv = false
    if(rstock > 1){
    x = 300
    y = 0
       }
    rstock -= 1
  }


  //attacks

  if(keyIsDown(87)){
    rup = true
  }
  
  if(rup == true){
    ruc = ruc + 1
    if(ruc > 20){
     ruc = 0
      rup = false
    }
  }
  
  if(keyIsDown(68)){
    rmotion = 1
    rside = true
  }
  
  if(keyIsDown(65)){
   rmotion = -1 
    rside = true
  }
  
  if(rside == true){
    rsc = rsc + 1
    if(rsc > 25){
     rsc = 0
      rside = false
    }
    
  }
  
  
  if(keyIsDown(83)){
   rdown = true 
  }
  
  if(rdown == true){
    rdc = rdc + 1
    if(rdc > 25){
     rdc = 0
      rdown = false
    }
    
  }
  
   if(keyIsDown(67)){
    ractive = true 
   }
  
  if(ractive == true && rliv == true && ryes == false){
   
    //neutral light
    rstartupnl = rstartupnl + 1
    if(rstartupnl > 9 && rstartupnl < 15 && rdown == false && rside == false){
     red.Nlight();
   
    }
 
   
    
    if(rstartupnl > 20){
      rstartupnl = 0
      ractive = false
    }
    
    //down light
    if(rdown == true && rside == false){
    rstartupdl = rstartupdl + 1
    }
    if(rstartupdl > 9 && rstartupdl < 15 && rdown == true){
    red.Dlight();
    }
    if(rstartupdl > 20){
     rstartupdl = 0
      ractive = false
    }
    
    //side light
    if(rside == true && rdown == false){
   rstartupsl = rstartupsl + 1
    }
    if(rstartupsl > 10 && rstartupsl < 20 && rside == true){
    red.Slight();
    }
    if(rstartupsl > 25){
     rstartupsl = 0
      ractive = false
    }
    
  }
  
 if(keyIsDown(86)){
  ryes = true 
 }

  
  if(ryes == true && rliv == true && ractive == false){

    
    //neutral sig
    if(rdown == false && rup == false && rside == false){
    rstartupns = rstartupns + 1
    }
    if(rstartupns > 9 && rstartupns < 20 && rdown == false && rside == false){
     red.Nsig(); 
  
    }
    if(rstartupns > 60){
      rstartupns = 0
      ryes = false
    }
    
    
    
    //down sig
  
    if(rdown == true && rside == false){
     rstartupds = rstartupds + 1
    }
    if(rstartupds > 1 && rstartupds < 15 && rdown == true && rside == false){
      noStroke()
    fill('#ff6e00')
      if(rmotion > 0){
    rect(x + 35, y + 50, 35,20)
      }
      if(rmotion < 0){
       rect(x - 35, y + 50, 35, 20) 
      }
    }
    if(rstartupds > 15 && rstartupds < 25 && rdown == true && rside == false){
    red.Dsig();
    }
    if(rstartupds > 60){
     rstartupds = 0
      ryes = false
    }
    
    
    
    
    //side sig
    if(rside == true && rdown == false){
    rstartupss = rstartupss + 1
    }
     if(rstartupss > 1 && rstartupss < 25 && rside == true && rdown == false){
      noStroke()
      fill('#ff6e00')
     rect(x,y,35,70) 
       xvel = 0
       yvel = 0
    }
    if(rstartupss > 15 && rstartupss < 25 && rdown == false && rside == true){
     red.Ssig(); 
    }
    if(rstartupss > 60){
      rstartupss = 0
      ryes = false
    }
    
    
    
    //up sig
    if(rup == true && rdown == false && rside == false){
     rstartupus = rstartupus + 1 
    }
    
    if(rstartupus > 1 && rstartupus < 15 && rdown == false && rside == false){
     noStroke()
    fill('#ff6e00')
    rect(x,y,35,70)
      yvel = 0
    }
    
    if(rstartupus > 15 && rstartupus < 40 && rdown == false && rside == false){
     noStroke()
    fill('#ff6e00')
    rect(x,y,35,70)
      red.Usig(); 
      rurec = true
      
    }
    
    if(rstartupus > 40 && rstartupus < 41){
      yvel = 0
    }
    
    if(rstartupus > 100 && rurec == false){
      rstartupus = 0
      ryes = false
      
    }
    
  }
  
  
  //player 2
  fill(0,0,255)
  
  rect(748,550,7,35)
  rect(748,550,20,7)
  rect(748, 565, 20,7)
  rect(763, 550, 7,22)
  
  rect(783, 550, 22, 7)
  rect(805,550,7,15)
  rect(783, 565, 29,7)
  rect(783, 565, 7,15)
  rect(783, 579, 29,7)
  
  rect(728, 540, 2, 55)
  
  textSize(42)
  text(bd,678,575)
  
  if(bmotion < 0){
   triangle(763,535,783,530,783,540) 
  }
  
  if(bmotion > 0){
  triangle(763,540,763,530,783,535)
  }
  
  if(bstock > 0){
   ellipse(713,585,10,10) 
  }
  
  if(bstock > 1){
   ellipse(693,585,10,10) 
  }
  
  if(bstock > 2){
   ellipse(673,585,10,10) 
  }
  

  
  //knockout
  
  if(a < -85 || a > width + 50||b > height + 50){
  
    bliv = false
    if(bstock > 1){
    a = 665
    b = 0
    }
    bstock -= 1
  }
  
  
  //attacks

  if(keyIsDown(UP_ARROW)){
    bup = true
  }
  
  if(bup == true){
    buc = buc + 1
    if(buc > 20){
     buc = 0
      bup = false
    }
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    bmotion = 1
    bside = true
  }
  
  if(keyIsDown(LEFT_ARROW)){
   bmotion = -1 
    bside = true
  }
  
  if(bside == true){
    bsc = bsc + 1
    if(bsc > 25){
     bsc = 0
      bside = false
    }
    
  }
  
  
  if(keyIsDown(DOWN_ARROW)){
   bdown = true 
  }
  
  if(bdown == true){
    bdc = bdc + 1
    if(bdc > 25){
     bdc = 0
      bdown = false
    }
    
  }
  
   if(keyIsDown(78)){
    bactive = true 
   }
  
  if(bactive == true && bliv == true && byes == false){
   
    //neutral light
    bstartupnl = bstartupnl + 1
    if(bstartupnl > 9 && bstartupnl < 15 && bdown == false && bside == false){
     blue.Nlight(); 
    }
    if(bstartupnl > 20){
      bstartupnl = 0
      bactive = false
    }
    
    //down light
    if(bdown == true && bside == false){
    bstartupdl = bstartupdl + 1
    }
    if(bstartupdl > 9 && bstartupdl < 15 && bdown == true){
    blue.Dlight();
    }
    if(bstartupdl > 20){
     bstartupdl = 0
      bactive = false
    }
    
    //side light
    if(bside == true && bdown == false){
   bstartupsl = bstartupsl + 1
    }
    if(bstartupsl > 10 && bstartupsl < 20 && bside == true){
    blue.Slight();
    }
    if(bstartupsl > 25){
     bstartupsl = 0
      bactive = false
    }
    
  }
  
 if(keyIsDown(77)){
  byes = true 
 }
  
  if(byes == true && bliv == true && bactive == false){
    
    //neutral sig
    bstartupns = bstartupns + 1
    if(bstartupns > 9 && bstartupns < 20 && bdown == false && bside == false){
     blue.Nsig(); 
  
    }
    if(bstartupns > 60){
      bstartupns = 0
      byes = false
    }
    
    
    
    //down sig
  
    if(bdown == true && bside == false){
     bstartupds = bstartupds + 1
    }
    if(bstartupds > 1 && bstartupds < 15 && bdown == true && bside == false){
      noStroke()
    fill('#b600ff')
      if(bmotion > 0){
    rect(a + 35, b + 50, 35,20)
      }
      if(bmotion < 0){
       rect(a - 35, b + 50, 35, 20) 
      }
    }
    if(bstartupds > 15 && bstartupds < 25 && bdown == true && bside == false){
    blue.Dsig();
    }
    if(bstartupds > 60){
     bstartupds = 0
      byes = false
    }
    
    
    
    
    //side sig
    if(bside == true && bdown == false){
    bstartupss = bstartupss + 1
    }
     if(bstartupss > 1 && bstartupss < 25 && bside == true && bdown == false){
      noStroke()
      fill('#b600ff')
     rect(a,b,35,70) 
       avel = 0
       bvel = 0
    }
    if(bstartupss > 15 && bstartupss < 25 && bdown == false && bside == true){
     blue.Ssig(); 
    }
    if(bstartupss > 60){
      bstartupss = 0
      byes = false
    }
    
    
    
    //up sig
    if(bup == true && bdown == false && bside == false){
     bstartupus = bstartupus + 1 
    }
    
    if(bstartupus > 1 && bstartupus < 15 && bdown == false && bside == false){
     noStroke()
    fill('#b600ff')
    rect(a,b,35,70)
      bvel = 0
    }
    
    if(bstartupus > 15 && bstartupus < 40 && bdown == false && bside == false){
     noStroke()
    fill('#b600ff')
    rect(a,b,35,70)
      blue.Usig(); 
      burec = true
     
    }
    
    if(bstartupus > 40 && bstartupus < 41){
      bvel = 0
    }
    
    if(bstartupus > 100 && burec == false){
      bstartupus = 0
      byes = false
      
    }
    
  }
 
  
   if(rstock < 1 && bstock > 0){
    stroke(255,255,0)
     strokeWeight(5)
    fill(0,0,255)
   textSize(42)
    text('PLAYER 2 WINS!',350, 200)
  }
  
  
  if(bstock < 1 && rstock > 0){
    stroke(255,255,0)
    strokeWeight(5)
    fill(255,0,0)
   textSize(42)
    text('PLAYER 1 WINS!',350, 200)
  }
  
}
}
