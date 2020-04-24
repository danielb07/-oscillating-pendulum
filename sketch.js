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

  var support_option = {
    isStatic:true
  }

  rigid_support.body = Bodies.rectangle(200,10,100,20,support_option)
    World.add(world,rigid_support.body)

  ground = Bodies.rectangle(200,390,800,10,support_option);
    World.add(world,ground.body);

    
  var constraint_option = {
    bodyA:bob.body,
    bodyB:rigid_support.body,
    stiffness:0.04,
    length: 10
  }

  var thread = Constraint.create(constraint_option);
  World.add(world,thread);
}

function draw() {
  background(200);  
  Engine.update(engine)

  rectMode(CENTER)
  var p_pos = rigid_support.position
  rect(p_pos.x,p_pos.y,200,20);

  rectMode(CENTER);
  var g_pos = ground.position
  rect(g_pos.x,g_pos.y,800,20);  

  ellirigid_supporteMode(CENTER)
  var b_pos = bob.position
  ellirigid_supporte(b_pos.x,b_pos.y,50,50)

  
  var bob_pos = bob.body.position;
  var sup_pos = rigid_support.body.position;
  strokeWeight(3);
  line(bob_pos.x,bob_pos.y,sup_pos.x,sup_pos.y);

  drawSprites();
}

function mouseClicked(){
  console.clear();

  console.log(mouseX+","+mouseY);
}