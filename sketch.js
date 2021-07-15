var cat, catsittingImg, catrunningImg, catrestingImg;
var mouse, mousewaitingImg, mouseTeasingImg, mousehappyImg;
var bg, bgImg;

function preload() {
    catsittingImg = loadAnimation("images/cat4.png");
    catrunningImg = loadAnimation("images/cat2.png","images/cat3.png");
    catrestingImg = loadAnimation("images/cat1.png");
    mousewaitingImg = loadAnimation("images/mouse2.png");
    mouseTeasingImg = loadAnimation("images/mouse3.png");
    mousehappyImg = loadAnimation("images/mouse1.png");
    bgImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,600,20,20);
    cat.addAnimation("sitting",catsittingImg);
    cat.addAnimation("running",catrunningImg);
    cat.addAnimation("resting",catrestingImg);
    cat.scale = 0.25;

    mouse = createSprite(300,600,20,20);
    mouse.addAnimation("waiting",mousewaitingImg);
    mouse.addAnimation("teasing",mouseTeasingImg);
    mouse.addAnimation("happy",mousehappyImg);
    mouse.scale = 0.1;

    bg = createSprite();
    bg.addImage("garden",bgImg);
    bg.scale = 3;
}

function draw() {
cat.depth = bg.depth;
cat.depth = cat.depth + 1;
cat.setCollider('rectangle',0,0,50,50);
    
mouse.depth = bg.depth;
mouse.depth = mouse.depth + 2;
    //Write condition here to evalute if tom and jerry collide
    if (cat.isTouching(mouse)) {
        cat.velocityX = 0;
        mouse.changeAnimation("happy",mousehappyImg);
        cat.changeAnimation("resting",catrestingImg);
    }

    drawSprites();
}


function keyPressed(){
if (keyCode === RIGHT_ARROW) {
mouse.changeAnimation("teasing",mouseTeasingImg);
}

if (keyCode === LEFT_ARROW) {
mouse.changeAnimation("teasing",mouseTeasingImg);
cat.changeAnimation("running",catrunningImg);
cat.velocityX = -3;
}

}
