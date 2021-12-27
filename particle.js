class Particles {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        //give color property 
        this.color=color(random(0,255),random(0.255),random(0,255))
        World.add(world, this.body);
    }
    display(){
        
    }
        
       
        
    

};