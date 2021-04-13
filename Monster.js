class Monster {
          constructor(x,y,r) {
            var options = {
              'restitution':0.5,
              'friction':0.3,
              'density':0.1,
              isStatic:false
            }
            this.x = x;
            this.y = y;
            this.r = r;
            this.body = Bodies.rectangle(this.x, this.y, this.r,this.r-45, options);
            this.image = loadImage("images/Monster-01.png");
            World.add(world, this.body);
          }
        
          display(){
            var pos =this.body.position;
            push();
            translate(pos.x,pos.y);
            imageMode(CENTER);
                    image(this.image, 0,0,this.r, this.r)
            pop();
          }
        }