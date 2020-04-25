class Bob {
    constructor(x,y,r){
        var option = {
            restitution:0.5
        }

        this.body = Bodies.circle(x,y,r,option)
        this.radius = r;

        World.add(world,this.body)
    }
    display(){
        fill("#C2C1BD")
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}
