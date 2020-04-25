class Thread {
    constructor(){
        var constraint_option = {
            bodyB:bob.body,
            bodyA:rigid_support.body,
            stiffness:1 ,
            length: 200
          }
        
          this.body = Constraint.create(constraint_option);
          World.add(world,this.body);
    }
    display(bob_pos, rigid_pos){
        strokeWeight(3);
        line(bob_pos.x,bob_pos.y,rigid_pos.x,rigid_pos.y);
    }
}
