const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roof1
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof1=new roof(400,150,500,80);
	bob1 = new bob(320,500,80)
	bob2 = new bob(370,500,80)
	bob3 = new bob(420,500,80)
	bob4 = new bob (470,500,80)
	bob5 = new bob(520,500,80)
	
	
	rope1=new rope(bob1.body,roof1.body,-160, 0)
	rope2=new rope(bob2.body,roof1.body,-80, 0)
	rope3 = new rope(bob3.body,roof1.body,0,0)
	rope4 = new rope(bob4.body,roof1.body,80,0)
	rope5 = new rope(bob5.body,roof1.body,160,0)
	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5 .display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
 
}
function keyPressed(){

	if(keyCode===LEFT_ARROW){
		
		Matter.Body.applyForce(bob1.body,bob1.body.position,
			{x: -140,y:-90});
	}
}






