const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob, ground,rigid_support;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  rigid_support = new Support(200,10,100,20)
  ground = new Support(200,390,800,10)

  bob = new Bob(200,200,10)

  var constraint_option = {
    bodyB:bob.body,
    bodyA:rigid_support.body,
    stiffness:0.04,
    length: 10
  }

  var thread = Constraint.create(constraint_option);
  World.add(world,thread);
}

function draw() {
  background(200);  
  Engine.update(engine)



  var bob_pos = bob.body.position;
  var rigid_pos = rigid_support.body.position;

  strokeWeight(3);
  line(bob_pos.x,bob_pos.y,rigid_pos.x,rigid_pos.y);

  bob.display();

  ground.display();
  rigid_support.display();

  drawSprites();
}

function mouseClicked(){
  console.clear();

  console.log(mouseX+","+mouseY);
}