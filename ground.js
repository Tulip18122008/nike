class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.Ground= Bodies.rectangle(450,390,900,20,options);
    
      World.add(world, this.Ground);
    }
    display(){
      var pos =this.Ground.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y,900,20);
    }
  };
