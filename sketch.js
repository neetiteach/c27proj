
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constarint=Matter.Constraint;


var roof1,bob1,bob2,bob3,bob4,bob5;

var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof1=new Roof(400,100);

    bob1=new Bob(300,300);
    bob2=new Bob(350,300);
    bob3=new Bob(400,300);
    bob4=new Bob(450,300);
    bob5=new Bob(500,300);


    

    rope1=new Rope(bob1.body,roof1.body,-100,0);
    rope2=new Rope(bob2.body,roof1.body,-50,0);
    rope3=new Rope(bob3.body,roof1.body,0,0);
    rope4=new Rope(bob4.body,roof1.body,50,0);
    rope5=new Rope(bob5.body,roof1.body,100,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 // console.log(rope1);
  drawSprites();
 
}

function keyPressed(){
  if (keyCode===UP_ARROW){
   console.log("here");
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-95,y:-95});
    
  }
}

