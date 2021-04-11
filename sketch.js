const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// const { Engine, World, Bodies, Constraint, MouseConstraint, Mouse, Composite, Render } = Matter;
var hero;

var rope, ground
var engine, world;
function preload() {
  //preload the images here
  bg = loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(1200, 600);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  ball = new Hero(250, 200, 500);
  

    rope = new Rope(ball.body, {x:300, y:50})
    ground = new Ground(width/2-100,height-59, width-100, 10);
  // Engine.run(engine);
  for (let i = 0; i < 1; i+=60) {
    block1 = new Block(550,i,20,20);
    block2 = new Block(550, i , 20,20);
    block3 = new Block(550, i , 20,20);
    block4 = new Block(550, i , 20,20);
    block5 = new Block(550, i , 20,20);
    block6 = new Block(550, i , 20,20);
    block7 = new Block(550, i , 20,20);
    block8 = new Block(550, i , 20,20);
    block9 = new Block(550, i , 20,20);
    block10 = new Block(550, i , 20,20);
    block11 = new Block(550, i , 20,20);
    block12 = new Block(550, i , 20,20);
    block13 = new Block(550, i , 20,20);
    block14 = new Block(550, i , 20,20);
    block15 = new Block(550, i , 20,20);
    block16 = new Block(550, i , 20,20);
    block17 = new Block(550, i , 20,20);
    block18 = new Block(550, i , 20,20);
  }
  for (let i = 0; i < 1; i+=60) {
    block19 = new Block(550,i,20,20);
    block20 = new Block(550,i,20,20);
    block21 = new Block(550,i,20,20);
    block22 = new Block(550,i,20,20);
    block23 = new Block(550,i,20,20);
    block24 = new Block(550,i,20,20);
    
  }
  
}

function draw() {
  
  background(bg);
  Engine.update(engine);
ball.display();
rope.display();
ground.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}