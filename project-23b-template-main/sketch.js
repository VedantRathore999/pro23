const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
const Body=Matter.Body
var engine,world,bodies
var helicopter,helicopter_image

var ground;
var Goption
var Boption
var box,boxSprite,box_image
var gs
var l1
var l2
var l3
var angle
function preload(){
helicopter_image=loadImage("helicopter.png")
box_image=loadImage("package.png")
}


function setup(){
createCanvas(800,600)
rectMode(CENTER)
engine=Engine.create();
world=engine.world
Goption={
isStatic:true
}
Boption={
isStatic:true,
restitution:0.9
}

box=Matter.Bodies.rectangle(400,100,20,20,Boption)
World.add(world,box)

boxSprite=createSprite(400,100,5,5)
boxSprite.addImage("boxsprite",box_image)
boxSprite.scale=0.1
helicopter=createSprite(400,100,30,03)
helicopter.addImage("helicopter",helicopter_image)
helicopter.scale=0.5
ground=Matter.Bodies.rectangle(400,580,800,10,Goption)
World.add(world,ground)
l3=Matter.Bodies.rectangle(345,535,10,70,Goption)
World.add(world,l3)
l2=Matter.Bodies.rectangle(385,565,70,10,Goption)
World.add(world,l2)
l1=Matter.Bodies.rectangle(425,535,10,70,Goption)
World.add(world,l1)
angle=boxSprite.angle

}

function draw(){
background(0)
Engine.update(engine)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,10)
rect(l3.position.x,l3.position.y,10,70)
rect(l2.position.x,l2.position.y,70,10)
rect(l1.position.x,l1.position.y,10,70)
boxSprite.x=box.position.x
boxSprite.y=box.position.y
box.scale=boxSprite.scale
if(boxSprite.y<120){
box.position.x=helicopter.x}

movement()
drawSprites();
}

function movement(){
if(keyDown(RIGHT_ARROW)){
helicopter.x=helicopter.x+3
}
if(keyDown(LEFT_ARROW)){
helicopter.x=helicopter.x-3
}
if(keyDown(DOWN_ARROW)){
Matter.Body.setStatic(box,false)

}
}