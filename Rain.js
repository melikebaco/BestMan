class Rain {
    constructor(x,y){
    var options = {
        friction: 0.001,
        restitution: 0.1,
    }
        this.rainDrops = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rainDrops)
      
        
    }

    display(){
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.rainDrops.position.x,this.rainDrops.position.y,this.radius,this.radius);
       
    }
}