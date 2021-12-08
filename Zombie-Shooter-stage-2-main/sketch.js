var bg,bgImg,z;
var player, shooterImg, shooter_shooting;
var zombie,diez
var bts
var zGroup,bGroup;
function preload(){
  
  shooterImg = loadAnimation("shooterminigun1.png","shooterminigun2.png","shooterminigun3.png","shooterminigun4.png","shooterminigun5.png","shooterminigun6.png")
  bts= loadImage("bullet.png")
  z = loadImage("zombiewithamor.png")
  bgImg = loadImage("assets/bg.jpeg")
diez=loadImage("diezombie.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
 bullet=createSprite(150,60,15,15);
 bullet.addImage(bts);
 bullet.scale=0.1;

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addAnimation("shooter",shooterImg)
 
   //player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   zGroup=new Group();

bGroup=new Group();
}

function draw() {
  background(0); 



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyDown("space")){
 spawnBullets();
}

if(bGroup.isTouching(zGroup)){
  zGroup.destroyEach();
  bGroup.destroyEach();

}

//player goes back to original standing image once we stop pressing the space bar

spawnZombies();
drawSprites();

}


function spawnZombies()
{
    if (frameCount%200===0){
      zombie=createSprite(width,height-300,50,50);
zombie.addImage(z);
zombie.scale=0.7
zombie.velocityX=-5;

zGroup.add(zombie);
    }
}

function spawnBullets(){
    bullet=createSprite(player.x+170,player.y+20,50,50);
bullet.addImage(bts);
bullet.scale=0.2;
bullet.velocityX=5;
bGroup.add(bullet);
}
