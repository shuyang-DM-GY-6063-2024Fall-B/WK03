function setup() {
  createCanvas(windowWidth, windowHeight);

  background(220, 100, 180);
}

function draw() {
  push();
  noFill();
  stroke('white')
  translate(width/2,height/2)
  
  for (let d = 600; d > 0; d-=20){

    ellipse(100,100,d);
    print(d)
  }
  for (let d = 600; d > 0; d-=20){

    ellipse(110,100,d);
    print(d)
  }
  pop();

// function draw(){



//   function star1(x,y,w,s){
//     push();
//     line(x-s,y+s,x,y+h);
//       line(x,y+h,x+s,y+s,);
//       line(x+s,y+s,x+h,y);
//       line(x+h,y,x+s,y-s);
//       line(x+s,y-s,x,y-h);
//       line(x,y-h,x-s,y-s);
//       line(x-s,y-s,x-h,y);
//       line(x-h,y,x-s,y+s);
//   }


//   function draw() {
  //   function star(x,y,h,s,a){
  //     push()
  //     translate(x,y);
  //     rotate(a);
  //     line(-s,+s,0,0+h);
  //     line(0,0+h,0+s,0+s,);
  //     line(0+s,0+s,0+h,0);
  //     line(0+h,0,0+s,0-s);
  //     line(0+s,0-s,0,0-h);
  //     line(0,0-h,0-s,0-s);
  //     line(0-s,0-s,0-h,0);
  //     line(0-h,0,0-s,0+s);
  //     angleMode(DEGREES);   
  //     pop();    
  //  }

   function star(x,y,h,s){
    angleMode(DEGREES);  
    push()
    translate(x,y);
    rotate(90);
    line(-s,+s,0,0+h);
    line(0,0+h,0+s,0+s,);
    rotate(90);
    line(-s,+s,0,0+h);
    line(0,0+h,0+s,0+s,);
    rotate(90);
    line(-s,+s,0,0+h);
    line(0,0+h,0+s,0+s,);
    rotate(90);
    line(-s,+s,0,0+h);
    line(0,0+h,0+s,0+s,);
    
    
    // line(0+s,0+s,0+h,0);
    // line(0+h,0,0+s,0-s);
    // line(0+s,0-s,0,0-h);
    // line(0,0-h,0-s,0-s);
    // line(0-s,0-s,0-h,0);
    // line(0-h,0,0-s,0+s);
    // angleMode(DEGREES);   
    // pop();

 }


  //  for (let a = 0 ; a < 360; a +=10){
  //   star(200,200,130,50,a);
  // }
  //  for (let a = 0 ; a < 360; a +=10){
  //   star(200,200,80,20,a);
  // }


  //drawing a row
  for(let a = 0 ; a < width; a += 50 ){
    for(let b = 0; b < height ; b += 50 ){
      star(a,b+a,30,25);
    }
    // star(a,a,25,5,0);
  }
  //  function star(x,y,h,s,a){
  //   push()
  //   translate(x,y);
  //   rotate(a);
  //   line(x-s,y+s,x,y+h);
  //   line(x,y+h,x+s,y+s,);
  //   line(x+s,y+s,x+h,y);
  //   line(x+h,y,x+s,y-s);
  //   line(x+s,y-s,x,y-h);
  //   line(x,y-h,x-s,y-s);
  //   line(x-s,y-s,x-h,y);
  //   line(x-h,y,x-s,y+s);
  //   angleMode(DEGREES);


    
  //   pop();

  // star(200,200,50,10,10);
  // star(100,100,100,20,0);

  // star(100,100,130,20,100);
  // star(100,100,130,20,60);

  // star(100,100,130,20,45);


  // }
//   draw()

}