const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world
var snowflake
function preload(){
  bg_img=loadImage("snow1.jpg");
  snow_img =loadImage("snow5.webp");
}


function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;
 Engine.run(engine);
 snowflake=new Snow(90,60,30,50)

}

function draw() {
  background(bg_img); 
  Engine.update(engine);
 // background(56,44,44);
 snowflake.display() 
 spawnsnowflakes()
 
  //imageMode(CENTER);
 // image(bg_img ,90,80,1500,1500); 
  
 

}
function spawnsnowflakes(){
  if(frameCount%20===0){
    snowflake=new Snow(random(90,700),-10,30,50)
    snowflake.valocityY=4
  }
}