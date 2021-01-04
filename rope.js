class Rope{
    constructor(bodya,bodyb,offsetx){
         
        var opt={
            bodyA:bodya,
            bodyB:bodyb,
            pointB:{x:offsetx,y:0},
            stiffness:0.002,
             length:10
        }
    
        this.osetx=offsetx;
        this.body=Constarint.create(opt);
       
      
         World.add(world,this.body);         
    }

    display(){
        var posa=this.body.bodyA.position;
        var posb=this.body.bodyB.position;
        //var posb=this.body.pointB;
      
        fill("black");
        line(posa.x,posa.y,posb.x+this.osetx,posb.y);
        
    }
   }
