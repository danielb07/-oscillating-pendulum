class Support {
    constructor(x,y,w,h,c){
        var option = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,option);
        World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = c;
    }
    display(){
        fill(this.color)
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
       
    }
}