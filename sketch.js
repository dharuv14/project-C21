var canvas,block1,block2,block3,block4,ball,edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(70,580,200,30);
    block1.shapeColor = "Blue";
    
    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "Red";

    block3 = createSprite(515,580,200,30);
    block3.shaopeColor = "Green";

    block4 = createSprite(740,580,200,30);
    block4.shapeColor = "Yellow";



    //create box sprite and give velocity
    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = "White";
    ball.velocityX = 2;
    ball.velocityY = -4;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    drawSprites();


    //add condition to check if box touching surface and make it box
    if(ball.isTouching(block1)){
        ball.shapeColor = "Blue";
        music.play();
    }

    if(ball.isTouching(block2)){
        ball.shapeColor = "Red";
        music.play();
    }

    if(ball.isTouching(block3)){
        ball.shapeColor = "Green";
        music.play();
    }

    if(ball.isTouching(block4)){
        ball.shapeColor = "Yellow";
        music.play();
    }

}
