class Snow{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            "scale":1.3,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow5.webp");
        World.add(world, this.body);
      }
      display(){
    
        push();
        
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.x, this.width, this.height);
        pop();
      }
}