class Hero{
          constructor(x, y, r) {
              var options = {
                    'frictionAir': 1,
                  'density':1.0
              }
              this.body = Bodies.rectangle(x, y, (r)/2-5,(r)/2-125, options);
              this.width = r/2;
              this.height = (r/2)-100;
              this.image = loadImage("images/Superhero-01.png");
              World.add(world, this.body);
            }
            display(){
          //     var angle = this.body.angle;
              push();
              translate(this.body.position.x, this.body.position.y);
          //     rotate(angle);
              imageMode(CENTER);
              image(this.image, 0, 0, this.width, this.height);
              pop();
            }
      }