class block{
    constructor(x,y,r,g,b){
    this.body = Bodies.rectangle(x,y,20,50)
    this.width = 20;
    this.height = 50;

    World.add(world, this.body);

    }

    display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill(rgb(r,g,b));
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    }
}