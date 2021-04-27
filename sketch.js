var tom,tomImg,tomHappy;
var jerry,jerryImg,jerryImg2,jerryHappy;
var back,backImg; 

function preload() {
    //load the images here
   tomImg = loadImage("cat1.png");
   jerryImg = loadImage("mouse1.png");
   backImg = loadImage("garden.png");
   jerryImg2 = loadImage("mouse3.png");
   jerryHappy = loadAnimation("mouse2.png");
   tomHappy = loadAnimation("cat4.png");
}

function setup(){
    createCanvas(950,700);
    //create tom and jerry sprites here

    back = createSprite(470,350);
    //back.addImage("b",backImg);
    //back.scale = 2;


    tom = createSprite(800,550);
    tom.addImage("t",tomImg);
    tom.scale = 0.2;
    tom.debug = true;
    tom.setCollider("rectangle",0,0,tom.height,1300,90);

    jerry = createSprite(100,550);
    jerry.addImage("j",jerryImg);
    jerry.scale = 0.2;
    jerry.debug = true;
    jerry.setCollider("rectangle",0,0,jerry.height,900,90)

  


}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    if((tom.x-jerry.x) < ((tom.width + jerry.width)/2))
    {
        console.log("tom and jerry")
        tom.addAnimation("t",tomHappy);
        jerry.addAnimation("j",jerryHappy);
    }

    else{
        tom.addImage("t",tomImg);
        jerry.addImage("j",jerryImg);
    }

    drawSprites();
}


 function keyPressed(){

    
    //For moving and changing animation write code here

    if(keyCode===LEFT_ARROW)
    {
        jerry.addAnimation("mouseTeasing",jerryImg2);
        jerry.changeAnimation("mouseTeasing");
        jerry.frameDelay = 30;
    
    }

    if(keyCode===RIGHT_ARROW)
    {
        jerry.changeAnimation("j");
        jerry.velocityX = 2;
        jerry.frameDelay = 30;
    }

 }
