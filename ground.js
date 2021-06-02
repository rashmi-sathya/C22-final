class Ground
  {
    constructor(x,y,w,h)
    {
        var ground_options ={
            isStatic: true
          };
      this.x =x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.body = Bodies.rectangle(x,y,w,h,ground_options);
      World.add(world,this.body);
    }
  
    show()
    {
       
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(this.x, this.y, this.w, this.h);
     
      }


  }