var striker , goalkeeper,goal,field

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30); 

    goal1 = createSprite(displayWidth-50,displayHeight/2,30,160);
    goal2 = createSprite(30,displayHeight/2,30,160);

    goalkeeper = createSprite(displayWidth-90,displayHeight/2,20,20);

    striker = createSprite(100,displayHeight/2,20,20);
}

function preload(){

}

function draw(){
    background(0,255,0);
    
    drawSprites();
}