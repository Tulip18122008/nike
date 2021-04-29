const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,box1,box2,box3,box4,box5,box6,polygon1,slingshot1;


function setup() {
    createCanvas(800,400);
    engine=Engine.create();
    world=engine.world;

    

    box1= new box(200,350,30,30);
    box2= new box(230,350,30,30);
    box3= new box(260,350,30,30);
    box4= new box(215,320,30,30);
    box5= new box(245,320,30,30);
    box6= new box(230,290,30,30);


    polygon1= new polygon(120,200,20,20);
   

    slingshot1=new slingshot(this.polygon1,{x:120,y:200});
    ground = new Ground(600,height,1200,20);

    
  }
  
  function draw() {
    background(255,255,255);  
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    polygon1.display();
    slingshot1.display();
    drawSprites();
  }

  function mouseDragged(){
   
        Matter.Body.setPosition(this.polygon1, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
   slingshot1.fly();
}



function keyPressed(){
  if(keyCode === 32){
    
     slingshot1.attach(this.polygon1);
  }
}
