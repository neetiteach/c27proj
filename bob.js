class Bob{
    constructor(x,y){
        this.body=Bodies.circle(x,y,25,{restitution:1,friction:0.08,density:1.2,isStatic:false});
        this.r=25;
       
        
        //Matter.Body.setScale(this.body,{x,y});
        World.add(world,this.body);

    }
    display(){
      var pos=this.body.position;
      
       fill("red")
   //ellipseMode(RADIUS); 
       ellipse(pos.x,pos.y,this.r*2,this.r*2);
    
      
    }
}