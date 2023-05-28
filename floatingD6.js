/*
Name: Sher Grünenberg
Assignment: Project - Final
Date: 2023
CSCI 294, Spring 2023
*/

var dice = [];
var canvasHeight = 200;

function setup(){
    var myCanvas = createCanvas(windowWidth-50,canvasHeight);
    myCanvas.parent("mycanvas");
    
    rectMode(CENTER);
    
    for (var i=0;i<15;i++){
        var b = new d6();
        dice.push(b);
    }
}

function draw(){
    background(30);
    for (var i = 0; i<dice.length; i++){
        dice[i].edges();
        dice[i].move();
        dice[i].show();
    }
}



class d6{

    constructor(num){
        this.radius = 50;
        this.pos = createVector(random(this.radius, width-this.radius), random(this.radius, height-this.radius));
        this.vel = p5.Vector.random2D();
        this.number = int(random(1,7));
    }

    edges(){
        if (this.pos.x < this.radius || this.pos.x > width-this.radius){
            this.vel.x *=-1;
        }
        if (this.pos.y < this.radius || this.pos.y > height - this.radius){
            this.vel.y *= -1;
        }
    }
    
    show(){
        
        noStroke();
        fill(0,168,168);
        rect(this.pos.x-2,this.pos.y-4,50,50,5);
        fill(255);
        rect(this.pos.x,this.pos.y,50,50,5);
        fill(255,0,0);
        if (this.number==1){
          circle(this.pos.x,this.pos.y,10);
        }
        if (this.number==2){
          circle(this.pos.x-12.5,this.pos.y-12.5,10);
          circle(this.pos.x+12.5,this.pos.y+12.5,10);
        }
        if (this.number==3){
          circle(this.pos.x-12.5,this.pos.y-12.5,10);
          circle(this.pos.x+12.5,this.pos.y+12.5,10);
          circle(this.pos.x,this.pos.y,10);
        }
        if (this.number==4){
          circle(this.pos.x-12.5,this.pos.y-12.5,10);
          circle(this.pos.x+12.5,this.pos.y+12.5,10);
          circle(this.pos.x-12.5,this.pos.y+12.5,10);
          circle(this.pos.x+12.5,this.pos.y-12.5,10);
        }
        if (this.number==5){
          circle(this.pos.x,this.pos.y,10);
          circle(this.pos.x-12.5,this.pos.y-12.5,10);
          circle(this.pos.x+12.5,this.pos.y+12.5,10);
          circle(this.pos.x-12.5,this.pos.y+12.5,10);
          circle(this.pos.x+12.5,this.pos.y-12.5,10);
        }
        if (this.number==6){
          circle(this.pos.x-12.5,this.pos.y,10);
          circle(this.pos.x+12.5,this.pos.y,10);
          circle(this.pos.x-12.5,this.pos.y-12.5,10);
          circle(this.pos.x+12.5,this.pos.y+12.5,10);
          circle(this.pos.x-12.5,this.pos.y+12.5,10);
          circle(this.pos.x+12.5,this.pos.y-12.5,10);
        } 
      }
    
    move(){
        this.pos.add(this.vel);
    }

}
