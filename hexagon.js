class hexagon{
constructor(x,y){
var options = {
    isStatic: false,
    'restitution': 0.3,
    'friction': 1,
    'density': 2
}
this.body = Bodies.rectangle(x,y,20,20);
this.width = 20;
this.height = 20;

this.image = loadImage("polygon.png");
World.add(world, this.body);

}

display(){
var pos = this.body.position;
push();
translate(pos.x, pos.y);
ImageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();
}
}