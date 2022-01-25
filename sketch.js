
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1, block2, block3, plane;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	block1_options = {
		restituition: 0.5,
		friction:0.02,
		frictionAir:0		
	}
	block2_options = {
		restituition: 0.7,
		friction:0.01,
		frictionAir:0.1		
	}
	block3_options = {
		restituition: 0.01,
		friction:1,
		frictionAir:0.3		
	}

	var plane_options = {
		isStatic: true
	}

	//Crie os Corpos Aqui.
	plane = Bodies.rectangle(400, 700, 800, 75, plane_options);
	World.add(world,plane);
    
	fill(174, 0, 35);

	block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,10,10,block3_options);
	World.add(world,block3);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(102, 255, 139);

  ellipse(block1.position.x, block1.position.y, 80);
  rect(block2.position.x, block2.position.y, 80, 80);
  rect(block3.position.x, block3.position.y, 110, 80);
  fill (51, 51, 51);
  rect(plane.position.x, plane.position.y, 800, 10);

  Engine.update(engine);
  drawSprites();
 }



