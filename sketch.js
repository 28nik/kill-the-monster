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
  monster = new Monster(850, 500, 200)

    rope = new Rope(ball.body, {x:300, y:50})
    ground = new Ground(width/2-100,height-59, width-100, 10);
  // Engine.run(engine);
  // for (let i = 0; i < 1; i+=60) {
    block1 = new Block(525,450,50,20);
    block2 = new Block(525, 475, 50,20);
    block3 = new Block(525, 500 , 50,20);
    block4 = new Block(525, 520 , 50,20);
    block5 = new Block(525, 425 , 50,20);
    block6 = new Block(525, 400 , 50,20);
    block7 = new Block(525, 375 , 50,20);
    block8 = new Block(525, 350 , 50,20);
    block9 = new Block(525, 325 , 50,20);
    block10 = new Block(525, 300 , 50,20);
    block11 = new Block(525, 275 , 50,20);
    block12 = new Block(525, 250 , 50,20);
    block13 = new Block(525, 225 , 50,20);
    block14 = new Block(525, 200 , 50,20);
    block15 = new Block(525, 175 , 50,20);
    block16 = new Block(525, 150 , 50,20);
    block17 = new Block(525, 125 , 50,20);
    block18 = new Block(525, 100 , 50,20);
  // // }
  // // for (let i = 0; i < 1; i+=60) {
    block19 = new Block(525,75,50,20);
    block20 = new Block(525,50,50,20);
    block21 = new Block(525,25,50,20);
    // block22 = new Block(550,0,20,20);
    block23 = new Block(600,0,50,20);
    block24 = new Block(600,25,50,20);
    block25 = new Block(600,50,50,20);
    block26 = new Block(600,75,50,20);
    block27 = new Block(600,100,50,20);
    block28 = new Block(600,125,50,20);
    block29 = new Block(600,150,50,20);
    block31 = new Block(600,175,50,20);
    block32 = new Block(600,200,50,20);
    block34 = new Block(600,225,50,20);
    block35 = new Block(600,250,50,20);
    block36 = new Block(600,275,50,20);
    block37 = new Block(600,300,50,20);
    block38 = new Block(600,325,50,20);
    block39 = new Block(600,350,50,20);
    block40 = new Block(600,375,50,20);
    block41 = new Block(600,400,50,20);
    block42 = new Block(600,425,50,20);
    block43 = new Block(600,450,50,20);
    block44 = new Block(600,450,50,20);
    block45 = new Block(600,450,50,20);

    block46 = new Block(675,0,50,20);
    block47 = new Block(675,25,50,20);
    block48 = new Block(675,50,50,20);
    block49 = new Block(675,75,50,20);
    block50 = new Block(675,100,50,20);
    block51 = new Block(675,125,50,20);
    block52 = new Block(675,150,50,20);
    block53 = new Block(675,175,50,20);
    block54 = new Block(675,200,50,20);
    block55 = new Block(675,225,50,20);
    block56 = new Block(675,250,50,20);
    block57 = new Block(675,275,50,20);
    block58 = new Block(675,300,50,20);
    block59 = new Block(675,325,50,20);
    block60 = new Block(675,350,50,20);
    block61 = new Block(675,375,50,20);
    block62 = new Block(675,400,50,20);
    block63 = new Block(675,425,50,20);
    block64 = new Block(675,450,50,20);
    block65 = new Block(675,450,50,20);
    block66 = new Block(675,450,50,20);
    // block46 = new Block(575,450,20,20);
    // block47 = new Block(575,450,20,20);
    // block48 = new Block(575,450,20,20);

    // block23 = new Block(550,-50,20,20);
    // block24 = new Block(550,-75,20,20);
    
  // // }
  
}

function draw() {
  
  background(bg);
  Engine.update(engine);
ball.display();
rope.display();
monster.display();
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
block19.display();
block20.display();
block21.display();
// block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
block28.display();
block29.display();
block31.display();
block32.display();
// block33.display();
block34.display();
block35.display();
block36.display();
block37.display();
block38.display();
block39.display();
block40.display();
block41.display();
block42.display();
block43.display();
block44.display();
block45.display();
block46.display()
block47.display()
block48.display()
block49.display()
block50.display()
block51.display()
block52.display()
block53.display()
block54.display()
block55.display()
block56.display()
block57.display()
block58.display()
block59.display()
block60.display()
block61.display()
block62.display();
block63.display();
block64.display();
block65.display();
block66.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}