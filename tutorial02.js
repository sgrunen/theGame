function setup() {
    var myCanvas = createCanvas(105, 105);
    myCanvas.parent("mycanvas");
    rectMode(CENTER);
  }
    function draw() {
      background(220);
       
      push();
      translate(width * 0.5, height * 0.5);
      rotate(frameCount / -100.0);
      d20(0,-5,50,6)
      pop();
      
    }
  
function d20(x, y, radius, npoints) {
    fill(0,168,168);
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = PI/2; a < TWO_PI+PI/2; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    triangle(x,y-20,x+42,y-22,x,y-48);
    triangle(x,y-20,x-42,y-22,x,y-48);
    triangle(x,y-20,x+42,y-22,x+20,y+20);
    triangle(x,y-20,x-42,y-22,x-20,y+20);
    triangle(x-20,y+20,x-42,y+22,x-20,y+20);
    triangle(x+20,y+20,x+42,y+22,x+20,y+20);
    triangle(x-20,y+20,x+20,y+20,x,y+48);
    fill(255);
    triangle(x, y-20, x-20, y+20, x+20, y+20);
    fill(255,0,0);
    textSize(16);
    textStyle(BOLD);    
    text("20",x-8,y+10);
  
  }






