const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob, ground,rigid_support,thread;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  rigid_support = new Support(400,10,100,20,"#5f4041")
  ground = new Support(400,390,800,10,"grey")

  bob = new Bob(400,200,30)
  
  thread = new Thread();
  
}

function draw() {
  background(200);  
  Engine.update(engine)

  var bob_pos = bob.body.position;
  var rigid_pos = rigid_support.body.position;
 
  thread.display(bob_pos,rigid_pos)
  
  if(keyIsPressed === true){
    bob_pos.x = 400
    bob_pos.y = 200
  }

  bob.display();

  ground.display();
  rigid_support.display();

  text("drag the bob to move it left and right",298,340)
  text("press any key to stop the bob from moving",390,368)

  drawSprites();
}
function mouseClicked(){
  console.clear();
  console.log(mouseX+","+mouseY);
}

function mouseDragged(){
  bob.body.position.x = mouseX;
  bob.body.position.y = mouseY;
}
