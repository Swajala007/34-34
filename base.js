class Base
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic:true
    };
    
    this.image = loadImage("assets/d2.png");
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  display() {
    let pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.w,this.h);
    pop();
  }
}
