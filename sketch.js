const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;
var ground;
//var w2;
//var water
//var spidy;
var ground;
//var base

function preload() {
  
backgroundImg = loadImage("assets/rain.gif");
//w2 = loadImage("assets/w2.gif");
spidy = loadImage("assets/s2.png");
bk_song = loadSound("backgroundsound1.mpeg");


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  bk_song.loop();
  bk_song.setVolume(0);

  ground = new Ground(50,300,1000,800);
 // ground1 = new Ground(150,300,100,80);
  base = new Base(280,600,800,800);

  
 // water = createSprite(100,300,30,30);
 // water.addImage(w2);  
 //var spider = createSprite(500,300,30,30);
//spider.addImage("climbing",spidy);
 
}

function draw() {
  background(51);
  Engine.update(engine);

 /* if(keyPressed("UP_ARROW")){
   base.velocityY = base.velocityY-1;
  }*/
  ground.display();
 // ground1.display();
 base.display();
  drawSprites();
}




